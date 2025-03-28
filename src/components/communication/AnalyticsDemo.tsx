import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Avatar,
  Chip,
  Divider,
  Box,
  IconButton,
  styled,
  keyframes,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  Stop,
  SentimentSatisfied,
  People,
  Summarize,
} from "@mui/icons-material";
import WaveSurfer from "wavesurfer.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TranscriptLine {
  time: number;
  end: number;
  speaker: string;
  name: string;
  text: string;
  sentiment: string;
}

interface SpeakerInfo {
  role: string;
  name: string;
  color: string;
}

interface SentimentDataPoint {
  time: number;
  sentiment: number;
  name: string;
  index?: number;
}

const AnalyticsDemo = () => {
  // State for the demo
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [currentSpeaker, setCurrentSpeaker] = useState("");
  const [currentSpeakerName, setCurrentSpeakerName] = useState("");
  const [currentSentiment, setCurrentSentiment] = useState("neutral");
  const [showResults, setShowResults] = useState(false);
  const [visibleTranscript, setVisibleTranscript] = useState<TranscriptLine[]>(
    []
  );
  const [sentimentData, setSentimentData] = useState<SentimentDataPoint[]>([]);
  const [isWaveformReady, setIsWaveformReady] = useState(false);
  const [identifiedSpeakers, setIdentifiedSpeakers] = useState<SpeakerInfo[]>(
    []
  );

  const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(25, 118, 210, 0); }
  100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
`;

  const PulsingButton = styled(IconButton)(({ disabled }) => ({
    animation: !disabled ? `${pulse} 1.5s infinite` : "none",
    "&:hover": {
      animation: "none",
      backgroundColor: "#1565c0",
    },
  }));

  // Refs for WaveSurfer
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  // Exact transcript data with timestamps (in seconds)
  const transcriptData = [
    {
      time: 0,
      end: 4,
      speaker: "Agent",
      name: "Jeline",
      text: "Thank you for calling Anderson bank. My name is Jeline, how may I assist you today?",
      sentiment: "positive",
    },
    {
      time: 4,
      end: 9,
      speaker: "Customer",
      name: "Unknown",
      text: "Hello Jeline, I have a question about my credit card statement",
      sentiment: "neutral",
    },
    {
      time: 9,
      end: 13,
      speaker: "Agent",
      name: "Jeline",
      text: "Sure, I can help you with any questions you have about your credit card statement.",
      sentiment: "positive",
    },
    {
      time: 13,
      end: 14,
      speaker: "Customer",
      name: "Unknown",
      text: "Thank you.",
      sentiment: "positive",
    },
    {
      time: 14,
      end: 16,
      speaker: "Agent",
      name: "Jeline",
      text: "May I have your account number please.",
      sentiment: "neutral",
    },
    {
      time: 16,
      end: 22,
      speaker: "Customer",
      name: "Unknown",
      text: "Okay, my account number is 09 03 19 95",
      sentiment: "neutral",
    },
    {
      time: 22,
      end: 25,
      speaker: "Agent",
      name: "Jeline",
      text: "Thank you. Please give me a moment to access your account.",
      sentiment: "positive",
    },
    {
      time: 25,
      end: 27,
      speaker: "Customer",
      name: "Unknown",
      text: "Sure. Thanks.",
      sentiment: "positive",
    },
    {
      time: 27,
      end: 32,
      speaker: "Agent",
      name: "Jeline",
      text: "For security purposes may I have the last four digits of your social security number?",
      sentiment: "neutral",
    },
    {
      time: 32,
      end: 34,
      speaker: "Customer",
      name: "Unknown",
      text: "Sure. It's 1988.",
      sentiment: "neutral",
    },
    {
      time: 34,
      end: 38,
      speaker: "Agent",
      name: "Jeline",
      text: "Thank you. And may I have your first and last name please?",
      sentiment: "positive",
    },
    {
      time: 38,
      end: 44,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "My first name is Emily and my last name is Wagner.",
      sentiment: "neutral",
    },
    {
      time: 44,
      end: 46,
      speaker: "Agent",
      name: "Jeline",
      text: "Thank you miss Wagner.",
      sentiment: "positive",
    },
    {
      time: 46,
      end: 51,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "If you're looking at my account you'll see that they have been charged twice on the 18th.",
      sentiment: "negative",
    },
    {
      time: 51,
      end: 57,
      speaker: "Agent",
      name: "Jeline",
      text: "Yes, I see two charges for 209.34 cents.",
      sentiment: "neutral",
    },
    {
      time: 57,
      end: 59,
      speaker: "Agent",
      name: "Jeline",
      text: "Are you referring to these charges?",
      sentiment: "neutral",
    },
    {
      time: 59,
      end: 62,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "That's right. There should only be one charge.",
      sentiment: "negative",
    },
    {
      time: 62,
      end: 65,
      speaker: "Agent",
      name: "Jeline",
      text: "All right miss Wagner, I'll start an investigation of the second charge.",
      sentiment: "positive",
    },
    {
      time: 65,
      end: 66,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "How long will that take?",
      sentiment: "neutral",
    },
    {
      time: 66,
      end: 69,
      speaker: "Agent",
      name: "Jeline",
      text: "Usually within 24 hours ma'am.",
      sentiment: "positive",
    },
    {
      time: 69,
      end: 72,
      speaker: "Agent",
      name: "Jeline",
      text: "We will confirm with the merchant that there was only one charge,",
      sentiment: "positive",
    },
    {
      time: 72,
      end: 76,
      speaker: "Agent",
      name: "Jeline",
      text: "And after the merchant confirms the second charge will be removed",
      sentiment: "positive",
    },
    {
      time: 76,
      end: 79,
      speaker: "Agent",
      name: "Jeline",
      text: "Then, please check your account in three business days.",
      sentiment: "positive",
    },
    {
      time: 79,
      end: 81,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "Okay, I'll do that.",
      sentiment: "neutral",
    },
    {
      time: 81,
      end: 84,
      speaker: "Agent",
      name: "Jeline",
      text: "All right, and is there anything else that I can further assist you with?",
      sentiment: "positive",
    },
    {
      time: 84,
      end: 86,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "No, I think that will be all.",
      sentiment: "neutral",
    },
    {
      time: 86,
      end: 89,
      speaker: "Agent",
      name: "Jeline",
      text: "Okay, Thank you for calling Anderson bank Ms Wagner.",
      sentiment: "positive",
    },
    {
      time: 89,
      end: 91,
      speaker: "Customer",
      name: "Emily Wagner",
      text: "Thank you for your help Jeline.",
      sentiment: "positive",
    },
    {
      time: 91,
      end: 93,
      speaker: "Agent",
      name: "Jeline",
      text: "You're welcome. Have a nice day. Bye.",
      sentiment: "positive",
    },
  ];

  // Initialize WaveSurfer
  useEffect(() => {
    if (waveformRef.current && !wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#4a89dc",
        progressColor: "#3a7bd5",
        cursorColor: "#1a3b7d",
        barWidth: 2,
        barRadius: 3,
        cursorWidth: 1,
        height: 100,
        barGap: 2,
        normalize: true,
      });

      // Load local audio file (replace with your actual path)
      wavesurferRef.current.load("/communication/analysis/sample.mp3");

      wavesurferRef.current.on("ready", () => {
        setIsWaveformReady(true);
      });

      wavesurferRef.current.on("error", (err: Error) => {
        console.error("WaveSurfer error:", err);
      });
    }

    return () => {};
  }, []);

  // Simulate real-time analysis with 1-second processing delay
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (
      isAnalyzing &&
      progress < 100 &&
      isWaveformReady &&
      wavesurferRef.current
    ) {
      wavesurferRef.current.play();
      const speakerMap = new Map<string, SpeakerInfo>();
      const startTime = Date.now();
      const totalDuration = transcriptData[transcriptData.length - 1].time + 5; // Total conversation duration

      interval = setInterval(() => {
        const elapsedSeconds = (Date.now() - startTime) / 1000 - 1; // Subtract 1 second for processing delay
        const progressPercent = (elapsedSeconds / totalDuration) * 100;

        if (progressPercent >= 100) {
          clearInterval(interval as NodeJS.Timeout);
          setIsAnalyzing(false);
          setShowResults(true);
          if (wavesurferRef.current) wavesurferRef.current.stop();
          return;
        }

        setProgress(Math.min(progressPercent, 100));

        // Find the current line being "processed"
        const currentLine = transcriptData
          .filter((line) => elapsedSeconds > line.end)
          .pop(); // Ensures getting the latest one

        if (currentLine) {
          setCurrentTranscript(currentLine.text);
          setCurrentSpeaker(currentLine.speaker);
          setCurrentSpeakerName(currentLine.name);
          setCurrentSentiment(currentLine.sentiment);

          setVisibleTranscript((prev) => {
            const exists = prev.some(
              (item) =>
                item.text.trim().toLowerCase() ===
                currentLine.text.trim().toLowerCase()
            );

            if (!exists) {
              return [...prev, currentLine]; // Append to the last
            }
            return prev; // Return unchanged if duplicate
          });

          const { speaker, name } = currentLine;

          // If speaker is not in the map, add it
          if (!speakerMap.has(speaker)) {
            speakerMap.set(speaker, {
              role: speaker,
              name: name === "Unknown" ? "Identifying..." : name,
              color: speaker === "Agent" ? "primary.main" : "secondary.main",
            });
          }

          // If the name was previously unknown and now it's known, update it
          if (
            speakerMap.get(speaker)?.name === "Identifying..." &&
            name !== "Unknown"
          ) {
            speakerMap.set(speaker, {
              ...speakerMap.get(speaker)!,
              name: name,
            });
          }

          setIdentifiedSpeakers(Array.from(speakerMap.values()));

          // Update sentiment data for chart
          setSentimentData((prev) => {
            const sentimentValue =
              {
                positive: 2,
                neutral: 1,
                negative: 0,
                angry: -1,
              }[currentLine.sentiment] || 0;

            return [
              ...prev,
              {
                time: currentLine.time,
                sentiment: sentimentValue,
                name: `${currentLine.speaker}: ${currentLine.name}`,
              },
            ];
          });
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnalyzing, isWaveformReady]);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setShowResults(false);
    setCurrentTranscript("");
    setCurrentSpeaker("");
    setCurrentSpeakerName("");
    setCurrentSentiment("neutral");
    setVisibleTranscript([]);
    setSentimentData([]);
    setIdentifiedSpeakers([]);
    if (wavesurferRef.current && isWaveformReady) {
      wavesurferRef.current.seekTo(0);
    }
  };

  const stopAnalysis = () => {
    setIsAnalyzing(false);
    setProgress(0);
    setShowResults(false);
    setCurrentTranscript("");
    setCurrentSpeaker("");
    setCurrentSpeakerName("");
    setCurrentSentiment("neutral");
    setVisibleTranscript([]);
    setSentimentData([]);
    setIdentifiedSpeakers([]);
    if (wavesurferRef.current && isWaveformReady) {
      wavesurferRef.current.stop();
    }
  };

  const pauseAnalysis = () => {
    setIsAnalyzing(false);
    if (wavesurferRef.current && isWaveformReady) {
      wavesurferRef.current.pause();
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "success";
      case "negative":
        return "error";
      case "angry":
        return "error";
      case "neutral":
        return "info";
      default:
        return "primary";
    }
  };

  const sentimentChartData = sentimentData.map((data, index) => ({
    ...data,
    index,
  }));

  // Generate summary based on transcript
  const generateSummary = () => {
    const customerName =
      identifiedSpeakers.find((s) => s.role === "Customer")?.name ||
      "the customer";
    const agentName =
      identifiedSpeakers.find((s) => s.role === "Agent")?.name || "the agent";

    return `${customerName} called regarding a duplicate charge on their credit card statement. ${agentName} verified the duplicate charge of $209.34 and initiated an investigation. The investigation should be completed within 24 hours, with resolution expected in 3 business days. The call ended positively with ${customerName} expressing gratitude for the assistance.`;
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Controls Section */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h4" gutterBottom>
                Real-Time Analysis Demo
              </Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <PulsingButton
                  color="primary"
                  onClick={startAnalysis}
                  disabled={isAnalyzing || !isWaveformReady}
                >
                  <PlayArrow />
                </PulsingButton>
                <IconButton
                  color="secondary"
                  onClick={pauseAnalysis}
                  disabled={!isAnalyzing}
                >
                  <Pause />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={stopAnalysis}
                  disabled={!isAnalyzing && progress === 0}
                >
                  <Stop />
                </IconButton>
                <Typography variant="body1" sx={{ ml: 2 }}>
                  {!isWaveformReady
                    ? "Initializing audio..."
                    : isAnalyzing
                    ? "Analyzing..."
                    : progress === 100
                    ? "Analysis Complete"
                    : "Ready"}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ mt: 2, height: 10 }}
              />

              {/* WaveSurfer Audio Waveform */}
              <Box
                ref={waveformRef}
                sx={{
                  mt: 2,
                  width: "100%",
                  minHeight: "100px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              />
              {!isWaveformReady && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Loading audio waveform...
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Live Feed Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Live Transcription
              </Typography>

              {currentTranscript ? (
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Avatar
                        sx={{
                          bgcolor:
                            currentSpeaker === "Agent"
                              ? "primary.main"
                              : "secondary.main",
                          mr: 2,
                        }}
                      >
                        {currentSpeaker.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {currentSpeaker}: {currentSpeakerName}
                        </Typography>
                        <Typography variant="caption">
                          {currentSpeaker === "Agent"
                            ? "Customer Service Representative"
                            : "Customer"}
                        </Typography>
                      </Box>
                      <Chip
                        label={currentSentiment}
                        color={getSentimentColor(currentSentiment)}
                        size="small"
                        sx={{ ml: "auto" }}
                        icon={<SentimentSatisfied />}
                      />
                    </Box>
                    <Typography variant="body1">{currentTranscript}</Typography>
                  </CardContent>
                </Card>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  {progress === 0
                    ? "No audio being analyzed"
                    : "Processing audio..."}
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Real-time Metrics */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Real-time Metrics
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Box display="flex" alignItems="center">
                        <People color="primary" sx={{ mr: 1 }} />
                        <Typography variant="subtitle1">
                          Speakers Identified
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        {identifiedSpeakers.length > 0 ? (
                          identifiedSpeakers.map((speaker, i) => (
                            <Box
                              key={i}
                              display="flex"
                              alignItems="center"
                              mb={1}
                            >
                              <Avatar
                                sx={{
                                  bgcolor: speaker.color,
                                  width: 24,
                                  height: 24,
                                  fontSize: "0.8rem",
                                  mr: 1,
                                }}
                              >
                                {speaker.name.charAt(0)}
                              </Avatar>
                              <Typography>
                                {speaker.role}: {speaker.name}
                              </Typography>
                            </Box>
                          ))
                        ) : (
                          <Typography variant="body2" color="text.secondary">
                            {progress > 10 ? "Analyzing..." : "--"}
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Box display="flex" alignItems="center">
                        <SentimentSatisfied color="primary" sx={{ mr: 1 }} />
                        <Typography variant="subtitle1">
                          Current Sentiment
                        </Typography>
                      </Box>
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {currentSentiment
                          ? currentSentiment.charAt(0).toUpperCase() +
                            currentSentiment.slice(1)
                          : "--"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Sentiment Trend
                      </Typography>
                      <Box sx={{ width: "100%", height: 200 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={sentimentChartData}
                            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="time"
                              label={{
                                value: "Time (seconds)",
                                position: "insideBottomRight",
                              }}
                            />
                            <YAxis domain={[-1.5, 2.5]} tickCount={5} />
                            <Tooltip
                              formatter={(value: number | string) => {
                                const sentimentMap: Record<string, string> = {
                                  "2": "Positive",
                                  "1": "Neutral",
                                  "0": "Negative",
                                  "-1": "Angry",
                                };
                                return [
                                  sentimentMap[value.toString()] || value,
                                  "Sentiment",
                                ];
                              }}
                              labelFormatter={(value) => `Time: ${value}s`}
                            />
                            <Line
                              type="monotone"
                              dataKey="sentiment"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                              dot={{ r: 4 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Results Section */}
          {!showResults && (
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Conversation Analysis Results
                </Typography>

                <Box>
                  <Typography variant="body1" color="text.secondary">
                    Results will appear once analysis is completed
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )}
          {showResults && (
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Conversation Analysis Results
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={1}>
                          <Summarize color="primary" sx={{ mr: 1 }} />
                          <Typography variant="subtitle1">
                            Conversation Summary
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          {generateSummary()}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Key Metrics
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                              Call Duration
                            </Typography>
                            <Typography variant="h4">1:31</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                              Resolution Status
                            </Typography>
                            <Typography variant="h4">
                              Investigation Started
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                              Overall Sentiment
                            </Typography>
                            <Typography variant="h4">Positive</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                              Customer Satisfaction
                            </Typography>
                            <Typography variant="h4">4.2/5</Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Key Information Extracted
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary">
                              Customer Name
                            </Typography>
                            <Typography variant="body1">
                              Emily Wagner
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary">
                              Agent Name
                            </Typography>
                            <Typography variant="body1">Jeline</Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary">
                              Account Number
                            </Typography>
                            <Typography variant="body1">09 03 19 95</Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary">
                              Last 4 SSN
                            </Typography>
                            <Typography variant="body1">1988</Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2" color="text.secondary">
                              Issue Reported
                            </Typography>
                            <Typography variant="body1">
                              Duplicate charge of $209.34 on 18th
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography variant="body2" color="text.secondary">
                              Resolution Timeline
                            </Typography>
                            <Typography variant="body1">
                              Investigation in 24 hours, resolution in 3
                              business days
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          )}

          {/* Full Transcript Section */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Conversation Transcript
              </Typography>

              <Box maxHeight={500} overflow={"auto"}>
                {visibleTranscript.length > 0 ? (
                  visibleTranscript.map((line, i) => (
                    <Box key={i} mb={2}>
                      <Box display="flex" alignItems="center" mb={0.5}>
                        <Avatar
                          sx={{
                            bgcolor:
                              line.speaker === "Agent"
                                ? "primary.main"
                                : "secondary.main",
                            width: 24,
                            height: 24,
                            fontSize: "0.8rem",
                            mr: 1,
                          }}
                        >
                          {line.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {line.speaker}: {line.name}
                          </Typography>
                          <Typography variant="caption">
                            {line.time}s
                          </Typography>
                        </Box>
                        <Chip
                          label={line.sentiment}
                          color={getSentimentColor(line.sentiment)}
                          size="small"
                          sx={{ ml: "auto" }}
                          icon={
                            <SentimentSatisfied sx={{ fontSize: "0.8rem" }} />
                          }
                        />
                      </Box>
                      <Typography variant="body1" sx={{ pl: 4 }}>
                        {line.text}
                      </Typography>
                      {i < visibleTranscript.length - 1 && (
                        <Divider sx={{ mt: 1 }} />
                      )}
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1" color="text.secondary">
                    {progress === 0
                      ? "Transcript will appear here during analysis"
                      : "Processing first lines..."}
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AnalyticsDemo;

import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import {
  Call,
  CallEnd,
  CallReceived,
  People,
  Assessment,
  SentimentSatisfied,
  Timeline,
  HourglassEmpty,
  CheckCircle,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
} from "recharts";

// Define TypeScript interfaces for your data structures
interface OngoingCall {
  id: string;
  agent: string;
  customer: string;
  duration: number;
  issue: string;
  sentiment: "positive" | "neutral" | "negative";
  time: string;
}

interface CallMetrics {
  totalCallsToday: number;
  avgWaitTime: string;
  avgHandleTime: string;
  abandonmentRate: string;
  firstCallResolution: string;
  serviceLevel: string;
}

interface AgentPerformance {
  name: string;
  avatar: string;
  rating: string;
  calls: number;
  aht: string;
  fcr: string;
}

interface QualityMetrics {
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  compliance: number;
  csat: number;
  qualityScore: number;
}

interface SentimentTrend {
  hour: string;
  positive: number;
  neutral: number;
  negative: number;
}

interface CallVolume {
  hour: string;
  calls: number;
  handled: number;
  abandoned: number;
}

interface SentimentData {
  name: string;
  value: number;
  color: string;
}

interface AgentChartData {
  name: string;
  rating: number;
  calls: number;
  aht: number;
}

const AnalyticsDashboardDemo = () => {
  // Mock data states with proper types
  const [ongoingCalls, setOngoingCalls] = useState<OngoingCall[]>([]);
  const [callMetrics, setCallMetrics] = useState<CallMetrics>({
    totalCallsToday: 0,
    avgWaitTime: "0:00",
    avgHandleTime: "0:00",
    abandonmentRate: "0%",
    firstCallResolution: "0%",
    serviceLevel: "0%",
  });
  const [agentPerformance, setAgentPerformance] = useState<AgentPerformance[]>(
    []
  );
  const [qualityMetrics, setQualityMetrics] = useState<QualityMetrics>({
    sentiment: {
      positive: 0,
      neutral: 0,
      negative: 0,
    },
    compliance: 0,
    csat: 0,
    qualityScore: 0,
  });
  const [sentimentTrend, setSentimentTrend] = useState<SentimentTrend[]>([]);
  const [callVolume, setCallVolume] = useState<CallVolume[]>([]);

  // Color scheme
  const colors = {
    primary: "#3f51b5",
    secondary: "#f50057",
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3",
    chart: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"],
  };

  // Generate mock ongoing calls
  const generateOngoingCalls = (): OngoingCall[] => {
    const agents = ["Jeline", "Michael", "Sarah", "David", "Priya"];
    const customers = [
      "Emily Wagner",
      "Robert Chen",
      "Maria Garcia",
      "James Wilson",
      "Aisha Khan",
    ];
    const issues = [
      "Credit card dispute",
      "Account balance inquiry",
      "Loan application",
      "Fraud alert",
      "Mobile app issue",
      "Payment question",
      "Account opening",
    ];
    const sentiments: ("positive" | "neutral" | "negative")[] = [
      "positive",
      "neutral",
      "negative",
    ];

    const calls: OngoingCall[] = [];
    const callCount = Math.floor(Math.random() * 3) + 3; // 3-5 ongoing calls

    for (let i = 0; i < callCount; i++) {
      const duration = Math.floor(Math.random() * 600) + 60; // 1-10 minutes in seconds
      const agent = agents[Math.floor(Math.random() * agents.length)];
      const customer = customers[Math.floor(Math.random() * customers.length)];
      const issue = issues[Math.floor(Math.random() * issues.length)];
      const sentiment =
        sentiments[Math.floor(Math.random() * sentiments.length)];

      calls.push({
        id: `call-${i}-${Date.now()}`,
        agent,
        customer,
        duration,
        issue,
        sentiment,
        time: `${Math.floor(duration / 60)}:${(duration % 60)
          .toString()
          .padStart(2, "0")}`,
      });
    }

    return calls;
  };

  // Generate mock call metrics
  const generateCallMetrics = (): CallMetrics => {
    return {
      totalCallsToday: Math.floor(Math.random() * 100) + 50,
      avgWaitTime: `${Math.floor(Math.random() * 3) + 1}:${Math.floor(
        Math.random() * 60
      )
        .toString()
        .padStart(2, "0")}`,
      avgHandleTime: `${Math.floor(Math.random() * 5) + 3}:${Math.floor(
        Math.random() * 60
      )
        .toString()
        .padStart(2, "0")}`,
      abandonmentRate: `${(Math.random() * 10).toFixed(1)}%`,
      firstCallResolution: `${(Math.random() * 20 + 70).toFixed(1)}%`,
      serviceLevel: `${(Math.random() * 15 + 75).toFixed(1)}%`,
    };
  };

  // Generate mock agent performance
  const generateAgentPerformance = (): AgentPerformance[] => {
    const agents: AgentPerformance[] = [
      {
        name: "Jeline",
        avatar: "J",
        rating: "4.7",
        calls: 24,
        aht: "4:12",
        fcr: "82%",
      },
      {
        name: "Michael",
        avatar: "M",
        rating: "4.3",
        calls: 18,
        aht: "5:45",
        fcr: "76%",
      },
      {
        name: "Sarah",
        avatar: "S",
        rating: "4.9",
        calls: 30,
        aht: "3:58",
        fcr: "89%",
      },
      {
        name: "David",
        avatar: "D",
        rating: "3.9",
        calls: 15,
        aht: "6:23",
        fcr: "72%",
      },
      {
        name: "Priya",
        avatar: "P",
        rating: "4.5",
        calls: 22,
        aht: "4:45",
        fcr: "84%",
      },
    ];

    // Add some random variation
    return agents.map((agent) => ({
      ...agent,
      rating: (parseFloat(agent.rating) + (Math.random() * 0.4 - 0.2)).toFixed(
        1
      ),
      calls: agent.calls + Math.floor(Math.random() * 5),
      aht: `${
        Math.floor(Math.random() * 2) + parseInt(agent.aht.split(":")[0])
      }:${Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")}`,
      fcr: `${parseInt(agent.fcr) + Math.floor(Math.random() * 6 - 3)}%`,
    }));
  };

  // Generate mock quality metrics
  const generateQualityMetrics = (): QualityMetrics => {
    return {
      sentiment: {
        positive: Math.floor(Math.random() * 15) + 70,
        neutral: Math.floor(Math.random() * 10) + 15,
        negative: Math.floor(Math.random() * 10) + 5,
      },
      compliance: Math.floor(Math.random() * 10) + 85,
      csat: Math.floor(Math.random() * 10) + 80,
      qualityScore: Math.floor(Math.random() * 10) + 75,
    };
  };

  // Generate mock sentiment trend
  const generateSentimentTrend = (): SentimentTrend[] => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    return hours.map((hour) => ({
      hour: `${hour}:00`,
      positive: Math.floor(Math.random() * 20) + 70,
      neutral: Math.floor(Math.random() * 15) + 15,
      negative: Math.floor(Math.random() * 10) + 5,
    }));
  };

  // Generate mock call volume
  const generateCallVolume = (): CallVolume[] => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    return hours.map((hour) => ({
      hour: `${hour}:00`,
      calls: Math.floor(Math.random() * 50) + 10,
      handled: Math.floor(Math.random() * 45) + 5,
      abandoned: Math.floor(Math.random() * 10) + 1,
    }));
  };

  // Update all data
  const updateData = () => {
    setOngoingCalls(generateOngoingCalls());
    setCallMetrics(generateCallMetrics());
    setAgentPerformance(generateAgentPerformance());
    setQualityMetrics(generateQualityMetrics());
    setSentimentTrend(generateSentimentTrend());
    setCallVolume(generateCallVolume());
  };

  // Initialize and set up data refresh
  useEffect(() => {
    updateData();

    const interval = setInterval(() => {
      updateData();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Sentiment data for pie chart
  const sentimentData: SentimentData[] = [
    {
      name: "Positive",
      value: qualityMetrics.sentiment?.positive || 75,
      color: colors.success,
    },
    {
      name: "Neutral",
      value: qualityMetrics.sentiment?.neutral || 15,
      color: colors.info,
    },
    {
      name: "Negative",
      value: qualityMetrics.sentiment?.negative || 10,
      color: colors.error,
    },
  ];

  // Agent performance for bar chart
  const agentChartData: AgentChartData[] = agentPerformance.map((agent) => ({
    name: agent.name,
    rating: parseFloat(agent.rating),
    calls: agent.calls,
    aht:
      parseInt(agent.aht.split(":")[0]) +
      parseInt(agent.aht.split(":")[1]) / 60,
  }));

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h4" gutterBottom>
                Real-Time Analysis Dashboard Demo
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} py={2}>
          {/* Ongoing Calls */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Call color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Ongoing Calls ({ongoingCalls.length})
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {ongoingCalls.map((call) => (
                  <Grid item xs={12} sm={6} key={call.id}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" alignItems="center" mb={1}>
                          <Avatar
                            sx={{
                              bgcolor:
                                call.sentiment === "positive"
                                  ? colors.success
                                  : call.sentiment === "negative"
                                  ? colors.error
                                  : colors.info,
                              mr: 2,
                            }}
                          >
                            {call.agent.charAt(0)}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle1">
                              {call.agent}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Handling call with {call.customer}
                            </Typography>
                          </Box>
                          <Chip
                            label={call.sentiment}
                            size="small"
                            color={
                              call.sentiment === "positive"
                                ? "success"
                                : call.sentiment === "negative"
                                ? "error"
                                : "info"
                            }
                          />
                        </Box>

                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mt={1}
                        >
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Issue
                            </Typography>
                            <Typography variant="body2">
                              {call.issue}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Duration
                            </Typography>
                            <Typography variant="body2" align="right">
                              {call.time}
                            </Typography>
                          </Box>
                        </Box>

                        <LinearProgress
                          variant="determinate"
                          value={
                            (parseInt(call.duration.toString()) / 600) * 100
                          } // 10 min max
                          sx={{ mt: 1, height: 6 }}
                          color={
                            call.sentiment === "positive"
                              ? "success"
                              : call.sentiment === "negative"
                              ? "error"
                              : "info"
                          }
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Call Metrics */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Box display="flex" alignItems="center" mb={2}>
                <CallReceived color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Call Center Metrics</Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Call fontSize="large" color="primary" />
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {callMetrics.totalCallsToday}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Calls Today
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                      <HourglassEmpty fontSize="large" color="primary" />
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {callMetrics.avgWaitTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Avg Wait Time
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Timeline fontSize="large" color="primary" />
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {callMetrics.avgHandleTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Avg Handle Time
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                      <CallEnd fontSize="large" color="primary" />
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {callMetrics.abandonmentRate}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Abandonment Rate
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                      <CheckCircle fontSize="large" color="primary" />
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {callMetrics.firstCallResolution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        First Call Resolution
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Assessment fontSize="large" color="primary" />
                      <Typography variant="h4" sx={{ mt: 1 }}>
                        {callMetrics.serviceLevel}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Service Level
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} py={2}>
          {/* Agent Performance */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <People color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Agent Performance</Typography>
              </Box>

              <Box sx={{ height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={agentChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                      yAxisId="left"
                      orientation="left"
                      stroke={colors.primary}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke={colors.secondary}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="rating"
                      name="Rating (1-5)"
                      fill={colors.primary}
                    >
                      {agentChartData.map((_entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors.chart[index % colors.chart.length]}
                        />
                      ))}
                    </Bar>
                    <Bar
                      yAxisId="right"
                      dataKey="aht"
                      name="AHT (minutes)"
                      fill={colors.secondary}
                    >
                      {agentChartData.map((_entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors.chart[index % colors.chart.length]}
                        />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                </ResponsiveContainer>
              </Box>

              <List>
                {agentPerformance.map((agent, index) => (
                  <ListItem key={index} divider>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor: colors.chart[index % colors.chart.length],
                        }}
                      >
                        {agent.avatar}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={agent.name}
                      secondary={`Rating: ${agent.rating} | Calls: ${agent.calls} | AHT: ${agent.aht} | FCR: ${agent.fcr}`}
                    />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CircularProgress
                        variant="determinate"
                        value={parseFloat(agent.rating) * 20}
                        size={40}
                        thickness={4}
                        color={
                          parseFloat(agent.rating) >= 4.5
                            ? "success"
                            : parseFloat(agent.rating) >= 3.5
                            ? "primary"
                            : "warning"
                        }
                      />
                      <Box sx={{ ml: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Score
                        </Typography>
                        <Typography variant="body1">{agent.rating}</Typography>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Performance Metrics */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Timeline color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Performance Trends</Typography>
              </Box>

              <Box sx={{ height: 300, mb: 3 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={sentimentTrend.slice(0, 8)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="positive"
                      stroke={colors.success}
                      name="Positive"
                    />
                    <Line
                      type="monotone"
                      dataKey="neutral"
                      stroke={colors.info}
                      name="Neutral"
                    />
                    <Line
                      type="monotone"
                      dataKey="negative"
                      stroke={colors.error}
                      name="Negative"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>

              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={callVolume.slice(0, 8)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="calls"
                      stroke={colors.primary}
                      name="Total Calls"
                    />
                    <Line
                      type="monotone"
                      dataKey="handled"
                      stroke={colors.success}
                      name="Handled"
                    />
                    <Line
                      type="monotone"
                      dataKey="abandoned"
                      stroke={colors.error}
                      name="Abandoned"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} py={2}>
          {/* Quality Overview */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Box display="flex" alignItems="center" mb={2}>
                <SentimentSatisfied color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Call Sentiment</Typography>
              </Box>

              <Box sx={{ height: 300, p: 3 }}>
                {sentimentData.map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>{item.name}</Typography>
                      <Typography>{item.value}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.value}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: `${item.color}30`,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: item.color,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>
                  Quality Metrics
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card variant="outlined">
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h4">
                          {qualityMetrics.compliance}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Compliance
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card variant="outlined">
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h4">
                          {qualityMetrics.csat}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          CSAT Score
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Overall Quality Score
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={qualityMetrics.qualityScore}
                          color={
                            qualityMetrics.qualityScore >= 85
                              ? "success"
                              : qualityMetrics.qualityScore >= 70
                              ? "primary"
                              : "warning"
                          }
                          sx={{ height: 10, mt: 1 }}
                        />
                        <Typography variant="h5" align="center" sx={{ mt: 1 }}>
                          {qualityMetrics.qualityScore}/100
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Quality Details */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Assessment color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Quality Analysis</Typography>
              </Box>

              <Box sx={{ height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={sentimentTrend}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="positive"
                      stroke={colors.success}
                      name="Positive"
                    />
                    <Line
                      type="monotone"
                      dataKey="neutral"
                      stroke={colors.info}
                      name="Neutral"
                    />
                    <Line
                      type="monotone"
                      dataKey="negative"
                      stroke={colors.error}
                      name="Negative"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>

              <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>
                  Recent Quality Evaluations
                </Typography>
                <Grid container spacing={2}>
                  {[1, 2, 3].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={1}>
                            <Avatar
                              sx={{
                                bgcolor:
                                  colors.chart[item % colors.chart.length],
                                mr: 2,
                              }}
                            >
                              {["J", "M", "S"][item - 1]}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle1">
                                {["Jeline", "Michael", "Sarah"][item - 1]}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {
                                  [
                                    "Credit Card Dispute",
                                    "Account Inquiry",
                                    "Loan Application",
                                  ][item - 1]
                                }
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={1}
                          >
                            <Chip
                              label={
                                ["Positive", "Neutral", "Positive"][item - 1]
                              }
                              size="small"
                              color={["success", "info", "success"][item - 1]}
                            />
                            <Typography variant="body2">
                              Score: {[92, 85, 89][item - 1]}/100
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AnalyticsDashboardDemo;

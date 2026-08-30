'use client';

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  TrendingUp,
  ShowChart,
  LocalFireDepartment,
  Warning,
  Info,
  ExpandMore,
  AccountBalance,
  AutoAwesome,
  Psychology,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const AlertExplainer: React.FC = () => {
  const alertTypes = [
    {
      type: "Unusual Options Activity",
      emoji: "🎯",
      icon: <TrendingUp fontSize="large" color="primary" />,
      description: "Real-time detection of volume spikes, OI changes, and aggressive trading",
      triggers: [
        "Volume 3x-20x above 7-day average",
        "Open Interest changes 10-60%+",
        "Aggressive buy/sell side pressure (70%+)",
        "Rapid premium movements",
      ],
      example: "🔥 EXTREME: NIFTY 24500 CE | Vol: 8.5x avg | OI: +2.1k (Long buildup) | Agg: 94% BUY | Score: 96/100",
      action: "Primary signal - Watch for immediate market moves",
    },
    {
      type: "Smart Money Correlation",
      emoji: "💰",
      icon: <AutoAwesome fontSize="large" color="primary" />,
      description: "Multiple signals aligning - options + bulk deals + block deals + operator activity",
      triggers: [
        "Unusual options activity + bulk deals in same symbol",
        "High correlation score (65-100 points)",
        "All signals agree on direction (bullish/bearish)",
        "2+ independent signals within 24 hours",
      ],
      example: "⚡ HIGH CONFIDENCE CORRELATION: RELIANCE | Score: 75/100 | Signals: Options (35) + Bulk Deals (25) + Operator (15) | Direction: BULLISH 📈",
      action: "Highest conviction - Multiple institutional players positioning",
    },
    {
      type: "Accumulation Pattern",
      emoji: "🔁",
      icon: <Psychology fontSize="large" color="primary" />,
      description: "Repeated positioning over multiple days suggesting sustained institutional interest",
      triggers: [
        "3+ correlation alerts in same symbol within 7 days",
        "Consistent directional agreement (all bullish or all bearish)",
        "Minimum score threshold maintained",
        "Pattern recognition across time periods",
      ],
      example: "🔥 ACCUMULATION PATTERN: HDFCBANK | 4 signals in 5 days | All BULLISH | Avg Score: 68 | Institutions building long positions",
      action: "Strong trend signal - Consider longer-term positioning",
    },
    {
      type: "Bulk Deals (Operator Activity)",
      emoji: "📊",
      icon: <ShowChart fontSize="large" color="primary" />,
      description: "Large block purchases/sales reported to NSE/BSE, often by known operators",
      triggers: [
        "Deal value ≥ ₹5 crore",
        "Net directional value ≥ ₹5 crore (buy - sell)",
        "3+ deals in same symbol = strong signal",
        "Featured operators tracked separately",
      ],
      example: "📊 BULK DEALS: SBIN | 3 deals | Net Buy: ₹42 Cr | Operator: [Featured] | Direction: BULLISH",
      action: "Operator positioning - Often precedes options activity by 1-2 days",
    },
    {
      type: "Block Deals (Large Trades)",
      emoji: "🏢",
      icon: <AccountBalance fontSize="large" color="primary" />,
      description: "Single large institutional trades executed off the open market",
      triggers: [
        "Trade value ≥ ₹25 crore",
        "₹100+ crore = highly significant",
        "Reported after market hours",
        "Institutional or HNI activity",
      ],
      example: "🏢 BLOCK DEAL: ICICIBANK | ₹135 Cr | Post-market institutional trade | Buyer: Large Fund",
      action: "Institutional positioning - Watch for follow-through",
    },
    {
      type: "Divergence Warning",
      emoji: "⚠️",
      icon: <Warning fontSize="large" color="primary" />,
      description: "Conflicting signals - some bullish, some bearish - suggesting uncertainty",
      triggers: [
        "Options activity bullish BUT bulk deals bearish (or vice versa)",
        "Signals don't agree on direction",
        "Market at inflection point or indecision",
      ],
      example: "⚠️ DIVERGENCE: TATAMOTORS | Options: BULLISH (CE activity) | Bulk Deals: BEARISH (selling) | Conflicting institutional views",
      action: "Caution - Wait for clarity or trade range-bound strategies",
    },
  ];

  const severityLevels = [
    {
      severity: "EXTREME",
      color: "#f44336",
      percentile: "Top 1%",
      quota: "∞ Unlimited (Always FREE)",
      description: "Only the most significant institutional moves - never miss these",
      threshold: "Score 80-100: 20x+ volume OR 60%+ OI OR exceptional correlation",
      icon: <LocalFireDepartment />,
    },
    {
      severity: "HIGH",
      color: "#ff9800",
      percentile: "Top 5%",
      quota: "25 alerts/day (Free tier)",
      description: "Strong unusual activity worth immediate investigation",
      threshold: "Score 65-79: 10x+ volume OR 40%+ OI OR strong correlation",
      icon: <Warning />,
    },
    {
      severity: "MEDIUM",
      color: "#ffc107",
      percentile: "Top 10%",
      quota: "25 alerts/day (Free tier)",
      description: "Moderate unusual activity - monitor for confirmation",
      threshold: "Score 45-64: 5x+ volume OR 20%+ OI OR moderate correlation",
      icon: <TrendingUp />,
    },
    {
      severity: "LOW",
      color: "#2196f3",
      percentile: "Top 20%",
      quota: "50 alerts/day (Free tier)",
      description: "All detected unusual activity beyond baseline",
      threshold: "Score 0-44: 3x+ volume OR 10%+ OI OR baseline correlation",
      icon: <Info />,
    },
  ];

  const correlationScoring = [
    {
      signal: "Unusual Options Activity",
      maxPoints: 35,
      description: "Most important - direct market signal with volume/OI/aggression",
    },
    {
      signal: "Bulk Deals (Operator Activity)",
      maxPoints: 20,
      description: "Strong confirmation - known operators accumulating/distributing",
    },
    {
      signal: "Block Deals (Large Trades)",
      maxPoints: 10,
      description: "Institutional positioning - large off-market trades",
    },
    {
      signal: "Featured Operator Bonus",
      maxPoints: 10,
      description: "Quality multiplier when bulk deals involve successful operators",
    },
    {
      signal: "FII/DII Institutional Flows",
      maxPoints: 25,
      description: "Coming Soon - Foreign & domestic institutional buying/selling data",
      comingSoon: true,
    },
  ];

  const interpretationExamples = [
    {
      title: "🚀 Perfect Storm (Multiple Signals Align)",
      alerts: [
        "🔥 EXTREME: RELIANCE 2800 CE | Vol: 15x | OI: +4.2k | Agg: 91% BUY | Score: 94",
        "💰 SMART MONEY CORRELATION: RELIANCE | Score: 85/100 (Options 35 + Bulk 20 + Block 10 + Operator 20)",
        "📊 BULK DEALS: RELIANCE | 4 deals | Net Buy: ₹68 Cr | 2 featured operators",
      ],
      interpretation:
        "Ultimate high-conviction setup. Options volume exploding, institutions buying bulk shares, known operators accumulating, AND large block trades. All signals pointing BULLISH. This is what you wait for.",
      action:
        "STRONG BUY signal. Consider: Long RELIANCE equity, 2800 CE calls, bull call spreads. Set tight stops. Target: Previous resistance levels.",
    },
    {
      title: "🔁 Accumulation Pattern (Multi-Day Build)",
      alerts: [
        "Day 1: 📊 BULK DEALS: HDFCBANK | ₹25 Cr net buy",
        "Day 2: 🎯 Options: HDFCBANK 1700 CE | 6x volume | Score: 71",
        "Day 3: 💰 CORRELATION: HDFCBANK | Score: 78 (2 signals)",
        "Day 5: 🔥 EXTREME + 🔁 ACCUMULATION PATTERN: HDFCBANK | 4 signals in 5 days",
      ],
      interpretation:
        "Sustained institutional accumulation over multiple days. Not a one-time trade - this is position building for a larger move. Operators started Day 1, options players joined Day 2-3, pattern confirmed Day 5.",
      action:
        "Trend signal - Consider swing trades (5-15 day holding). DCA into position. Watch for breakout above resistance.",
    },
    {
      title: "⚠️ Divergence Warning (Conflicting Signals)",
      alerts: [
        "🎯 Options: TATAMOTORS 950 CE | High activity | BULLISH",
        "📊 Bulk Deals: TATAMOTORS | ₹18 Cr net SELL | BEARISH",
        "⚠️ DIVERGENCE: TATAMOTORS | Conflicting institutional views",
      ],
      interpretation:
        "Mixed signals = uncertainty. Options traders betting on upside, but bulk deal sellers exiting. Either (1) Options traders wrong, (2) Sellers wrong, or (3) Range-bound consolidation ahead. Market at inflection point.",
      action:
        "WAIT for clarity. Avoid directional bets. Consider: Iron condors, strangles, or stay cash. Let one side win first.",
    },
    {
      title: "📊 Operator Lead (Bulk Deals → Options)",
      alerts: [
        "Day 1: 📊 BULK DEALS: BAJFINANCE | ₹42 Cr net buy | Featured operator",
        "Day 2: 🎯 Options: BAJFINANCE 7500 CE | 8x volume | Following bulk activity",
      ],
      interpretation:
        "Classic pattern: Operators accumulate shares first (Day 1), options market follows (Day 2). Bulk deals often LEAD options by 1-2 days. Featured operator increases confidence - they have track record.",
      action:
        "Follow the smart money. If you see bulk deals first, watch for options activity next day. Enter early in the chain.",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Understanding Your RxSynapse Alerts
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          We send 6 different types of alerts combining options activity, bulk deals, block deals, and correlation signals
        </Typography>

        {/* Alert Types Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
            Types of Alerts You'll Receive
          </Typography>
          <Grid container spacing={3}>
            {alertTypes.map((alert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 3,
                      "&:hover": {
                        boxShadow: 6,
                        transform: "translateY(-4px)",
                        transition: "all 0.3s",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box sx={{ mr: 2 }}>{alert.icon}</Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" fontWeight="600">
                            {alert.emoji} {alert.type}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {alert.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="caption" display="block" fontWeight="600" sx={{ mb: 1 }}>
                        Triggered by:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 2, flexGrow: 1 }}>
                        {alert.triggers.map((trigger, i) => (
                          <Typography
                            component="li"
                            variant="caption"
                            key={i}
                            sx={{ mb: 0.5 }}
                            color="text.secondary"
                          >
                            {trigger}
                          </Typography>
                        ))}
                      </Box>
                      <Box
                        sx={{
                          bgcolor: "rgba(25, 118, 210, 0.05)",
                          p: 1.5,
                          borderRadius: 1,
                          mb: 1.5,
                          fontFamily: "monospace",
                          fontSize: "0.75rem",
                        }}
                      >
                        {alert.example}
                      </Box>
                      <Typography variant="caption" color="primary.main" fontWeight="600">
                        ✓ {alert.action}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Severity Levels */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
            Alert Severity Levels
          </Typography>
          <Grid container spacing={3}>
            {severityLevels.map((level, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderLeft: `4px solid ${level.color}`,
                    boxShadow: 3,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ mr: 2, color: level.color }}>{level.icon}</Box>
                      <Box>
                        <Chip
                          label={level.severity}
                          sx={{
                            bgcolor: level.color,
                            color: "white",
                            fontWeight: "bold",
                            mb: 0.5,
                          }}
                          size="small"
                        />
                        <Typography variant="caption" display="block" color="text.secondary">
                          {level.percentile} • {level.quota}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" gutterBottom fontWeight="600">
                      {level.description}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="caption" display="block" color="text.secondary">
                      <strong>Threshold:</strong> {level.threshold}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Smart Money Correlation Scoring */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
            How Correlation Scores Work
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Smart Money Correlation alerts combine multiple signals into a 0-100 score. Higher scores = more institutional consensus.
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "primary.main" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Signal Type</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Max Points</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>What It Measures</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {correlationScoring.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(odd)": { bgcolor: "action.hover" },
                      opacity: item.comingSoon ? 0.6 : 1,
                    }}
                  >
                    <TableCell sx={{ fontWeight: "600" }}>
                      {item.signal}
                      {item.comingSoon && (
                        <Chip label="Coming Soon" size="small" sx={{ ml: 1 }} color="info" />
                      )}
                    </TableCell>
                    <TableCell sx={{ fontFamily: "monospace", color: "primary.main" }}>
                      {item.maxPoints} pts
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2, p: 2, bgcolor: "action.hover", borderRadius: 1 }}>
            <Typography variant="caption">
              <strong>Example:</strong> Score 85/100 = Options Activity (35 pts) + Bulk Deals (20 pts) + Block Deals (10 pts) + Featured Operator Bonus (10 pts) + Historical Pattern Boost (10 pts) = HIGH confidence correlation alert
            </Typography>
          </Box>
        </Box>

        {/* Real-World Examples */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
            Real-World Alert Scenarios
          </Typography>

          {interpretationExamples.map((example, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                boxShadow: 2,
                "&:before": { display: "none" },
                bgcolor: "background.paper",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1" fontWeight="600">
                  {example.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  Alert Sequence:
                </Typography>
                {example.alerts.map((alert, i) => (
                  <Box
                    key={i}
                    sx={{
                      bgcolor: "rgba(25, 118, 210, 0.05)",
                      p: 1.5,
                      borderRadius: 1,
                      mb: 1,
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                    }}
                  >
                    {alert}
                  </Box>
                ))}
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  <strong>Interpretation:</strong> {example.interpretation}
                </Typography>
                <Typography variant="body2" color="primary.main" fontWeight="600">
                  <strong>Action:</strong> {example.action}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Key Takeaways */}
        <Card sx={{ bgcolor: "primary.main", color: "white", p: 3 }}>
          <Typography variant="h6" gutterBottom fontWeight="600">
            🎓 Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" paragraph>
                <strong>• Multiple Alerts = Higher Conviction:</strong> When options activity, bulk deals, and block deals ALL align, confidence skyrockets.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>• Operators Lead, Options Follow:</strong> Bulk deals often precede options activity by 1-2 days. Watch the sequence.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>• EXTREME is Always Free:</strong> We never paywall the top 1% of activity. Critical signals stay accessible to everyone.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" paragraph>
                <strong>• Accumulation Patterns Matter:</strong> Repeated signals over days suggest sustained institutional interest, not one-off trades.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>• Divergence = Caution:</strong> Conflicting signals mean institutions disagree. Wait for clarity before taking large positions.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>• Score 80+ = Act Fast:</strong> HIGH/EXTREME correlation alerts rarely last long. Markets move quickly on institutional consensus.
              </Typography>
            </Grid>
          </Grid>
        </Card>

        {/* Disclaimer */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="caption" color="text.secondary">
            <strong>Disclaimer:</strong> All alerts are informational tools, not trading advice. Past patterns don't guarantee future results. Options and equity trading involve substantial risk of loss. Always conduct your own analysis and manage risk appropriately.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AlertExplainer;

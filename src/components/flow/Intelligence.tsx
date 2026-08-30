'use client';

import { AccountBalance, ShowChart, Security, TrendingUp } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";

const Intelligence: React.FC = () => {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              {/* Mock of the daily smart-money digest as it arrives on Telegram */}
              <Box
                sx={{
                  bgcolor: "#0d1520",
                  border: "1px solid rgba(59, 130, 246, 0.25)",
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2.5,
                    py: 1.5,
                    bgcolor: "rgba(59, 130, 246, 0.08)",
                    borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      bgcolor: "#3B82F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#fff",
                    }}
                  >
                    Rx
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff", lineHeight: 1.2 }}>
                      RxSynapse
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
                      bot · 4:05 PM
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    p: 2.5,
                    fontFamily: "'Courier New', monospace",
                    fontSize: { xs: "0.72rem", sm: "0.8rem" },
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.85)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {`📊 SMART MONEY DIGEST | NSE close
━━━━━━━━━━━━━━━━━━━━━━
FII: ₹-1,240 Cr (3rd straight day of selling)
DII: ₹+1,875 Cr (absorbing supply)

📋 BULK DEALS: SBIN | 3 deals | Net Buy ₹42 Cr
Operator: [Featured] | Direction: BULLISH

🔥 CORRELATION: PSU banks | DII absorption +
operator buying | Score: 72/100

Sector OI: FII index futures net short +8%`}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Unified Smart Money Dashboard
              </Typography>
              <Typography variant="body1" paragraph>
                Stop wasting 2-3 hours daily checking NSE website, Excel sheets, and multiple platforms. Get all institutional activity intelligence in one unified, actionable dashboard.
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                RxSynapse automatically aggregates FII/DII flows, bulk deals, insider trades, and participant-wise open interest - with historical pattern recognition to identify what matters.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    <AccountBalance />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>FII/DII Flows:</strong> Real-time tracking with sector-wise breakdowns and 5-day trend alerts
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    <ShowChart />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>Bulk & Block Deals:</strong> Instant alerts when published, with operator pattern recognition
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    <Security />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>Insider Trading:</strong> Automated monitoring with filters for "unusual" vs routine activity
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    <TrendingUp />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>Smart Correlations:</strong> Historical analysis showing market reactions to smart money moves
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Intelligence;

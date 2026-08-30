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
              <Box
                component="img"
                src="/market/wallet/virtual-wallet.png"
                alt="Smart Money Intelligence Dashboard"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  maxHeight: 400,
                  objectFit: "contain",
                }}
              />
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

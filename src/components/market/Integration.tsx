import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
} from "@mui/material";
import React from "react";

const Integration: React.FC = () => {
  const brokers = [
    { name: "Samco", status: "Live", color: "success" },
    { name: "AngelOne", status: "Live", color: "success" },
    { name: "Zerodha", status: "Coming Soon", color: "warning" },
    { name: "Upstox", status: "Coming Soon", color: "warning" },
    { name: "ICICI Direct", status: "Planned", color: "info" },
    { name: "HDFC Securities", status: "Planned", color: "info" },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Seamless Broker Integration
            </Typography>
            <Typography variant="body1" paragraph>
              Connect your existing trading accounts without opening new ones.
              RxMarket works with your preferred brokers.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {brokers.map((broker, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <Card variant="outlined">
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {broker.name}
                      </Typography>
                      <Chip
                        label={broker.status}
                        color={broker.color as any}
                        size="small"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/market/integration/engine.png"
              alt="Broker integration"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                maxHeight: 400,
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Integration;

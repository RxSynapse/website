import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const Results: React.FC = () => {
  const stats = [
    { value: "100%", label: "No coding required" },
    { value: "24/7", label: "Market monitoring" },
    { value: "10+", label: "Supported indicators" },
    { value: "1M+", label: "Historical data points" },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Why Traders Love RxMarket
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    textAlign: "center",
                    py: 3,
                    boxShadow: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body1">{stat.label}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Results;

import {Container, Typography, Grid, Card, CardContent} from "@mui/material";
import {motion} from "framer-motion";

const Results: React.FC = () => {
  const stats = [
    {value: "500+", label: "Options strikes monitored live"},
    {value: "24/7", label: "Real-time market monitoring"},
    {value: "3000+", label: "Instruments tracked simultaneously"},
    {value: "<100ms", label: "Alert delivery latency"},
  ];

  return (
      <>
        <Container maxWidth="lg" sx={{py: 8}}>
          <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{fontWeight: 600}}
          >
            Why Traders Choose RxFlow
          </Typography>
          <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
              sx={{mb: 4}}
          >
            Built for F&O traders who are tired of missing institutional moves and manually tracking
            smart money across multiple platforms
          </Typography>
          <Grid container spacing={4} sx={{mt: 4}}>
            {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div whileHover={{scale: 1.05}} style={{ height: "100%" }}>
                    <Card
                        sx={{
                          textAlign: "center",
                          py: 3,
                          boxShadow: 3,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                    >
                      <CardContent>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            mt: 1,
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            wordWrap: "break-word",
                            hyphens: "auto"
                          }}
                        >
                          {stat.label}
                        </Typography>
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

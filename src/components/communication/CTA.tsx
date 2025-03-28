import { Container, Typography, Button } from "@mui/material";

export default () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Ready to Transform Your Customer Communication?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Discover how RxSynapse can revolutionize your customer interactions
          and drive measurable business results.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3, px: 5, py: 1.5 }}>
          Schedule a Consultation
        </Button>
      </Container>
    </>
  );
};

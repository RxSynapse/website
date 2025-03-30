import { Container, Typography, Button } from "@mui/material";

const CTA: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Ready to Transform Your Trading?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Join the revolution in algorithmic trading - no coding required, just
          results.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ mt: 3, px: 5, py: 1.5 }}
        >
          Get Started for FREE Now
        </Button>
      </Container>
    </>
  );
};

export default CTA;

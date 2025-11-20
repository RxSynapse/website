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
          Ready to See What Smart Money Is Doing?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Join India's first real-time options intelligence platform. Track unusual activity, institutional flows, and smart money movements - before it's too late.
        </Typography>
        <Button
          variant="contained"
          size="large"
          disabled
          sx={{
            mt: 3,
            px: 5,
            py: 1.5,
            bgcolor: "#666",
            color: "#fff",
            cursor: "not-allowed",
            "&:hover": { bgcolor: "#666" },
            "&.Mui-disabled": {
              bgcolor: "#666",
              color: "#fff",
            }
          }}
        >
          Coming Soon
        </Button>
      </Container>
    </>
  );
};

export default CTA;

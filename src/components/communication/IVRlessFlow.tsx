import {
  Call,
  IntegrationInstructions,
  People,
  DataThresholding,
} from "@mui/icons-material";
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";

export default () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              component="img"
              src="/communication/ivr/workflow.png"
              alt="IVR-less customer flow"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                maxHeight: 400,
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              The End of IVR Frustration
            </Typography>
            <Typography variant="body1" paragraph>
              Our natural language interface eliminates traditional IVR menus.
              Customers simply say what they need in their own words, and our
              AI:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Call color="primary" />
                </ListItemIcon>
                <Typography variant="body1">
                  Instantly understands the request context
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IntegrationInstructions color="primary" />
                </ListItemIcon>
                <Typography variant="body1">
                  Automates resolution for common inquiries
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <People color="primary" />
                </ListItemIcon>
                <Typography variant="body1">
                  Seamlessly routes complex issues to the right human expert
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DataThresholding color="primary" />
                </ListItemIcon>
                <Typography variant="body1">
                  Continuously learns from every interaction
                </Typography>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              The result? Faster resolutions, happier customers, and significant
              cost savings.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

import { AccountBalanceWallet, ShowChart, Security } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";

const Wallet: React.FC = () => {
  return (
    <>
      <Box sx={{ py: 8, bgcolor: "background.paper", color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/market/wallet/virtual-wallet.png"
                alt="BlackBox Wallet"
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
                The Virtual Wallet
              </Typography>
              <Typography variant="body1" paragraph>
                Practice risk-free with our virtual wallet system. Every
                workspace gets 100,000 credits to test strategies.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ color: "white" }}>
                    <AccountBalanceWallet />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Virtual credits for risk-free testing
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "white" }}>
                    <ShowChart />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Credits increase with profitable strategies
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "white" }}>
                    <Security />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Build confidence before trading real money
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

export default Wallet;

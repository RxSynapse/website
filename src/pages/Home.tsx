import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
};

export default Home;

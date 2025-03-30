import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
import Communication from "./pages/Communication";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import ContactUs from "./components/ContactUs";
import Market from "./pages/Market";

const App: React.FC = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <Navbar setContactOpen={(state) => setContactOpen(state)} />
        <Routes>
          <Route
            path="/"
            element={<Home setContactOpen={(state) => setContactOpen(state)} />}
          />
          <Route
            path="/communication"
            element={
              <Communication
                setContactOpen={(state) => setContactOpen(state)}
              />
            }
          />
          <Route path="/market" element={<Market />} />
        </Routes>
        <Footer />
        <Box id="contact-us">
          <ContactUs
            open={isContactOpen}
            setContactOpen={(state) => setContactOpen(state)}
          />
        </Box>
      </Router>
    </HelmetProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <SEO />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;

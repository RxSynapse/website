import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
import Communication from "./pages/Communication";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;

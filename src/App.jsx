import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    // DO NOT add a basename here yet. HashRouter handles it.
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <footer>
        <p>&copy; 2026 Mohd Ayaaz Siddiqui. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
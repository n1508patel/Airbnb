import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import BookingConfirmation from "./pages/BookingConfirmation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Components
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* If logged in, show website; else only show Login/Signup */}
      {isAuthenticated ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking/:id" element={<BookingConfirmation />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setAuth={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

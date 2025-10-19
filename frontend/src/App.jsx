import React from "react";
import { CandidateProvider } from "./context/CandidateContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReferralForm from "./components/ReferralForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <CandidateProvider>
      <Router>
        <div className="container">
          <h1>Candidate Referral Management</h1>
          <Navbar />  
          <Routes>
            <Route path="/form" element={<ReferralForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        </div>
      </Router>
    </CandidateProvider>
  );
}

export default App;

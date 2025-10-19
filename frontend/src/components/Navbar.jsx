import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/form">
        <button>Refer Candidate</button>
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
    </nav>
  );
}

import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        backgroundColor: "#333",
        padding: 20,
      }}
    >
      <Link
        style={{ marginRight: 10, color: "white", textDecoration: "none" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ marginRight: 10, color: "white", textDecoration: "none" }}
        to="/about"
      >
        About
      </Link>
      <Link
        style={{ marginRight: 10, color: "white", textDecoration: "none" }}
        to="/appointment"
      >
        Appointment
      </Link>
      <Link
        style={{ marginRight: 10, color: "white", textDecoration: "none" }}
        to="/contact"
      >
        Contact
      </Link>
      <Link
        style={{ marginRight: 10, color: "white", textDecoration: "none" }}
        to="/infrastructure"
      >
        Infrastructure
      </Link>
      <Link
        style={{ marginRight: 10, color: "white", textDecoration: "none" }}
        to="/services"
      >
        Services
      </Link>
    </div>
  );
};

export default withRouter(Navbar);

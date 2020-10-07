import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Arjun Puri</h1>
        <div className="info-bar">
          <p className="info-item">arjunpuri@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/puria2002" }}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/arjunpuri1" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.instagram.com" }}
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/education" }}>
            Education
          </Link>
        </div>
      </div>
    </>
  );
}

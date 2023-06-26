import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="fondoLanding">
      <h1 className="tituloLanding fw-bolder">Dogs SPA</h1>
      <Link to="/home">
        <button className="btn btn-primary btn-lg">INGRESAR</button>
      </Link>
    </div>
  );
}

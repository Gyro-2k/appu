// src/ValorantSession.js

import React from "react";
import "./ValorantSession.css"; // We'll move your CSS separately here

const ValorantSession = () => {
  return (
    <div className="container">
      <h1>Valorant Night Session</h1>

      <div className="valorant-icon">⚔️</div>

      <img
        src="https://wallpaperaccess.com/full/3037928.jpg"
        alt="Valorant Key Art"
        className="valorant-image"
      />

      <div className="details">
        <h2>Monday Night Valorant</h2>
        <p>
          <strong>Date:</strong> <span className="highlight">28th April 2025 (Monday)</span>
        </p>
        <p>
          <strong>Time:</strong> <span className="highlight">8:00 PM</span> sharp
        </p>
        <p>
          <strong>Duration:</strong> <span className="highlight">2-5 hours</span> (depending on how we're feeling)
        </p>
        <p>
          <strong>Game Mode:</strong> Competitive / Unrated
        </p>
        <p>
          <strong>Server:</strong> Mumbai / Singapore
        </p>
      </div>

      <div className="details">
        <h3>All Available Agents</h3>
        <div className="agent-list">
          {[
            "Brimstone", "Phoenix", "Sage", "Sova", "Viper", "Cypher", "Reyna", "Killjoy",
            "Breach", "Omen", "Jett", "Raze", "Skye", "Yoru", "Astra", "KAY/O", "Chamber",
            "Neon", "Fade", "Harbor", "Gekko", "Deadlock", "Iso", "Clove", "Vyse", "Tejo", "Waylay"
          ].map((agent) => (
            <span className="agent" key={agent}>{agent}</span>
          ))}
        </div>

        <h3>Session Plan</h3>
        <p>• Warm-up Deathmatch</p>
        <p>• Competitive matches (flexible duration)</p>
        <p>• Fun custom games to finish</p>
      </div>

      <div className="details rsvp">
        <h3>RSVP Details</h3>
        <p>Please confirm by <span className="highlight">26th April</span></p>
        <p>Valorant ID: <span className="highlight">mintcat#AP</span></p>
        <p>Bring your A-game and Chodi nahi</p>
      </div>

      <div className="footer">
        <p>~Madarchod chupchap asijiba~</p>
      </div>
    </div>
  );
};

export default ValorantSession;

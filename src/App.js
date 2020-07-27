import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="mainApp">
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <div className="game-container">
        <svg height="250" width="200" className="figure-container">
          <line x1="60" y1="20" x2="140" y2="20" />
          <line x1="140" y1="20" x2="140" y2="50" />
          <line x1="60" y1="20" x2="60" y2="230" />
          <line x1="20" y1="230" x2="100" y2="230" />

          <circle cx="140" cy="70" r="20" className="figure-part" />

          <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />

          <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />
          <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />

          <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />
          <line x1="140" y1="150" x2="160" y2="180" className="figure-part" />
        </svg>

        <div className="wrong-letters-container">
          <div id="wrong-letters">
            <p>Wrong Letters:</p>
            <span>a</span>
            <span>b</span>
          </div>
        </div>

        <div className="word" id="word">
          <span className="letter"></span>
        </div>
      </div>

      <div className="popup-container" id="popup-container">
        <div className="popup">
          <h2 id="final-message"></h2>
          <button id="play-button">Play Again</button>
        </div>
      </div>

      <div className="notification-container show" id="notification-container">
        <p>You have already entered this letter</p>
      </div>
    </div>
  );
}

export default App;

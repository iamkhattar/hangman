import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const words = require("./assets/words.json").data;
  const [selectedWord, setSelectedWord] = useState("");

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const [showNotification, setShowNotification] = useState(false);

  const setRandomWord = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length - 1)]);
  };

  if (selectedWord === "") {
    setRandomWord();
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode <= 90 && e.keyCode >= 65) {
        const letter = e.key.toString();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters([...correctLetters, letter]);
          } else {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 2000);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters([...wrongLetters, letter]);
            const figureParts = document.querySelectorAll(".figure-part");
            figureParts.forEach((part, index) => {
              const errors = wrongLetters.length;
              if (index <= errors) {
                part.style.display = "block";
              } else {
                part.style.display = "none";
              }
            });
            if (wrongLetters.length + 1 === figureParts.length) {
              document.getElementById("final-message").innerText =
                "Unfortunately you lost.";
              document.getElementById("popup-container").style.display = "flex";
            }
          } else {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 2000);
          }
        }
      }
    });
  }, [wrongLetters, correctLetters]);

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
            {wrongLetters.map((letter) => {
              return <span key={uuidv4()}>{letter} </span>;
            })}
          </div>
        </div>

        <div className="word" id="word">
          {selectedWord.split("").map((letter) => {
            return (
              <span className="letter" key={uuidv4()}>
                {correctLetters.includes(letter) ? letter : ""}
              </span>
            );
          })}
        </div>
      </div>

      <div className="popup-container" id="popup-container">
        <div className="popup">
          <h2 id="final-message"></h2>
          <button id="play-button">Play Again</button>
        </div>
      </div>

      {showNotification && (
        <div
          className="notification-container show"
          id="notification-container"
        >
          <p>You have already entered this letter</p>
        </div>
      )}
    </div>
  );
}

export default App;

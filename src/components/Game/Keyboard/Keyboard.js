import React from "react";
import { checkGuess, getTestedLetters } from "../../../game-helpers";

function Keyboard({ guesses, answer }) {
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));
  const testedLetters = getTestedLetters({ checkedGuesses });

  return (
    <div className="keyboard">
      {rows.map((row) => (
        <div className="keyboard-row" key={row[0]}>
          {row.map((letter) => {
            return (
              <div
                className={`keyboard-column ${
                  testedLetters[letter.toUpperCase()] || ""
                }`}
                key={letter}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

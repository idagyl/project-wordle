import React from "react";
import { range } from "../../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";
import { checkGuess } from "../../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return (
    <span className={className}>
      {letter}
      {status && <span className="visually-hidden">{status}</span>}
    </span>
  );
}

function GuessResults({ guesses, answer }) {
  const columns = range(0, 5);
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((_, i) => {
        const guess = checkGuess(guesses[i], answer);
        const guessIsCorrect = guesses[i] === answer;
        return (
          <p className={`guess ${guessIsCorrect ? "correct" : ""}`} key={i}>
            {columns.map((_, i) => (
              <Cell
                key={i}
                letter={guess && guess[i].letter}
                status={guess && guess[i].status}
              />
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

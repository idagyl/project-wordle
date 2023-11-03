import React, { useState } from "react";

function GuessInput({ addGuess, gameOver }) {
  const [guess, setGuess] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern={"[a-zA-Z]{5}"}
        title="Enter a 5-letter word."
        disabled={gameOver}
      />
    </form>
  );
}

export default GuessInput;

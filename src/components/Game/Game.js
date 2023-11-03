import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import GameOverBanner from "./GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "./Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses((prevState) => [...prevState, guess]);
  };

  const numOfGuesses = guesses.length;
  const hasCorrectGuess = guesses.some((guess) => guess === answer);
  const hasUsedAllGuesses = numOfGuesses === NUM_OF_GUESSES_ALLOWED;
  const gameOver = hasCorrectGuess || hasUsedAllGuesses;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameOver={gameOver} />
      <Keyboard guesses={guesses} answer={answer} />

      {gameOver && (
        <GameOverBanner
          status={hasCorrectGuess ? "happy" : "sad"}
          numOfGuesses={numOfGuesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;

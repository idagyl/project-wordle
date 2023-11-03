import React from "react";

function Banner({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}
function GameOverBanner({ status, numOfGuesses, answer }) {
  return (
    <Banner status={status}>
      {status === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      {status === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      )}
    </Banner>
  );
}

export default GameOverBanner;

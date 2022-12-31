import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { applicationConstants, scoreLookUp } from "../../constants/applicationConstants";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, LOVE, ONCE, THRICE, LOVE_ALL, LOVE_FIFTEEN } =
  applicationConstants;

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  const isPlayerOneScoreBetweenOneAndThree = () => {
    return playerOneScore >= ONCE && playerOneScore <= THRICE;
  };

  useEffect(() => {
    if (isPlayerOneScoreBetweenOneAndThree() && playerTwoScore === LOVE) {
      const score = `${scoreLookUp[playerOneScore]}-Love`;
      setGameScore(score);
    } else if (playerOneScore === LOVE && playerTwoScore === ONCE) {
      setGameScore(LOVE_FIFTEEN);
    }
  }, [playerOneScore, playerTwoScore]);

  return (
    <div>
      <h4 className="score-header" data-testid={SCORE_TITLE}>
        {SCORE_TITLE}
      </h4>
      <p className="game-score" data-testid={GAME_SCORE}>
        {gameScore}
      </p>
    </div>
  );
};

ScoreBoard.propTypes = {
  playerOneScore: PropTypes.number.isRequired,
  playerTwoScore: PropTypes.number.isRequired
};

export default ScoreBoard;

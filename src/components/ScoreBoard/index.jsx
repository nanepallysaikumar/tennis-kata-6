import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { applicationConstants, scoreLookUp } from "../../constants/applicationConstants";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, LOVE, ONCE, THRICE, LOVE_ALL } = applicationConstants;

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  const isPlayerOneScoreBetweenOneAndThree = () => {
    return playerOneScore >= ONCE && playerOneScore <= THRICE;
  };

  const isPlayerTwoScoreBetweenOneAndThree = () => {
    return playerTwoScore >= ONCE && playerTwoScore <= THRICE;
  };

  const calculateGameScore = () => {
    if (isPlayerOneScoreBetweenOneAndThree() && playerTwoScore === LOVE) {
      return `${scoreLookUp[playerOneScore]}-Love`;
    }
    if (isPlayerTwoScoreBetweenOneAndThree() && playerOneScore === LOVE) {
      return `Love-${scoreLookUp[playerTwoScore]}`;
    }
  };

  const hasPlayersStartedScoring = () => {
    return playerOneScore > LOVE || playerTwoScore > LOVE;
  };

  const updateGameScore = () => {
    if (hasPlayersStartedScoring()) {
      setGameScore(calculateGameScore());
    }
  };

  useEffect(() => {
    updateGameScore();
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

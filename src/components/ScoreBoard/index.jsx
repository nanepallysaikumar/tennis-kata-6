import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { applicationConstants, scoreLookUp } from "../../constants/applicationConstants";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, LOVE, ONCE, TWICE, THRICE, ALL, LOVE_ALL } = applicationConstants;

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  const hasPlayersScoreNotMoreThanThree = () => {
    return playerOneScore <= THRICE && playerTwoScore <= THRICE;
  };

  const hasBothPlayersScoresEqual = () => {
    return playerOneScore === playerTwoScore;
  };

  const isPlayerScoreLessThanThree = () => {
    return playerOneScore < THRICE;
  };

  const calculateGameScore = () => {
    if (hasBothPlayersScoresEqual() && isPlayerScoreLessThanThree()) {
      return `${scoreLookUp[playerOneScore]}${ALL}`;
    }
    if (hasPlayersScoreNotMoreThanThree()) {
      return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
    }
  };

  const hasAnyPlayerStartedScoring = () => {
    return playerOneScore > LOVE || playerTwoScore > LOVE;
  };

  const updateGameScore = () => {
    if (hasAnyPlayerStartedScoring()) {
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

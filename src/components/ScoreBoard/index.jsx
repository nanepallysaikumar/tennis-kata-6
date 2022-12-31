import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { applicationConstants, scoreLookUp } from "../../constants/applicationConstants";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, LOVE, ONCE, TWICE, ALL, THRICE, LOVE_ALL, DEUCE } =
  applicationConstants;

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  const hasPlayersScoresNotMoreThanThreePoints = () => {
    return playerOneScore <= THRICE && playerTwoScore <= THRICE;
  };

  const isPlayerScoreOnce = (playerScore) => {
    return playerScore === ONCE;
  };

  const isPlayerScoreTwice = (playerScore) => {
    return playerScore === TWICE;
  };

  const hasBothPlayersScoresEqual = () => {
    return playerOneScore === playerTwoScore;
  };

  const hasBothPlayersScoresThrice = () => {
    return playerOneScore === THRICE && playerTwoScore === THRICE;
  };

  const calculateGameScore = () => {
    if (hasBothPlayersScoresThrice()) {
      return DEUCE;
    }

    if (
      hasBothPlayersScoresEqual() &&
      (isPlayerScoreOnce(playerOneScore) || isPlayerScoreTwice(playerOneScore))
    ) {
      return `${scoreLookUp[playerOneScore]}${ALL}`;
    }

    if (hasPlayersScoresNotMoreThanThreePoints()) {
      return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
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

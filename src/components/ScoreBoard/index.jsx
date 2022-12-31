import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { bothScoredPointOneOrTwo } from "./rules/bothScoredSame";
import { differentScoresBetweenOneAndThree } from "./rules/differentScore";
import { deuce } from "./rules/deuce";
import { playerWins } from "./rules/win";
import { advantange } from "./rules/advantage";
import { applicationConstants } from "../../constants/applicationConstants";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, WIN, LOVE_ALL } = applicationConstants;
const rules = [
  bothScoredPointOneOrTwo,
  deuce,
  differentScoresBetweenOneAndThree,
  playerWins,
  advantange
];

const ScoreBoard = ({ playerOneScore, playerTwoScore, setGameover }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  const calculateGameScore = () => {
    for (const rule of rules) {
      if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
        return rule.getScore(playerOneScore, playerTwoScore);
      }
    }
  };

  const updateGameScore = () => {
    setGameScore(calculateGameScore());
  };

  useEffect(() => {
    if (gameScore.includes(WIN)) {
      setGameover(true);
    }
  }, [gameScore]);

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
  playerTwoScore: PropTypes.number.isRequired,
  setGameover: PropTypes.func.isRequired
};

export default ScoreBoard;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { applicationConstants } from "../../constants/applicationConstants";
import { differentScoresBetweenOneAndThree } from "../Game/rules/playersScoresDifferent";
import { playersScoresOnceOrTwice } from "../Game/rules/playersScoresEqual";
import { deuce } from "../Game/rules/deuce";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, LOVE, LOVE_ALL } = applicationConstants;
const rules = [differentScoresBetweenOneAndThree, playersScoresOnceOrTwice, deuce];

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  const calculateGameScore = () => {
    for (const rule of rules) {
      if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
        return rule.getScore(playerOneScore, playerTwoScore);
      }
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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { applicationConstants } from "../../constants/applicationConstants";
import "./index.css";

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL, FIFTEEN_LOVE } = applicationConstants;

const ScoreBoard = ({ playerOneScore }) => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);

  useEffect(() => {
    if (playerOneScore === 1) {
      setGameScore(FIFTEEN_LOVE);
    }
  }, [playerOneScore]);

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
  playerOneScore: PropTypes.number.isRequired
};

export default ScoreBoard;

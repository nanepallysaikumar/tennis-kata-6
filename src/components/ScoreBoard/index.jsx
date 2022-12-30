import React from "react";
import { applicationConstants } from "../../constants/applicationConstants";

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL } = applicationConstants;

const ScoreBoard = () => {
  return (
    <div>
      <h4 data-testid={SCORE_TITLE}>{SCORE_TITLE}</h4>
      <p data-testid={GAME_SCORE}>{LOVE_ALL}</p>
    </div>
  );
};

export default ScoreBoard;

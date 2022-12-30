import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import Player from "../Player";
import { applicationConstants } from "../../constants/applicationConstants";
import "./index.css";

const { TITLE, PLAYER_ONE, SCORES_A_POINT, LOVE } = applicationConstants;

const Game = () => {
  const [playerOneScore, setPlayerOneScore] = useState(LOVE);

  const incrementScore = () => {
    setPlayerOneScore(playerOneScore + SCORES_A_POINT);
  };

  return (
    <div className="Game">
      <header className="Header">
        <h1 data-testid={TITLE}>{TITLE}</h1>
      </header>
      <ScoreBoard playerOneScore={playerOneScore} />
      <Player name={PLAYER_ONE} onScored={incrementScore} />
    </div>
  );
};

export default Game;

import React, { useState } from "react";
import ScoreBoard from "../ScoreBoard";
import Player from "../Player";
import { applicationConstants } from "../../constants/applicationConstants";
import "./index.css";

const { TITLE, PLAYER_ONE, PLAYER_TWO, SCORES_A_POINT, LOVE } = applicationConstants;

const Game = () => {
  const [playerOneScore, setPlayerOneScore] = useState(LOVE);
  const [playerTwoScore, setPlayerTwoScore] = useState(LOVE);
  const [gameOver, setGameover] = useState(false);

  const incrementScore = (playerName) => {
    playerName === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + SCORES_A_POINT)
      : setPlayerTwoScore(playerTwoScore + SCORES_A_POINT);
  };

  return (
    <div className="Game">
      <header className="Header">
        <h1 data-testid={TITLE}>{TITLE}</h1>
      </header>
      <ScoreBoard
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        setGameover={setGameover}
      />
      <div className="container">
        <Player name={PLAYER_ONE} onScored={incrementScore} gameOver={gameOver} />
        <Player name={PLAYER_TWO} onScored={incrementScore} gameOver={gameOver} />
      </div>
    </div>
  );
};

export default Game;

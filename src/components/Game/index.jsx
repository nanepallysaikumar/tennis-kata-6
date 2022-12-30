import React from "react";
import ScoreBoard from "../ScoreBoard";
import { applicationConstants } from "../../constants/applicationConstants";
import "./index.css";

const { TITLE } = applicationConstants;

const Game = () => {
  return (
    <div className="Game">
      <header className="Header">
        <h1 data-testid={TITLE}>{TITLE}</h1>
      </header>
      <ScoreBoard />
    </div>
  );
};

export default Game;

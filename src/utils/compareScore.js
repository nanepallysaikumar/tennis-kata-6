import { applicationConstants } from "../constants/applicationConstants";
const { LOVE, ONCE, TWICE, THRICE } = applicationConstants;

const isPlayerScoreOnce = (playerScore) => {
  return playerScore === ONCE;
};

const isPlayerScoreTwice = (playerScore) => {
  return playerScore === TWICE;
};

const isplayerScoresNotMoreThanThrice = (playerScore) => {
  return playerScore <= THRICE;
};

const isPlayerScoresThrice = (playerScore) => {
  return playerScore === THRICE;
};

const isPlayerScored = (playerScore) => {
  return playerScore > LOVE;
};

const hasAnyPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) || isPlayerScored(playerTwoScore);
};

const hasBothPlayersScoresEqual = (playerOneScore, playerTwoScore) => {
  return playerOneScore === playerTwoScore;
};

const hasPlayersScoredDifferent = (playerOneScore, playerTwoScore) => {
  return playerOneScore !== playerTwoScore;
};

const hasplayersScoresNotMoreThanThrice = (playerOneScore, playerTwoScore) => {
  return (
    isplayerScoresNotMoreThanThrice(playerOneScore) &&
    isplayerScoresNotMoreThanThrice(playerTwoScore)
  );
};

export {
  isPlayerScoreOnce,
  isPlayerScoreTwice,
  hasBothPlayersScoresEqual,
  hasAnyPlayersScored,
  hasPlayersScoredDifferent,
  hasplayersScoresNotMoreThanThrice,
  isPlayerScoresThrice
};

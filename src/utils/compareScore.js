import { applicationConstants } from "../constants/applicationConstants";

const { ONCE, THRICE, LOVE } = applicationConstants;

const hasBothPlayersScoresEqual = (playerOneScore, playerTwoScore) => {
  return playerOneScore === playerTwoScore;
};

const hasAnyPlayerStartedScoring = (playerOneScore, playerTwoScore) => {
  return playerOneScore > LOVE || playerTwoScore > LOVE;
};

const hasPlayersScoreNotMoreThanThree = (playerOneScore, playerTwoScore) => {
  return playerOneScore <= THRICE && playerTwoScore <= THRICE;
};

const isPlayerScoreLessThanThree = (playerOneScore) => {
  return playerOneScore < THRICE;
};

const isPlayerScoreNotLessThanThree = (playerOneScore, playerTwoScore) => {
  return playerOneScore >= THRICE || playerTwoScore >= THRICE;
};

const isScoreDifferenceGreaterThanOne = (playerOneScore, playerTwoScore) => {
  return Math.abs(playerOneScore - playerTwoScore) > ONCE;
};

const isScoreDifferenceIsOne = (playerOneScore, playerTwoScore) => {
  return playerOneScore - playerTwoScore === ONCE;
};

export {
  isPlayerScoreLessThanThree,
  isPlayerScoreNotLessThanThree,
  isScoreDifferenceGreaterThanOne,
  isScoreDifferenceIsOne,
  hasAnyPlayerStartedScoring,
  hasBothPlayersScoresEqual,
  hasPlayersScoreNotMoreThanThree
};

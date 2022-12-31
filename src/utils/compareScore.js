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

const isPlayerScoreNotLessThanThree = (playerOneScore) => {
  return playerOneScore >= THRICE;
};

const isScoreDifferenceGreaterThanOne = (playerOneScore, playerTwoScore) => {
  return playerOneScore - playerTwoScore > ONCE;
};

export {
  isPlayerScoreLessThanThree,
  isPlayerScoreNotLessThanThree,
  isScoreDifferenceGreaterThanOne,
  hasAnyPlayerStartedScoring,
  hasBothPlayersScoresEqual,
  hasPlayersScoreNotMoreThanThree
};

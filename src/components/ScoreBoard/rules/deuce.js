import {
  hasBothPlayersScoresEqual,
  isPlayerScoreNotLessThanThree
} from "../../../utils/compareScore";
import { applicationConstants } from "../../../constants/applicationConstants";

const { DEUCE } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasBothPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    isPlayerScoreNotLessThanThree(playerOneScore)
  );
};

const getScore = () => {
  return DEUCE;
};

const deuce = {
  isCriteriaMatched,
  getScore
};

export { deuce };

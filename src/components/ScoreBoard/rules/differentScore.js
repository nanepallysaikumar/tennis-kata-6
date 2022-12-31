import {
  hasAnyPlayerStartedScoring,
  hasPlayersScoreNotMoreThanThree
} from "../../../utils/compareScore";
import { applicationConstants, scoreLookUp } from "../../../constants/applicationConstants";

const { HYPHEN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasAnyPlayerStartedScoring(playerOneScore, playerTwoScore) &&
    hasPlayersScoreNotMoreThanThree(playerOneScore, playerTwoScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return `${scoreLookUp[playerOneScore]}${HYPHEN}${scoreLookUp[playerTwoScore]}`;
};

const differentScoresBetweenOneAndThree = {
  isCriteriaMatched,
  getScore
};

export { differentScoresBetweenOneAndThree };

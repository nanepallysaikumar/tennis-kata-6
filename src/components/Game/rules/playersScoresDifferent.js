import { applicationConstants, scoreLookUp } from "../../../constants/applicationConstants";
import {
  hasAnyPlayersScored,
  hasPlayersScoredDifferent,
  hasplayersScoresNotMoreThanThrice
} from "../../../utils/compareScore";

const { HYPHEN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasAnyPlayersScored(playerOneScore, playerTwoScore) &&
    hasPlayersScoredDifferent(playerOneScore, playerTwoScore) &&
    hasplayersScoresNotMoreThanThrice(playerOneScore, playerTwoScore)
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

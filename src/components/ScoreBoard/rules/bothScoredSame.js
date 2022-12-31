import { hasBothPlayersScoresEqual, isPlayerScoreLessThanThree } from "../../../utils/compareScore";
import { scoreLookUp, applicationConstants } from "../../../constants/applicationConstants";

const { ALL } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasBothPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    isPlayerScoreLessThanThree(playerOneScore)
  );
};

const getScore = (playerScore) => {
  return `${scoreLookUp[playerScore]}${ALL}`;
};

const bothScoredPointOneOrTwo = {
  isCriteriaMatched,
  getScore
};

export { bothScoredPointOneOrTwo };

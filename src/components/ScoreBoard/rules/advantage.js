import { isPlayerScoreNotLessThanThree, isScoreDifferenceIsOne } from "../../../utils/compareScore";
import { applicationConstants } from "../../../constants/applicationConstants";

const { PLAYER_ONE_ADVANTAGE } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerScoreNotLessThanThree(playerOneScore) &&
    isScoreDifferenceIsOne(playerOneScore, playerTwoScore)
  );
};

const getScore = () => {
  return PLAYER_ONE_ADVANTAGE;
};

const advantange = {
  isCriteriaMatched,
  getScore
};

export { advantange };

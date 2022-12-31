import {
  isPlayerScoreNotLessThanThree,
  isScoreDifferenceGreaterThanOne
} from "../../../utils/compareScore";
import { applicationConstants } from "../../../constants/applicationConstants";

const { PLAYER_ONE_WIN, PLAYER_TWO_WIN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerScoreNotLessThanThree(playerOneScore, playerTwoScore) &&
    isScoreDifferenceGreaterThanOne(playerOneScore, playerTwoScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return playerOneScore > playerTwoScore ? PLAYER_ONE_WIN : PLAYER_TWO_WIN;
};

const playerWins = {
  isCriteriaMatched,
  getScore
};

export { playerWins };

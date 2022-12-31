import { scoreLookUp, applicationConstants } from "../../../constants/applicationConstants";
import {
  isPlayerScoreOnce,
  isPlayerScoreTwice,
  hasBothPlayersScoresEqual
} from "../../../utils/compareScore";

const { ALL } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasBothPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    (isPlayerScoreOnce(playerOneScore) || isPlayerScoreTwice(playerOneScore))
  );
};

const getScore = (playerScore) => {
  return `${scoreLookUp[playerScore]}${ALL}`;
};

const playersScoresOnceOrTwice = {
  isCriteriaMatched,
  getScore
};

export { playersScoresOnceOrTwice };

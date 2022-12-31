import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../../constants/testConstants";
import Game from "./";

const {
  TITLE,
  SCORE_TITLE,
  GAME_SCORE,
  PLAYER_ONE,
  PLAYER_TWO,
  ZERO,
  ONCE,
  TWICE,
  THRICE,
  LOVE_ALL,
  THIRTY_ALL,
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  FORTY_LOVE,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  LOVE_FORTY,
  FIFTEEN_ALL,
  FIFTEEN_THIRTY,
  DEUCE,
  PLAYER_ONE_WIN,
  PLAYER_TWO_WIN,
  PLAYER_ONE_ADVANTAGE,
  PLAYER_TWO_ADVANTAGE
} = testConstants;

describe("Tennis Game", () => {
  beforeEach(() => {
    render(<Game />);
  });

  test("Should contain the title", () => {
    expect(screen.getByTestId(TITLE).textContent).toEqual(TITLE);
  });

  test("Should contain the score heading", () => {
    expect(screen.getByTestId(SCORE_TITLE).textContent).toEqual(SCORE_TITLE);
  });
});

describe("Set Game Score", () => {
  beforeEach(() => {
    render(<Game />);
  });

  const gameScoreShouldBe = (expected) => {
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
  };

  const playerScores = (times, playerName) => {
    for (let count = ZERO; count < times; count++) {
      fireEvent.click(screen.getByTestId(playerName));
    }
  };

  const playerOneScores = (times) => {
    playerScores(times, PLAYER_ONE);
  };

  const playerTwoScores = (times) => {
    playerScores(times, PLAYER_TWO);
  };

  test("Love-All when the game starts", () => {
    gameScoreShouldBe(LOVE_ALL);
  });

  test("Fifteen-Love when the player one scores once", () => {
    playerOneScores(ONCE);

    gameScoreShouldBe(FIFTEEN_LOVE);
  });

  test("Thirty-Love when the player one scores twice", () => {
    playerOneScores(TWICE);

    gameScoreShouldBe(THIRTY_LOVE);
  });

  test("Forty-Love when the player one scores thrice", () => {
    playerOneScores(THRICE);

    gameScoreShouldBe(FORTY_LOVE);
  });

  test("Love-Fifteen when the player two scores once", () => {
    playerTwoScores(ONCE);

    gameScoreShouldBe(LOVE_FIFTEEN);
  });

  test("Love-Thirty when the player two scores twice", () => {
    playerTwoScores(TWICE);

    gameScoreShouldBe(LOVE_THIRTY);
  });

  test("Love-Forty when the player two scores thrice", () => {
    playerTwoScores(THRICE);

    gameScoreShouldBe(LOVE_FORTY);
  });

  test("Fifteen-All when both the players scores once", () => {
    playerOneScores(ONCE);
    playerTwoScores(ONCE);

    gameScoreShouldBe(FIFTEEN_ALL);
  });

  test("Thirty-All when both the players scores twice", () => {
    playerOneScores(TWICE);
    playerTwoScores(TWICE);

    gameScoreShouldBe(THIRTY_ALL);
  });

  test("Fifteen-Thirty when the player one score once and player two scores twice", () => {
    playerOneScores(ONCE);
    playerTwoScores(TWICE);

    gameScoreShouldBe(FIFTEEN_THIRTY);
  });

  test("Deuce when both the players scores are equal and not less than thrice", () => {
    playerOneScores(THRICE);
    playerTwoScores(THRICE);

    gameScoreShouldBe(DEUCE);
  });

  test("Player One Win When the player one score is greater than 3 and greater than player two score by 2", () => {
    playerOneScores(THRICE);
    playerTwoScores(TWICE);
    playerOneScores(ONCE);

    gameScoreShouldBe(PLAYER_ONE_WIN);
  });

  test("Player Two Win When the player two score is greater than 3 and greater than player one score by 2", () => {
    playerTwoScores(TWICE);
    playerOneScores(ONCE);
    playerTwoScores(TWICE);

    gameScoreShouldBe(PLAYER_TWO_WIN);
  });

  test("Advantage Player One When the player one score is greater than 3 and greater than player two score by 1", () => {
    playerOneScores(THRICE);
    playerTwoScores(THRICE);
    playerOneScores(ONCE);

    gameScoreShouldBe(PLAYER_ONE_ADVANTAGE);
  });

  test("Advantage Player Two When the player two score is greater than 3 and greater than player one score by 1", () => {
    playerTwoScores(THRICE);
    playerOneScores(THRICE);
    playerTwoScores(ONCE);

    gameScoreShouldBe(PLAYER_TWO_ADVANTAGE);
  });

  test("Winner when one of the player wins and game should be over", () => {
    playerOneScores(ONCE);
    playerTwoScores(TWICE);
    playerOneScores(THRICE);

    gameScoreShouldBe(PLAYER_ONE_WIN);
    expect(screen.getByTestId(PLAYER_ONE)).toBeDisabled();
    expect(screen.getByTestId(PLAYER_TWO)).toBeDisabled();
  });
});

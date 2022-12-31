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
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  FORTY_LOVE,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  LOVE_FORTY
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

  test("Love-Fifteen when the player two scores once and player one scores zero", () => {
    playerTwoScores(ONCE);

    gameScoreShouldBe(LOVE_FIFTEEN);
  });

  test("Love-Thirty when the player two scores twice and player one scores zero", () => {
    playerTwoScores(TWICE);

    gameScoreShouldBe(LOVE_THIRTY);
  });

  test("Love-Thirty when the player two scores thrice and player one scores zero", () => {
    playerTwoScores(THRICE);

    gameScoreShouldBe(LOVE_FORTY);
  });
});

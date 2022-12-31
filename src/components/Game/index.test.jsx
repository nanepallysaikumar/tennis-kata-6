import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../../constants/testConstants";
import Game from "./";

const { TITLE, SCORE_TITLE, GAME_SCORE, PLAYER_ONE, LOVE_ALL, FIFTEEN_LOVE, THIRTY_LOVE } =
  testConstants;

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

  test("Love-All when the game starts", () => {
    gameScoreShouldBe(LOVE_ALL);
  });

  test("Fifteen-Love when the player one scores once", () => {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    gameScoreShouldBe(FIFTEEN_LOVE);
  });

  test("Thirty-Love when the player one scores twice", () => {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    gameScoreShouldBe(THIRTY_LOVE);
  });
});

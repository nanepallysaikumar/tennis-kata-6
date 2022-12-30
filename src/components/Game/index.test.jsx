import { render, screen } from "@testing-library/react";
import { testConstants } from "../../constants/testConstants";
import Game from "./";

const { TITLE, SCORE_TITLE, GAME_SCORE, LOVE_ALL } = testConstants;

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

  test("Love-All when the game starts", () => {
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
  });
});
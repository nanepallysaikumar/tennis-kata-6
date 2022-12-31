import { render, screen } from "@testing-library/react";
import { testConstants } from "../../constants/testConstants";
import ScoreBoard from "./";

const { SCORE_TITLE, GAME_SCORE, LOVE, LOVE_ALL } = testConstants;

describe("Score Board", () => {
  beforeEach(() => {
    render(<ScoreBoard playerOneScore={LOVE} playerTwoScore={LOVE} />);
  });

  test("Should contain the heading", () => {
    expect(screen.getByTestId(SCORE_TITLE).textContent).toEqual(SCORE_TITLE);
  });

  test("Should contain Love-All when the game starts", () => {
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
  });
});

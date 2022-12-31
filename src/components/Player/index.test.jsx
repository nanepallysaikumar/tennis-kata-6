import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../../constants/testConstants";
import Player from "./";

const { PLAYER_ONE, PLAYER_ONE_TITLE, PLAYER_TWO, PLAYER_TWO_TITLE, SCORED } = testConstants;

describe("Player component with player one information", () => {
  const onScored = jest.fn();
  beforeEach(() => {
    render(<Player name={PLAYER_ONE} onScored={onScored} />);
  });

  test("Should contain the player name title", () => {
    expect(screen.getByTestId(PLAYER_ONE_TITLE).textContent).toEqual(PLAYER_ONE);
  });

  test("Should contain the player scored button", () => {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    expect(screen.getByTestId(PLAYER_ONE).textContent).toEqual(SCORED);
    expect(onScored).toHaveBeenCalled();
  });
});

describe("Player component with player two information", () => {
  const onScored = jest.fn();
  beforeEach(() => {
    render(<Player name={PLAYER_TWO} onScored={onScored} />);
  });

  test("Should contain the player name title", () => {
    expect(screen.getByTestId(PLAYER_TWO_TITLE).textContent).toEqual(PLAYER_TWO);
  });

  test("Should contain the player scored button", () => {
    fireEvent.click(screen.getByTestId(PLAYER_TWO));

    expect(screen.getByTestId(PLAYER_TWO).textContent).toEqual(SCORED);
    expect(onScored).toHaveBeenCalled();
  });
});

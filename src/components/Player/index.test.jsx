import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../../constants/testConstants";
import Player from "./";

const { PLAYER_ONE, PLAYER_ONE_TITLE, SCORED } = testConstants;

describe("Player component", () => {
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

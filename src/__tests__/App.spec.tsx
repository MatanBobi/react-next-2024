import { describe, test, expect } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  test("Should show spinner and then show all pokemons", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const loadingElement = screen.getByAltText("Loading...");
    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
    await waitForElementToBeRemoved(loadingElement);
    expect(screen.getAllByRole("link")).toHaveLength(151);
  });
});

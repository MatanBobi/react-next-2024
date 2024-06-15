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
    // Wait for loader to be visible
    const loadingElement = screen.getByAltText("Loading...");
    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
    // Wait for loader to be removed
    await waitForElementToBeRemoved(loadingElement);
    // Assert that we have 151 pokemons
    expect(screen.getAllByRole("link")).toHaveLength(1302);
  });
});

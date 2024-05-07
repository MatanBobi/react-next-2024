import { describe, test, expect, beforeAll } from "vitest";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  test("Should show spinner and then show all pokemons", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const loadingElement = screen.getByAltText("loading");
    expect(screen.getByAltText("loading")).toBeInTheDocument();
    await waitForElementToBeRemoved(loadingElement);
    expect(screen.getAllByRole("link")).toHaveLength(151);
  });
});
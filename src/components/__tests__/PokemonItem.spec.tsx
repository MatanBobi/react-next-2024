import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokemonItem } from "../PokemonItem";
import { BrowserRouter } from "react-router-dom";

describe("PokemonItem", () => {
  test("Should render PokemonItem", () => {
    // Render the component with a router wrapper
    render(
      <PokemonItem
        data={{
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        }}
      />,
      { wrapper: BrowserRouter }
    );
    // Verify image is visible
    expect(screen.getByAltText("bulbasaur")).toBeVisible();
    // Verify the list item is wrapped in an anchor with the text
    expect(
      screen.getByRole("link", { name: "bulbasaur #1 bulbasaur" })
    ).toBeVisible();
  });
});

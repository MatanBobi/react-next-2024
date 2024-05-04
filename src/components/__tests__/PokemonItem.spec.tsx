import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokemonItem } from "../PokemonItem";
import { BrowserRouter } from "react-router-dom";

describe("PokemonItem", () => {
  test("Should render PokemonItem", () => {
    render(
      <PokemonItem
        data={{
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        }}
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "#1 bulbasaur" })
    ).toBeInTheDocument();
  });
});

import { test, expect } from "@playwright/experimental-ct-react";
import { PokemonItem } from "../PokemonItem";
import { BrowserRouter } from "react-router-dom";

test.use({ viewport: { width: 500, height: 500 } });

test("Should render PokemonItem", async ({ mount }) => {
  const component = await mount(
    <BrowserRouter>
      <PokemonItem
        data={{
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        }}
      />
    </BrowserRouter>,
    {}
  );
  await expect(component.getByRole("link")).toHaveText("#1bulbasaur");
});

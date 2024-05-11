import { test, expect } from "@playwright/experimental-ct-react";
import { PokemonItem } from "../PokemonItem";
import { BrowserRouter } from "react-router-dom";

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
  await expect(component).toHaveScreenshot();
});

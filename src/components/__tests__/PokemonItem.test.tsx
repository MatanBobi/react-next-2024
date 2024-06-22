import { test, expect } from "@playwright/experimental-ct-react";
import { PokemonItem } from "../PokemonItem";
import { BrowserRouter } from "react-router-dom";

test("Should render PokemonItem", async ({ mount }) => {
  // Render the component with router
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
  // Verify image is visible
  await expect(component.getByAltText("bulbasaur")).toBeVisible();
  // Verify the list item is wrapped in an anchor with the text
  await expect(
    component.getByRole("link", { name: "bulbasaur #1 bulbasaur" })
  ).toBeVisible();
});

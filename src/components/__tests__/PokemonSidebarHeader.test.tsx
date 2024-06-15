import { test, expect } from "@playwright/experimental-ct-react";
import { PokemonsSidebarHeader } from "../PokemonsSidebarHeader";

test("Should render PokemonSidebarHeader", async ({ mount }) => {
  let isExpectedValue = false;
  const mockSearch = (value: string) => {
    if (value === "bulbasaur") {
      isExpectedValue = true;
    }
  };

  const component = await mount(
    <PokemonsSidebarHeader pokemonsCount={20} onSearch={mockSearch} />,
    {}
  );
  await component.getByRole("searchbox").fill("bulbasaur");
  expect(isExpectedValue).toBe(true);
});

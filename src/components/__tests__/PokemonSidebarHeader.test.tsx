import { test, expect } from "@playwright/experimental-ct-react";
import { PokemonsSidebarHeader } from "../PokemonsSidebarHeader";
import sinon from "sinon";

test("Should call onSearch if the search value changes", async ({ mount }) => {
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

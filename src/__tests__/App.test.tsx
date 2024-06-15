import { test, expect } from "@playwright/experimental-ct-react";
import App from "../App";
import { pokemons } from "../mocks/mockData";
import { BrowserRouter } from "react-router-dom";

test("Should show spinner and then show all pokemons", async ({
  mount,
  page,
}) => {
  await page.route("**/api/v2/pokemon**", async (route) => {
    // const json = JSON.stringify(pokemons);
    await route.fulfill({ json: pokemons });
  });
  const component = await mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    {}
  );
  // Wait for loader to be visible
  expect(component.getByAltText("Loading...")).toBeDefined();
  // Wait for loader to be removed
  await expect(component.getByAltText("Loading...")).not.toBeVisible();
  // Assert that we have 1302 pokemons
  expect(await component.getByRole("link").count()).toBe(1302);
});

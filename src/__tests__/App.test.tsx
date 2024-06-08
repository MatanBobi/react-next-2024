import { test, expect } from "@playwright/experimental-ct-react";
import App from "../App";
import { pokemons } from "../mocks/mockData";
import { BrowserRouter } from "react-router-dom";

test("Should render App with mocked data", async ({ mount, page }) => {
  await page.route("**/pokeapi.co/api/v2/pokemon", async (route) => {
    const json = JSON.stringify(pokemons);
    await route.fulfill({ json });
  });
  const component = await mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    {}
  );
  expect(component.getByAltText("Loading...")).toBeDefined();
  await expect(component.getByAltText("Loading...")).not.toBeVisible();
  expect(await component.getByRole("link").count()).toBe(151);
});

import { test, expect } from "@playwright/experimental-ct-react";
import Spinner from "../Spinner";

test.describe("Spinner adapts to current theme - Dark", () => {
  test.use({
    viewport: { width: 500, height: 500 },
    colorScheme: "dark",
  });
  test("Should render Spinner", async ({ mount }) => {
    const component = await mount(<Spinner />, {});
    expect(component.getByAltText("Loading...")).toBeDefined();
    await expect(component).toHaveScreenshot();
  });
});

test.describe("Spinner adapts to current theme - Light", () => {
  test.use({
    viewport: { width: 500, height: 500 },
    colorScheme: "light",
  });
  test("Should render Spinner", async ({ mount }) => {
    const component = await mount(<Spinner />, {});
    expect(component.getByAltText("Loading...")).toBeDefined();
    await expect(component).toHaveScreenshot();
  });
});

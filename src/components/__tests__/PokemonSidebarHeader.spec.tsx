import { describe, test, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PokemonsSidebarHeader } from "../PokemonsSidebarHeader";

describe("PokemonSidebarHeader", () => {
  test("Should render PokemonItem", async () => {
    const user = userEvent.setup();
    const mockSearch = vi.fn();
    // Render the component with a router wrapper
    render(<PokemonsSidebarHeader pokemonsCount={20} onSearch={mockSearch} />);
    await user.type(screen.getByRole("searchbox"), "bulbasaur");

    await waitFor(() => {
      expect(mockSearch).toHaveBeenLastCalledWith("bulbasaur");
    });
  });
});

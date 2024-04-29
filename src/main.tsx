import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Main } from "./components/Main.tsx";
import "./index.css";
import { getMainImageUrl } from "./helpers/Pokemon.ts";
import { getPokemonData } from "./api/Pokemons.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "pokemons/:pokemonName",
        element: <Main />,
        loader: async ({ params }) => {
          const pokemonPageData = await getPokemonData(params.pokemonName!);
          const pokemonImageUrl = getMainImageUrl(params.pokemonName!);
          return { pokemonImageUrl, pokemonPageData };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

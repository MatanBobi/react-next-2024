import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Main } from "./components/Main.tsx";
import "./index.css";
import { getMainImageUrl } from "./helpers/pokemon.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "pokemons/:pokemonName",
        element: <Main />,
        loader: async ({ params }) => {
          const pokemonImageUrl = await Promise.resolve(
            getMainImageUrl(params.pokemonName!)
          );
          return { pokemonImageUrl };
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

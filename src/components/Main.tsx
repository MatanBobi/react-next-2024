import { useLoaderData } from "react-router-dom";
import pokedex from "../assets/Pokedex.svg";

export const Main = () => {
  const { pokemonImageUrl } = useLoaderData() as { pokemonImageUrl: string };
  return (
    <main className="flex justify-center items-center bg-gray-100 h-screen">
      <img
        className="pokedex"
        src={pokemonImageUrl ? pokemonImageUrl : pokedex}
      />
    </main>
  );
};

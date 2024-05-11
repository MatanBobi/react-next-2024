import { useLoaderData } from "react-router-dom";
import pokedex from "../assets/Pokedex.svg";
import { PokemonPageData, pokemonTypesColorMapper } from "../types/Pokemons";
import { PokemonTypeBackground } from "./PokemonTypeBackground";
import { PokemonDetails } from "./PokemonDetails";

export const Main = () => {
  const { pokemonImageUrl, pokemonPageData } = useLoaderData() as {
    pokemonImageUrl: string;
    pokemonPageData: PokemonPageData;
  };
  return (
    <main
      className="flex flex-col items-center bg-gray-100 h-screen overflow-y-auto relative dark:bg-gray-800 dark:text-white"
      style={{
        ["--pokemon-type-color" as any]:
          pokemonTypesColorMapper[pokemonPageData.types[0].type.name],
      }}
    >
      <PokemonTypeBackground type={pokemonPageData.types[0].type.name} />
      <img
        className="pokedex"
        src={pokemonImageUrl ? pokemonImageUrl : pokedex}
      />
      <PokemonDetails data={pokemonPageData} />
    </main>
  );
};

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/Pokemons";
import Spinner from "./Spinner";
import { PokemonsList } from "./PokemonsList";
import { Pokemon } from "../types/Pokemons";
import { PokemonsSidebarHeader } from "./PokemonsSidebarHeader";

export const PokemonsSidebar = () => {
  const { isPending, error, data } = useQuery<Array<Pokemon>>({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(151),
  });
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data?.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  if (isPending)
    return (
      <div className="max-h-screen flex flex-col border-r border-r-slate-300 dark:border-r-slate-600 dark:bg-gray-800">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="max-h-screen flex flex-col border-r border-r-slate-300 dark:border-r-slate-600 dark:bg-gray-800">
        Error: {error.message}
      </div>
    );

  return (
    <div className="max-h-screen flex flex-col border-r border-r-slate-300 dark:border-r-slate-600 dark:bg-gray-800">
      <PokemonsSidebarHeader
        pokemonsCount={data.length}
        onSearch={(name: string) => {
          setSearchValue(name);
        }}
      />
      {filteredData ? <PokemonsList data={filteredData} /> : "No results"}
    </div>
  );
};

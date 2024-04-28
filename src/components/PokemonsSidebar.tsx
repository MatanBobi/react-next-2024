import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/pokemons";
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

  if (isPending) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-h-screen flex flex-col border-r border-r-slate-300">
      <PokemonsSidebarHeader
        pokemonsCount={data.length}
        onSearch={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(e.target.value);
        }}
      />
      {filteredData ? <PokemonsList data={filteredData} /> : "No results"}
    </div>
  );
};
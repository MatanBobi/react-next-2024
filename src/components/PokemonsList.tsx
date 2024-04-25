import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/pokemons";
import Spinner from "./Spinner";
import { PokemonItem } from "./PokemonItem";
import { Pokemon } from "../types/Pokemons";

export const PokemonsList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(151),
  });

  if (isPending) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-h-screen flex flex-col border-r border-r-slate-300">
      <input type="search" placeholder="Search Pokemon" />
      <ul className="overflow-y-auto flex-grow">
        {data.map((pokemon: Pokemon) => (
          <PokemonItem data={pokemon} />
        ))}
      </ul>
    </div>
  );
};

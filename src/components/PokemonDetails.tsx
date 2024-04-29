import { useMemo } from "react";
import {
  PokemonPageData,
  pokemonTypesColorMapper,
  pokemonTypesTextColorMapper,
} from "../types/Pokemons";
import { DataTile } from "./DataTile";
import { getPokemonChain } from "../helpers/Pokemon";
import { PokemonEvolutions } from "./PokemonEvolutions";

interface Props {
  data: PokemonPageData;
}

export const PokemonDetails = ({ data }: Props) => {
  const pokemonChain = useMemo(() => {
    if (data.chain) {
      return getPokemonChain([], data.chain.evolves_to[0]);
    }
  }, [data.chain]);

  return (
    <>
      <h1 className="font-normal capitalize text-4xl my-4">{data.name}</h1>
      <div className="grid grid-cols-2 justify-center items-start gap-3">
        <DataTile title="Types">
          <ul className="flex gap-2">
            {data.types.map((type) => (
              <li
                key={type.type.name}
                className="capitalize text-xs px-2 py-1 rounded-md"
                style={{
                  backgroundColor: pokemonTypesColorMapper[type.type.name],
                  color: pokemonTypesTextColorMapper[type.type.name],
                }}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </DataTile>
        <DataTile title="Evolutions">
          <PokemonEvolutions chain={pokemonChain} currentPokemon={data.name} />
        </DataTile>
      </div>
    </>
  );
};

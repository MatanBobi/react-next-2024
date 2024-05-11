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
        {pokemonChain.length > 0 ? (
          <DataTile title="Evolutions">
            <PokemonEvolutions
              chain={pokemonChain}
              currentPokemon={data.name}
              evolvesFrom={data.evolvesFrom}
            />
          </DataTile>
        ) : null}
        <DataTile title="Stats">
          <ul>
            {data.stats.map((stat) => (
              <li key={stat.stat.name} className="flex justify-between">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </DataTile>
        <DataTile title="Base Moves">
          <ul>
            {data.moves
              .filter((move) =>
                move.version_group_details.every(
                  (version) => version.level_learned_at !== 0
                )
              )
              .map((move) => (
                <li key={move.move.name} className="capitalize">
                  {move.move.name}
                </li>
              ))}
          </ul>
        </DataTile>
        <DataTile title="Names">
          <ul>
            {data.names.map((name) => (
              <li key={name.name} className="flex justify-between capitalize">
                <span>{name.language.name}</span>
                <span>{name.name}</span>
              </li>
            ))}
          </ul>
        </DataTile>
      </div>
    </>
  );
};

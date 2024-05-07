import { Pokemon } from "../types/Pokemons";
import { PokemonItem } from "./PokemonItem";

interface Props {
  data: Array<Pokemon>;
}
export const PokemonsList = ({ data }: Props) => {
  return (
    <ul className="overflow-y-auto flex-grow">
      {data.map((pokemon: Pokemon) => (
        <PokemonItem key={pokemon.name} data={pokemon} />
      ))}
    </ul>
  );
};

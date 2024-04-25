import { Pokemon } from "../types/Pokemons";

interface Props {
  data: Pokemon;
}

export const PokemonItem = ({ data }: Props) => {
  return (
    <li key={data.name} className="p-2 border-t border-t-slate-300">
      {data.name}
    </li>
  );
};

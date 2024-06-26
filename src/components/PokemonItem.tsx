import { Link } from "react-router-dom";
import { getMainImageUrl, getPokemonId } from "../helpers/Pokemon";
import { Pokemon } from "../types/Pokemons";

interface Props {
  data: Pokemon;
}

export const PokemonItem = ({ data }: Props) => {
  return (
    <li
      key={data.name}
      className="px-4 py-5 border-t border-t-slate-300 cursor-pointer hover:bg-slate-200 font-medium dark:border-t-gray-600 dark:text-white dark:hover:bg-gray-700 dark:bg-gray-800"
    >
      <Link
        to={`pokemons/${data.name}`}
        className="flex items-center gap-3 text-black hover:text-black font-light dark:text-white dark:hover:text-white"
      >
        <img
          src={getMainImageUrl(data.name)}
          className="w-10"
          alt={data.name}
        />
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs">
            #{getPokemonId(data.url)}
          </span>
          <span className="capitalize">{data.name}</span>
        </div>
      </Link>
    </li>
  );
};

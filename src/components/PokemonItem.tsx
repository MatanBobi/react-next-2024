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
      className="px-4 py-5 border-t border-t-slate-300 cursor-pointer hover:bg-slate-200 font-medium"
    >
      <Link
        to={`pokemons/${data.name}`}
        className="flex items-center gap-3 text-black hover:text-black font-light"
      >
        <img src={getMainImageUrl(data.name)} className="w-10" />
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

import bug from "../assets/Bug.svg";
import dark from "../assets/Dark.svg";
import dragon from "../assets/Dragon.svg";
import electric from "../assets/Electric.svg";
import fairy from "../assets/Fairy.svg";
import fighting from "../assets/Fighting.svg";
import fire from "../assets/Fire.svg";
import flying from "../assets/Flying.svg";
import ghost from "../assets/Ghost.svg";
import grass from "../assets/Grass.svg";
import ground from "../assets/Ground.svg";
import ice from "../assets/Ice.svg";
import normal from "../assets/Normal.svg";
import poison from "../assets/Poison.svg";
import psychic from "../assets/Psychic.svg";
import rock from "../assets/Rock.svg";
import steel from "../assets/Steel.svg";
import water from "../assets/Water.svg";
import { PokemonTypeNames } from "../types/Pokemons";

interface Props {
  type: PokemonTypeNames;
}

const pokemonTypeSvgMapper: Record<PokemonTypeNames, any> = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

export const PokemonTypeBackground = ({ type }: Props) => {
  return (
    <img
      className="opacity-10 absolute -top-14 right-0 h-96 w-96"
      src={pokemonTypeSvgMapper[type]}
    />
  );
};

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonChain {
  chain: { evolves_to: { species: { name: string } }[] };
}

export enum PokemonTypeNames {
  bug = "bug",
  dark = "dark",
  dragon = "dragon",
  electric = "electric",
  fairy = "fairy",
  fighting = "fighting",
  fire = "fire",
  flying = "flying",
  ghost = "ghost",
  grass = "grass",
  ground = "ground",
  ice = "ice",
  normal = "normal",
  poison = "poison",
  psychic = "psychic",
  rock = "rock",
  steel = "steel",
  water = "water",
}

export interface PokemonType {
  type: { name: PokemonTypeNames; url: string };
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  species: { name: string; url: string };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
}

export interface PokemonPageData extends PokemonData {
  chain: PokemonChain;
}

export const pokemonTypesColorMapper: Record<PokemonTypeNames, string> = {
  grass: "MediumSeaGreen",
  poison: "RebeccaPurple",
  water: "DodgerBlue",
  fire: "Tomato",
  electric: "#FFE26F",
  ice: "#75ABDC",
  fighting: "#b54",
  ground: "#db5",
  flying: "#89f",
  psychic: "#f59",
  bug: "#ab2",
  rock: "#ba6",
  ghost: "#66b",
  dragon: "#76e",
  dark: "#754",
  fairy: "#e9e",
  steel: "#aab",
  normal: "gray",
};

export const pokemonTypesTextColorMapper: Record<PokemonTypeNames, string> = {
  grass: "white",
  poison: "white",
  water: "white",
  fire: "white",
  electric: "black",
  ice: "black",
  fighting: "white",
  ground: "white",
  flying: "black",
  psychic: "white",
  bug: "white",
  rock: "white",
  ghost: "white",
  dragon: "white",
  dark: "white",
  fairy: "black",
  steel: "black",
  normal: "black",
};

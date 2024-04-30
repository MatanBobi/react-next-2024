import { PokemonChain, PokemonData, PokemonPageData } from "../types/Pokemons";

export function getPokemons(limit: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => data.results);
}

export async function getPokemonData(name: string): Promise<PokemonPageData> {
  const pokemonsPageData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  ).then((response) => response.json());
  const species: {
    evolution_chain: { url: string };
    evolves_from_species?: { name: string };
    names: {
      language: {
        name: string;
        url: string;
      };
      name: string;
    }[];
  } = await fetch(pokemonsPageData.species.url).then((response) =>
    response.json()
  );

  const chain = await fetch(species.evolution_chain.url).then((response) =>
    response.json()
  );

  return {
    ...pokemonsPageData,
    chain: chain.chain,
    evolvesFrom: species.evolves_from_species?.name,
    names: species.names,
  };
}

export function getPokemons(limit: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => data.results);
}

export const getMainImageUrl = (name: string) => {
  return `https://img.pokemondb.net/artwork/vector/${name}.png`;
};

export const getPokemonId = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

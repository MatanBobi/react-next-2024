export const getMainImageUrl = (name: string) => {
  return `https://img.pokemondb.net/artwork/vector/${name}.png`;
};

export const getPokemonId = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

export const getPokemonChain = (acc: any, data: any) => {
  acc.push({
    name: data.species.name,
  });
  if (data.evolves_to.length === 0) {
    return acc;
  } else {
    return data.evolves_to.reduce(getPokemonChain, acc);
  }
};

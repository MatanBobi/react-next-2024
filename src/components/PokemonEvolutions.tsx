export const PokemonEvolutions = ({
  chain,
  currentPokemon,
}: {
  chain: Array<{ name: string }>;
  currentPokemon: string;
}) => {
  return (
    <div>
      <ul className="flex gap-3">
        {chain?.map((evolution) =>
          evolution.name === currentPokemon ? null : (
            <li key={evolution.name} className="capitalize text-lg">
              <img
                src={`https://img.pokemondb.net/artwork/vector/${evolution.name}.png`}
                className="max-w-24"
                alt={evolution.name}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

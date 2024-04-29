interface Props {
  pokemonsCount: number;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PokemonsSidebarHeader = ({ pokemonsCount, onSearch }: Props) => {
  return (
    <div className="w-full py-4 px-3 flex flex-col justify-center items-center">
      <h2 className="my-3 font-normal">{pokemonsCount} Pokémons</h2>
      <input
        className="w-full p-2 bg-gray-200 focus-visible:outline-none"
        type="search"
        placeholder="Search Pokémon 🔍"
        onChange={onSearch}
      />
    </div>
  );
};

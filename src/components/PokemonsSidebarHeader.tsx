interface Props {
  pokemonsCount: number;
  onSearch: (name: string) => void;
}

export const PokemonsSidebarHeader = ({ pokemonsCount, onSearch }: Props) => {
  return (
    <div className="w-full py-4 px-3 flex flex-col justify-center items-center dark:bg-gray-800 dark:text-white">
      <h2 className="my-3 font-normal">{pokemonsCount} Pokémons</h2>
      <input
        className="w-full p-2 bg-gray-200 focus-visible:outline-none dark:bg-gray-700 dark:text-white"
        type="search"
        placeholder="Search Pokémon 🔍"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearch(e.target.value)
        }
      />
    </div>
  );
};

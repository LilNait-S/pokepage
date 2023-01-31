import PokemonCard from "./PokemonCard";
import usePokemons from "../hooks/usePokemons";

const PokeList = () => {
  const { allPokemons } = usePokemons();

  return (
    <div className="max-w-7xl mx-auto sm:px-5 sm:py-14 sm:my-14 h-full ">
      <PokemonCard pokeStats={allPokemons} />
    </div>
  );
};

export default PokeList;

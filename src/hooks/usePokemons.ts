import { useEffect, useState } from "react";
import { getAllPokemons } from "../services/facts";
import { Pokemons } from "../types";

interface PokeListState {
  pokemons: Array<Pokemons>;
}

const usePokemons = () => {
  const [allPokemons, setAllPokemons] = useState<PokeListState["pokemons"]>([]);
  const [numPokemons, setNumPokemons] = useState(0)

  useEffect(() => {
    getAllPokemons().then(({allPokemons, numPokemon }) => {
      setAllPokemons(allPokemons);
      setNumPokemons(numPokemon);
    });
  }, []);

  return { allPokemons, numPokemons };
};

export default usePokemons;

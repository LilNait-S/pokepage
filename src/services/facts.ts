import { Pokemons } from "../types";

const ALL_POKEMONS_ENDPOINT =
  "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

interface PokemonData {
  name: string;
  url: string;
}

export const getAllPokemons = async (): Promise<{allPokemons: Pokemons[], numPokemon: number}> => {
  try {
    const res = await fetch(ALL_POKEMONS_ENDPOINT);
    const data: { results: PokemonData[] } = await res.json();

    const numPokemon = data.results.length

    const pokemonPromises = data.results.map(
      async (pokemon: PokemonData) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
      return res.json();
    });

    const allPokemons = await Promise.all(pokemonPromises);
    return { allPokemons, numPokemon };
  } catch (error) {
    console.error(error);
    return { allPokemons: [], numPokemon: 0 };
  }
};

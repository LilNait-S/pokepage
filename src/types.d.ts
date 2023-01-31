interface types {
  type: {
    name: string;
  };
}

interface stats {
  base_stat: number;
}

export interface Pokemons {
  id: number;
  name: string;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  types: Array<types>;
  stats: Array<stats>;
}

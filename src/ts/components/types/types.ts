export interface PokemonStructure {
  name: string;
  url: string;
}

export interface Pokemons {
  results: PokemonStructure[];
}

export interface PokemonSpecifications {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

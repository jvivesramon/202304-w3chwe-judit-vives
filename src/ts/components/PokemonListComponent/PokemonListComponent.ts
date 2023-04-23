import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";
import { type PokemonStructure } from "../types/types";
import { type Pokemons } from "../types/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
class PokemonListComponent extends Component {
  pokemons: Pokemons[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "ul", "items-container");
    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(apiUrl);
    const pokemons = (await response.json()) as PokemonStructure;

    this.pokemons = pokemons.results;
    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemons.forEach((pokemon) => {
      new PokemonCardComponent(this.element, pokemon.url);
    });
  }
}

export default PokemonListComponent;

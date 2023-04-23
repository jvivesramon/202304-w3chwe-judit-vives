import Component from "../Component/Component.js";
import { type ComponentStructure } from "../types";
import { type PokemonSpecifications } from "../types/types";

class PokemonCardComponent extends Component implements ComponentStructure {
  url: string;
  pokemonData: PokemonSpecifications;

  constructor(parentElement: Element, url: string) {
    super(parentElement, "li", "items-container_item");

    this.url = url;
    (async () => this.getPokemonData())();
  }

  async getPokemonData(): Promise<void> {
    const response = await fetch(this.url);
    const pokemon = (await response.json()) as PokemonSpecifications;

    this.pokemonData = pokemon;
    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
      <span class="item_id">${this.pokemonData.id}</span>
      <img src="${this.pokemonData.sprites.other["official-artwork"].front_default}" alt="${this.pokemonData.name}" width="160" height="160">
      <h2 class="item_name">${this.pokemonData.name}</h2>`;
  }
}

export default PokemonCardComponent;

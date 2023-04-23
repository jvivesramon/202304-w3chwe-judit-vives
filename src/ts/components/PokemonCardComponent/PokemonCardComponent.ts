import Component from "../Component/Component.js";
import { type ComponentStructure } from "../types";

class PokemonCardComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "li", "items-container_item");
  }

  renderHtml(): void {}
}

export default PokemonCardComponent;

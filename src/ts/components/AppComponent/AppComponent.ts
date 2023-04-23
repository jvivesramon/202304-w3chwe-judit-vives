import Component from "../Component/Component.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "div", "app-container");
    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <header class="header-container">
      <img src="../../../images/pokemon-logo.svg" alt="" width="270" height="99">
    </header>
    <main class="content-container">
      <nav class="nav-bar-container">
        <button class="button-nav-bar"><a href="">My Favorites</a></button>
        <button class="button-nav-bar"><a href="">Pokemon Collection</a></button>
        <button class="button-nav-bar"><a href="">Details</a></button>
      </nav>
      <div class="main-contents-container"></div>
      </main>`;

    const pokemonContainer = this.element.querySelector(
      ".main-contents-container"
    )!;
    new PokemonListComponent(pokemonContainer);
  }
}

export default AppComponent;

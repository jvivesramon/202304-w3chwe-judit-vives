import { type ComponentStructure } from "../types";

abstract class Component implements ComponentStructure {
  public element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;

    parentElement.appendChild(this.element);
  }

  abstract renderHtml(): void;
}

export default Component;

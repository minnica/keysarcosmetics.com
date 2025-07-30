import { LitElement, html } from 'lit';
import './index.css';

export class KeysarCosmetics extends LitElement {
  static get properties() {
    return {
      test: { type: String },
    };
  }

  constructor() {
    super();
    this.test = 'test';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="bg-red-500">${this.test}</div>`;
  }
}
customElements.define('keysar-cosmetics', KeysarCosmetics);

import { LitElement, html } from 'lit';
import './index.css';
import '@web-components-features/feature-sales-management-crud';

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
    return html`<div class="bg-red-500">${this.test}</div>
    <feature-sales-management-crud></feature-sales-management-crud>
    `;
   
  }
}
customElements.define('keysar-cosmetics', KeysarCosmetics);

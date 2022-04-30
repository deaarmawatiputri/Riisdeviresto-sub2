class HeroEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('hero');
    this.setAttribute('id', 'hero');
    this.innerHTML = `
        <div class="hero__content">
          <h1>There Is No Sincerer Love Than The Love Of Food</h1>
          <p>Good food ends with good talk</p>
        </div>
      `;
  }
}

customElements.define('hero-el', HeroEl);

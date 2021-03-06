class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="drawer">
            <div class="nav-content">
              <div class="nav-brand">
                <h1>Riisdevi Resto</h1>
              </div>
              <button id="hamburger" aria-label="navigation-menu">☰</button>
              <ul class="nav-menu">
                <li class="nav-item"><a href="/">Home</a></li>
                <li class="nav-item"><a href="#/catalogue">Catalogue</a></li>
                <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                <li class="nav-item">
                  <a
                    href="https://github.com/deaarmawatiputri"
                    rel="noreferrer"
                    target="_blank"
                    >About Us</a
                  >
              </li>
              </ul>
            </div>
          </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);

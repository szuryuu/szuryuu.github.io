class ProfileHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="hero-section">
        <div class="avatar-container">
          <img src="https://github.com/szuryuu.png" alt="szuryuu" class="avatar" loading="eager" />
        </div>
        <h1 class="text-ghost">szuryuu</h1>
        <p class="role-text">DevOps & Infrastructure</p>
        <div class="location-badge">
          <i data-lucide="map-pin" class="icon-small"></i>
          <span>Sleman, ID</span>
        </div>
      </header>
    `;
  }
}

customElements.define("profile-hero", ProfileHero);

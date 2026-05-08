class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button aria-label="Toggle Mode">
        <i data-lucide="moon" id="icon-moon"></i>
        <i data-lucide="sun" id="icon-sun" style="display: none;"></i>
      </button>
    `;
    this.btn = this.querySelector("button");
    this.iconSun = this.querySelector("#icon-sun");
    this.iconMoon = this.querySelector("#icon-moon");
    this.html = document.documentElement;

    this.syncIcons();
    this.btn.addEventListener("click", () => this.toggle());
  }

  syncIcons() {
    if (this.html.classList.contains("dark")) {
      this.iconMoon.style.display = "none";
      this.iconSun.style.display = "block";
    } else {
      this.iconMoon.style.display = "block";
      this.iconSun.style.display = "none";
    }
  }

  toggle() {
    if (this.html.classList.contains("dark")) {
      this.html.classList.remove("dark");
      localStorage.setItem("theme-preference", "light");
    } else {
      this.html.classList.add("dark");
      localStorage.setItem("theme-preference", "dark");
    }
    this.syncIcons();
  }
}

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

class LinkGrid extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="https://ilhamdzaky.my.id" target="_blank" rel="noopener" class="link-card">
        <div class="link-icon"><i data-lucide="globe"></i></div>
        <div class="link-content">
          <span class="link-title">Personal Website</span>
          <span class="link-url">ilhamdzaky.my.id</span>
        </div>
      </a>
      <a href="https://ilhamdzaky.my.id/cv-2026.pdf" target="_blank" rel="noopener" class="link-card">
        <div class="link-icon"><i data-lucide="file-text"></i></div>
        <div class="link-content">
          <span class="link-title">Curriculum Vitae</span>
          <span class="link-url">CV 2026 (PDF)</span>
        </div>
      </a>
      <a href="/blog" class="link-card">
        <div class="link-icon"><i data-lucide="book-open"></i></div>
        <div class="link-content">
          <span class="link-title">Blog</span>
          <span class="link-url">szuryuu.github.io/blog</span>
        </div>
      </a>
      <a href="https://github.com/szuryuu" target="_blank" rel="noopener" class="link-card">
        <div class="link-icon"><i data-lucide="git-branch"></i></div>
        <div class="link-content">
          <span class="link-title">GitHub</span>
          <span class="link-url">@szuryuu</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/shafwan-ilham-dzaky/" target="_blank" rel="noopener" class="link-card">
        <div class="link-icon"><i data-lucide="briefcase"></i></div>
        <div class="link-content">
          <span class="link-title">LinkedIn</span>
          <span class="link-url">Shafwan Ilham Dzaky</span>
        </div>
      </a>
      <a href="https://www.instagram.com/szuryuu/" target="_blank" rel="noopener" class="link-card">
        <div class="link-icon"><i data-lucide="camera"></i></div>
        <div class="link-content">
          <span class="link-title">Instagram</span>
          <span class="link-url">@szuryuu</span>
        </div>
      </a>
    `;
  }
}

customElements.define("theme-toggle", ThemeToggle);
customElements.define("profile-hero", ProfileHero);
customElements.define("link-grid", LinkGrid);

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

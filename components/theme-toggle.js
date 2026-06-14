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

customElements.define("theme-toggle", ThemeToggle);

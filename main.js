import "./components/theme-toggle.js";
import "./components/profile-hero.js";
import "./components/link-grid.js";

document.addEventListener("DOMContentLoaded", () => {
  window.lucide.createIcons();
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

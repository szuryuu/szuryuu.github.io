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

customElements.define("link-grid", LinkGrid);

// Shared navigation component. Edit the links here once for every page.
class SiteNav extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pages = [
      ['index.html', 'Home'],
      ['cv2.html', 'CV'],
      ['papers.html', 'Writings'],
      ['programs.html', 'Computer Programs'],
      ['gallery.html', 'Gallery'],
    ];

    const links = pages.map(([href, label]) => {
      const current = currentPage === href ? ' aria-current="page"' : '';
      return `<a href="${href}"${current}>${label}</a>`;
    }).join('\n        ');

    this.innerHTML = `<header>
      <nav aria-label="Main navigation">
        ${links}
      </nav>
    </header>`;
  }
}

customElements.define('site-nav', SiteNav);

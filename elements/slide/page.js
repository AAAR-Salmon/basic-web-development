class SlidePage extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('page-wrapper');
    if (!this.getAttribute('first')) {
      wrapper.classList.add('break-before');
    }
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/elements/slide/page.css');
    shadow.appendChild(link);
    wrapper.append(...this.childNodes);
    shadow.appendChild(wrapper);
  }
}

customElements.define('slide-page', SlidePage);

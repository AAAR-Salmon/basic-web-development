class SlidePage extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });
    const background = document.createElement('div');
    background.classList.add('page-background');
    const wrapper = document.createElement('div');
    wrapper.classList.add('page-wrapper');
    if (this.hasAttribute('takahashi') && this.getAttribute('takahashi') !== 'false') {
      wrapper.classList.add('takahashi');
    }
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/assets/elements/slide/page/style.css');
    shadow.appendChild(link);
    wrapper.append(...this.childNodes);
    background.append(wrapper);
    shadow.appendChild(background);
  }
}

customElements.define('slide-page', SlidePage);

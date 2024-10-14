class Sections extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.container = document.createElement('div');
        this.shadowRoot.appendChild(this.container);
    }

    // Method to update content based on the link clicked
    setContent(content) {
        switch (content) {
            case 'aboutme':
                this.container.innerHTML = `<wc-aboutme></wc-about-me>`
                break;
            case 'blog':
                this.container.innerHTML = `<wc-blog></wc-blog>`
                break;
            case 'cv':
                this.container.innerHTML = `<wc-cv></wc-cv>`
                break;
            case 'contact':
                this.container.innerHTML = `<wc-contact></wc-contact>`
                break;
            default:
                this.container.innerHTML = `<wc-aboutme></wc-aboutme>`
                break;
        }
    }
}

customElements.define('wc-sections', Sections);

function setupLinkHandlers() {
    const links = document.querySelectorAll('nav a');
    const dynamicComponent = document.querySelector('wc-sections');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const content = link.getAttribute('data-content');
            dynamicComponent.setContent(content); // Update the content of the web component
        });
    });
}

document.addEventListener('DOMContentLoaded', setupLinkHandlers);


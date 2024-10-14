class Blog extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.innerHTML = `<h2>Web Component Content</h2>
                               <p>This is the content loaded in the web component.</p>`;

        // Style (optional)
        const style = document.createElement('style');
        style.textContent = `
            div {
                border: 1px solid #ddd;
                padding: 10px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
        `;

        // Append elements to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

// Register the custom element
customElements.define('wc-blog', Blog);


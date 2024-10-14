class AboutMe extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.innerHTML = `<h2>About Me</h2>
                               <p>I'm a software engineer, specializing in big data, machine learning, and platform engineering.</p>
                               <p>Currently based in Brooklyn, New York.</p>`;

        const style = document.createElement('style');
        style.textContent = `
            div {
                padding: 10px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('wc-aboutme', AboutMe);


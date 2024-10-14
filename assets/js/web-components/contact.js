/* TODO: add captcha / contact form.*/
class Contact extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.innerHTML = `
        <h2><a href="https://www.linkedin.com/in/max-hoffman-270932107/">Contact Me.</a></h2>
        <a>
        `;

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

customElements.define('wc-contact', Contact);


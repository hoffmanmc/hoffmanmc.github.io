/* TODO add download section for PDF cv*/
class Cv extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.innerHTML = `
                               <img 
                                  src="./assets/images/construction.gif" 
                                  alt="Under construction GIF">`;

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

customElements.define('wc-cv', Cv);


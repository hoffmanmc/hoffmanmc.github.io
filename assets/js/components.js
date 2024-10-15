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

class Blog extends HTMLElement {
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

class Sections extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.container = document.createElement('div');
        this.shadowRoot.appendChild(this.container);
        this.setContent();
    }

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
customElements.define('wc-aboutme', AboutMe);
customElements.define('wc-blog', Blog);
customElements.define('wc-contact', Contact);
customElements.define('wc-cv', Cv);
customElements.define('wc-sections', Sections);


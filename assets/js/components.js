class AboutMe extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.innerHTML = `
                               <p>I'm a software engineer based in Brooklyn, New York.</p>
                               <p>My main interests are in data, machine learning, and platform engineering.</p>`;

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
          <div>
            <h1>Maxwell C. Hoffman</h1>

            <h3>Data Engineer, TightShip SEO Consulting, Aug 2022-Present</h3>
            <ul>
              <li>Build data ingestion pipelines using Google Cloud Composer (Airflow) processing terabytes of search rank data for clients across US and Canada. Supporting Looker Studio.</li>
              <li>Develop custom report ingestion to interface with proprietary web crawling tools, filtering into data lake and data warehouse solutions. Amazon workspaces, batch scripting, Python.</li>
              <li>Manage hybrid infrastructure and migration of legacy code between AWS and GCP services. S3 > Lambda > Redshift to GCS > Cloud Run > BigQuery.</li>
              <li>Oversee storage and retention of data lake and warehouse solutions; design tables, develop SQL scripts for routine and one-off maintenance.</li>
              <li>Create and maintain CI/CD pipelines for current and future infrastructure using GitHub Actions, Terraform, Docker.</li>
              <li>Design and implement cloud and data architecture for new data products in Google Cloud.</li>
            </ul>

            <h3>Cloud Engineer, MX Digital Solutions - Self Employed, October 2021-May 2024</h3>
            <h4>TightShip SEO Consulting:</h4>
            <ul>
              <li>Architect and build new data services for SEO teams. GCP, BigQuery, Python, Airflow, GCS, Looker Studio.</li>
              <li>Lead development for client-facing REST API using AWS SAM, API Gateway, Lambda, Redshift.</li>
              <li>Maintain client legacy applications in AWS using NodeJS, Python, AWS Redshift, AWS Lambda.</li>
              <li>Write version-controlled data ingestion scripts with Powershell, Git, & AWS CLI.</li>
              <li>Create custom Looker Studio connector to query AWS Redshift data for reporting.</li>
              <li>Develop web scraping pipeline using NodeJS and Playwright.</li>
            </ul>
            
            <h4>Virginia Commonwealth University - Office of Research Information Systems:</h4>
            <ul>
              <li>Design and implement front-end for in-house Enterprise Research Application.</li>
              <li>Design internal surveys using Google Forms for feedback intake.</li>
              <li>Data exploration with SQL, reporting in Tableau to discover needed features for future development.</li>
              <li>Implement user management, database design, and routing using Symfony PHP framework.</li>
              <li>Build custom form builder from scratch with Typescript for use in creating research questionnaires.</li>
              <li>Implement dashboards for tracking research document progress.</li>
              <li>Write, edit, and organize documentation for applications and project development.</li>
            </ul>

            <h4>Institute of Contemporary Art - Richmond Virginia:</h4>
            <ul>
              <li>Advise on infrastructure, maintenance, and hosting for the museum's main website.</li>
              <li>Update existing site design and add new features: PHP, CSS.</li>
              <li>Salvage previously abandoned CI/CD pipeline to ensure full functioning of build tools.</li>
            </ul>

            <h4>Home Property Management LLC:</h4>
            <ul>
              <li>Built real-time telephony API for NICE InContact system using Javascript and PHP.</li>
              <li>Organize correspondence and delegate to offshore development team.</li>
              <li>SQL scripting and database administration.</li>
            </ul>

            <h4>Stride Services:</h4>
            <ul>
              <li>Backend Python development with Singer.io.</li>
              <li>Optimize PySpark queries for legacy data pipelines to improve performance and run novel analysis.</li>
              <li>Build new Airtable to Quickbooks integrations.</li>
              <li>Update and improve existing Python code.</li>
            </ul>

            <h3>Data Systems Analyst, OBO, Columbia Maryland, October 2020-October 2021</h3>
            <ul>
              <li>Technical scoping and implementation for client project, CRM system integrations, and data migrations.</li>
              <li>Present proposed solutions and system analysis to clients using Powerpoint, Tableau.</li>
              <li>Design and build new data pipelines using Python, SQL, PostGres.</li>
              <li>ETL engineering with Python, SQL, Flask, Heroku.</li>
              <li>System design and implementation in Salesforce and Hubspot CRM platforms.</li>
              <li>Assess client needs, technical project scope, plan implementation of data migrations and system integrations.</li>
              <li>In-house scripting and automation using Python, Powershell, version control with Git.</li>
            </ul>

            <h3>NOC Analyst, NWG Solutions, Charlottesville Virginia, September 2019-October 2020</h3>
            <ul>
              <li>Collaborate with operations and engineering to improve processes, response time, and resolution of tickets.</li>
              <li>Microsoft SQL Server administration, reporting services support.</li>
              <li>Produce weekly and monthly IT services performance reports for review and service improvement.</li>
              <li>Automate deployment, patch management, and incident response using Powershell and Python.</li>
              <li>Oversee data protection for hundreds of terabytes of client data in both onsite and cloud solutions.</li>
            </ul>

            <h3>Systems Administrator, Helix Systems, Charlottesville Virginia, August 2018-September 2019</h3>
            <ul>
              <li>Install and troubleshoot router, firewall, VPN connections, specializing in Unifi network gear.</li>
              <li>Support Linux servers hosting web and telephony applications.</li>
              <li>Respond to help desk queries, handle ticket escalation and client outreach.</li>
            </ul>
          </div>
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


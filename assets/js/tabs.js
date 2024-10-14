const tabs = document.querySelectorAll('.tab-link');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.classList.add('active');
    });
});

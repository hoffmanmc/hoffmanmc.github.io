// Dynamically import all web components
Promise.all([
    import('./web-components/sections.js'),
    import('./web-components/aboutme.js'),
    import('./web-components/cv.js'),
    import('./web-components/blog.js'),
    import('./web-components/contact.js')
])
.then(() => {
    console.log("Loaded custom components.");
})
.catch(error => {
    console.error("Error loading custom components:", error);
});


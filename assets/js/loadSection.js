function loadSection(divId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading external content for ${divId}:`, error));
}



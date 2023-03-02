var searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') { 
        let word = e.target.value.toLowerCase().trim().replaceAll(" ", "-");
        link = "https://www.oxfordlearnersdictionaries.com/definition/english/" + word;
        window.open(link, '_blank');    
    }
});
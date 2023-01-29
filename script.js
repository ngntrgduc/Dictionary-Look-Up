var searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') { 
        link = "https://www.oxfordlearnersdictionaries.com/definition/english/" + e.target.value;
        window.open(link, '_blank');
    }
});
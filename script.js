let searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        let word = e.target.value.toLowerCase().trim().replaceAll(" ", "-");
        let dictionary = document.getElementById("dictionary").value;
        if (dictionary == "Cambridge") {
            link = "https://dictionary.cambridge.org/dictionary/english/" + word;
        } else {
            link = "https://www.oxfordlearnersdictionaries.com/definition/english/" + word;
        }
        window.open(link, '_blank');    
    }
});
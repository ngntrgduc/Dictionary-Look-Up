const dictionaries = ["Cambridge", "Oxford", "Merriam-Webster"];

document.querySelector("select").addEventListener("focus", function () {
    let selectedDictionary = document.getElementById("dictionary").value;

    for (let i = 0; i < dictionaries.length; i++) {
        if (dictionaries[i] == selectedDictionary) {
            if (i < dictionaries.length - 1) {
                document.getElementById("dictionary").value = dictionaries[i+1];
            }
            else document.getElementById("dictionary").value = dictionaries[0];
        }   
    }
    // Auto focus to search box after changed dictionary
    document.querySelector("input").focus(); 
});

document.getElementById("searchBox").addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        document.getElementById("searchBox").value = localStorage.getItem("previous");
    }

    if (e.key === "Enter") {
        let word = e.target.value.toLowerCase().trim().replaceAll(" ", "-");
        localStorage.setItem("previous", word);
        let selectedDictionary = document.getElementById("dictionary").value;
        if (selectedDictionary == "Cambridge") {
            link = "https://dictionary.cambridge.org/dictionary/english/" + word;
        } else if (selectedDictionary == "Oxford") {
            link = "https://www.oxfordlearnersdictionaries.com/definition/english/" + word;
        } else {
            link = "https://www.merriam-webster.com/dictionary/" + word;
        }
        window.open(link, '_blank');    
    }
});
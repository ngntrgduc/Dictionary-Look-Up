const dictionaries = ["Cambridge", "Oxford", "Merriam-Webster"];

function getURLs(word) {
    return  {
        "Cambridge": "https://dictionary.cambridge.org/dictionary/english/" + word,
        "Oxford": "https://www.oxfordlearnersdictionaries.com/definition/english/" + word,
        "Merriam-Webster": "https://www.merriam-webster.com/dictionary/" + word
    }
}

function format(word) {
    return word.trim().replaceAll(" ", "-");
}

function lookUp(word, selected) {
    const urls = getURLs(format(word));
    let url = urls[selected];
    chrome.tabs.create({ url: url });
}

document.querySelector("select").addEventListener("focus", function() {
    let selected = document.getElementById("dictionary").value;

    for (let index = 0; index < dictionaries.length; index++) {
        if (dictionaries[index] == selected) {
            let nextIndex = (index+1) % dictionaries.length;
            document.getElementById("dictionary").value = dictionaries[nextIndex];
        }
    }
    // Auto focus to search box after changed dictionary
    document.querySelector("input").focus(); 
});

document.getElementById("searchBox").addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        // Get previous searched
        document.getElementById("searchBox").value = localStorage.getItem("previous");
    }

    if (e.key === "Enter") {
        let word = e.target.value.toLowerCase().trim();
        localStorage.setItem("previous", word);
        
        let delimiter = ",";
        let selected = document.getElementById("dictionary").value;
        
        if (word.includes(delimiter)) {
            let words = word.split(",");
            for (word of words) {
                lookUp(word, selected);
            }
        } else {
            lookUp(word, selected);
        }
    }
});
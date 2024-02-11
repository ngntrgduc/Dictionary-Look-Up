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

// Focus to search box after changed dictionary
document.querySelector("select").addEventListener("change", function() {
    document.getElementById("searchBox").focus();
});

document.getElementById("searchBox").addEventListener("keydown", function(e) {
    // Get previous searched
    if (e.key === "ArrowUp") {
        document.getElementById("searchBox").value = localStorage.getItem("previous");
    }

    // Change dictionary when Tab pressed
    if (e.key === "Tab") {
        e.preventDefault();
        let selected = document.getElementById("dictionary").value;

        for (let index = 0; index < dictionaries.length; index++) {
            if (dictionaries[index] == selected) {
                let nextIndex = (index+1) % dictionaries.length;
                document.getElementById("dictionary").value = dictionaries[nextIndex];
            }
        }
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
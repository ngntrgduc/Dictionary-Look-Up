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

function lookUp(word, selectedDictionary) {
    const urls = getURLs(format(word));
    let url = urls[selectedDictionary];
    chrome.tabs.create({ url: url });
}

function getSelectedDictionary() {
    return document.getElementById("dictionary").value;
}

// Focus to search box after changed dictionary or lose focus on select menu
["change", "focusout"].forEach(event => 
    document.querySelector("select").addEventListener(event, () => {
        document.getElementById("searchBox").focus();  
    })
);

document.getElementById("searchBox").addEventListener("keydown", function(e) {
    // Get previous searched
    if (e.key === "ArrowUp") {
        document.getElementById("searchBox").value = localStorage.getItem("previous");
    }

    // Change dictionary when Tab or Shift + Tab pressed
    if (e.key === "Tab") {
        e.preventDefault();
        
        const currentIndex = dictionaries.indexOf(getSelectedDictionary());
        let nextIndex;

        if (e.shiftKey) {
            nextIndex = currentIndex === 0 ? dictionaries.length - 1 : currentIndex - 1;
        } else {
            nextIndex = (currentIndex+1) % dictionaries.length;
        }
        
        document.getElementById("dictionary").value = dictionaries[nextIndex];
    }

    if (e.key === "Enter") {
        let word = e.target.value.toLowerCase().trim();
        localStorage.setItem("previous", word);
        
        let delimiter = ",";
        
        if (word.includes(delimiter)) {
            let words = word.split(",");
            for (word of words) {
                lookUp(word, getSelectedDictionary());
            }
        } else {
            lookUp(word, getSelectedDictionary());
        }
    }
});
const dictionaries = ["Cambridge", "Oxford", "Merriam-Webster"];
const searchBox = document.getElementById("searchBox");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (document.activeElement !== searchBox) {
            searchBox.focus();  // Workaround for Firefox autofocus
        }
    }, 10)
})

function getDictionaryURLs(word) {
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
    if (!word.trim()) return;
    const urls = getDictionaryURLs(format(word));
    let url = urls[selectedDictionary];
    browser.tabs.create({ url: url });
}

function getSelectedDictionary() {
    return document.getElementById("dictionary").value;
}

function isInvalidWord(word) {
    const regex = /[^a-zA-Z,\s-]/;
    return regex.test(word);
}

// Focus to search box after changed dictionary or lose focus on select menu
["change", "focusout"].forEach(event => 
    document.querySelector("select").addEventListener(event, () => {
        searchBox.focus();  
    })
);

searchBox.addEventListener('input', (e) => {
    const maxLength = e.target.maxLength;
    const currentLength = e.target.value.length;

    // Add the error class when input length equals maxlength
    if (currentLength >= maxLength) {
        e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
});

searchBox.addEventListener("keydown", function(e) {
    // Get previous searched
    if (e.key === "ArrowUp") {
        searchBox.value = localStorage.getItem("previous");
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
        
        if (isInvalidWord(word)) {
            e.preventDefault();
            e.target.classList.add('error');
            return;
        }

        localStorage.setItem("previous", word);
        
        let delimiter = ",";
        const selectedDictionary = getSelectedDictionary();
        
        if (word.includes(delimiter)) {
            let words = word.split(",");
            for (const w of words) {
                lookUp(w, selectedDictionary);
            }
        } else {
            lookUp(word, selectedDictionary);
        }

        window.close();
    }
});

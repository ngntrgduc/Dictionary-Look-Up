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
        let word = e.target.value.toLowerCase().trim();
        localStorage.setItem("previous", word);

        let delimiter = ",";
        if (word.includes(delimiter)) {
            let words = word.split(",");
            for (word of words) {
                word = word.trim().replaceAll(" ", "-");
                const urls = [
                    "https://dictionary.cambridge.org/dictionary/english/" + word,
                    "https://www.oxfordlearnersdictionaries.com/definition/english/" + word,
                    "https://www.merriam-webster.com/dictionary/" + word
                ]
                let selectedDictionary = document.getElementById("dictionary").value;
                if (selectedDictionary == "Cambridge") {
                    url = urls[0];
                } else if (selectedDictionary == "Oxford") {
                    url = urls[1];
                } else {
                    url = urls[2];
                } 
                if (e.altKey) {
                    for (url of urls) {
                        chrome.tabs.create({ url: url });
                    }
                } else chrome.tabs.create({ url: url });
            }
        } else {
            word = word.replaceAll(" ", "-");
            const urls = [
                "https://dictionary.cambridge.org/dictionary/english/" + word,
                "https://www.oxfordlearnersdictionaries.com/definition/english/" + word,
                "https://www.merriam-webster.com/dictionary/" + word
            ]
            
            if (e.altKey) {
                for (url of urls) {
                    chrome.tabs.create({ url: url });
                }
            } else {
                let selectedDictionary = document.getElementById("dictionary").value;
                if (selectedDictionary == "Cambridge") {
                    url = urls[0];
                } else if (selectedDictionary == "Oxford") {
                    url = urls[1];
                } else {
                    url = urls[2];
                } 
                chrome.tabs.create({ url: url });
            }
        }
    }
});
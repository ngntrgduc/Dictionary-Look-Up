document.querySelector('select').addEventListener('focus', function () {
    let selectedDictionary = document.getElementById("dictionary").value;
    if (selectedDictionary == "Cambridge") {
        document.getElementById('dictionary').value = "Oxford";
    } else {
        document.getElementById('dictionary').value = "Cambridge";
    }
    // Auto focus to search box after changed dictionary
    document.querySelector('input').focus(); 
});

document.getElementById("searchBox").addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        let word = e.target.value.toLowerCase().trim().replaceAll(" ", "-");
        let selectedDictionary = document.getElementById("dictionary").value;
        if (selectedDictionary == "Cambridge") {
            link = "https://dictionary.cambridge.org/dictionary/english/" + word;
        } else {
            link = "https://www.oxfordlearnersdictionaries.com/definition/english/" + word;
        }
        window.open(link, '_blank');    
    }
});
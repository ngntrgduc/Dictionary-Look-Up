// Removes all context menu items added by this extension
// chrome.contextMenus.removeAll();

const cambridge = {
    id: "cambridge",
    title: "Cambridge",
    contexts: ["selection"]  
}

const oxford = {
    id: "oxford",
    title: "Oxford",
    contexts: ["selection"]
};

const mw = {
    id: "mw",
    title: "Merriam-Webster",
    contexts: ["selection"]
};

chrome.contextMenus.create(cambridge);
chrome.contextMenus.create(oxford);
chrome.contextMenus.create(mw);

chrome.contextMenus.onClicked.addListener(function(clicked) {
    if (clicked.selectionText) {
        if (clicked.menuItemId === "cambridge") {
            url = "https://dictionary.cambridge.org/dictionary/english/" + clicked.selectionText;
        } else if (clicked.menuItemId === "oxford") {
            url = "https://www.oxfordlearnersdictionaries.com/definition/english/" + clicked.selectionText;
        } else if (clicked.menuItemId === "mw") {
            url = "https://www.merriam-webster.com/dictionary/" + clicked.selectionText;
        }
        
        chrome.tabs.create({ url: url });
    }
})
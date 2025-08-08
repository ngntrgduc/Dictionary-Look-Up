# Dictionary-Look-Up
Extension to look up words **painlessly**.

![](/images/dlu.png)

## Why this ?
I'm so tired when looking up some words: 
1. Open a new tab 
2. Type dictionary web page 
3. Hit `Enter` 
4. Type a word to look up 
5. Hit `Enter`

This extension will make the look up process less painful because you just need to toggle the extension and look up the word.


## Features
- Support dictionaries: [Cambridge](https://dictionary.cambridge.org/), [Oxford](https://www.oxfordlearnersdictionaries.com/), [Merriam-Webster](https://www.merriam-webster.com/)
- Easily toggle extension via shortcut `Alt` + `O` (default)
- Easily change dictionary via `Tab` and `Shift` + `Tab` key
- Get previously looked up word when press `↑` arrow key
- Search multiple words at once, separated by a comma (`,`)
- Prevent searching for mistyped words that contain invalid words, symbols, and numbers
- **Simple** but yet **powerful**, **time-saving**


## Installation
![](https://img.shields.io/amo/users/dictionary-look-up?style=for-the-badge&label=Firefox%20Addons%20users)

Extension available on [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/dictionary-look-up/).

### Local
1. Clone this repository/[download zip](https://github.com/ngntrgduc/Dictionary-Look-Up/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Dictionary-Look-Up.git
```

2. Load extension:
    - **Chrome:**  `Settings` -> `Extensions`.
    - **Edge:**    `Extensions` -> `Manage Extensions`.

        Then turn on `Developer mode`. Finally, click `Load unpacked` and select the `chromium` folder.

    - **Firefox:** Go to `about:debugging`, click `Load Temporary Add-on...`, then select `manifest.json` in the `firefox` folder.


## Todo & Ideas
- [ ] Another port
    - [ ] ~~Chrome~~ (because it costs $5 to create an account 🥲)
    - [ ] Edge
- [ ] Make a GIF to demo how it works. 
- [ ] Options page
    - [ ] Custom 1st dictionary by changing order of URLs
    - [ ] Custom URLs to search not only for dictionary (general purpose, same as Vomnibar feature of Vimium, such as search video on Youtube,...)
    - [ ] Custom delimiter (default is ,)...
    - [ ] Add option (checkbox) to remove "Tab to switch dictionary" behavior, maybe some people prefer the default behavior: press Tab to move to dictionary selection, and select it by mouse or navigation through arrow keys. Also, if there are lots of URLs, selecting options by using mouse will be easier
    - [ ] Limit select options on popup? There's no need for many options to appear on the popup. 
- [ ] Prevent searching when input too many characters. Opening too many tabs at once can cause lag on the user's device and potentially result in the IP being banned.
    - [ ] limit to 5 words? If it exceeds this limit, add a delay, or prevent opening more than 5 words (or a specific number of words, time delay, defined in the options page)

### Done
- [x] Search multiple words at once, using separator (`,`) ~~(user-defined)~~ (keep the extension simple)
- [x] Change the behavior of the `Tab` key because clicking to change the dictionary seems weird when it's just switched to another but does not show the dictionary pane
- [x] `Shift` + `Tab` to move back dictionary
    - [x] Change/Fix/Remove focus behavior, maybe using event.key instead
- [x] Fix autofocus on Firefox
- [x] Handle when no word is entered: won't work if nothing in the search box or just typing space, or when mistyping `,`
- [x] Add max length to the input. Prevent the user from miscopying long paragraphs or sentences or looking up too many words.
- [x] Handle invalid input: prevent searching if Vietnamese characters (Happen when mistyping by using Telex method. For example: `dictionary` will become `dictionảy`.), strange characters, symbols, and numbers appear. 

### Abandoned
- Auto read copied text when opening the extension, no more Ctrl + V -> The JS clipboard API has [limited availability](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility)
- For Cambridge dictionary, if an incorrect word is searched, it automatically redirects to the search page -> Too specific, and retype makes it more memorable
- More limit of the previous word? -> Not optimal, use `Ctrl + H` instead
- Auto convert Vietnamese characters (By using Telex typing method) to English -> Too specific, also it's hard to handle the Telex method
- Search a word with all dictionaries via shortcut `Alt` + `Enter` -> Opening all dictionaries for a word is not necessary, and it become problematic when searching for multiple words

## Contributing
If you found a bug or want to contribute, feel free to open a issue/pull requests. All contributions are welcomed.


## Coffee
If you like this project and you want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc) (I turn coffee into code). Thank you very much 💖.

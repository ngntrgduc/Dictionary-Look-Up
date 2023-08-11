
# Dictionary-Look-Up ![](https://img.shields.io/github/manifest-json/v/ngntrgduc/Dictionary-Look-Up?style=flat-square)

Extension to look up words **painlessly**.

## Why this ?

I'm so tired when looking up some words: Open a new tab -> Type dictionary web page -> Hit `Enter` -> Type a word to look up -> Hit `Enter`.

This extension will make the look up process less painful because you just need to toggle the extension and look up the word.

## Features

- Support dictionaries: [Cambridge](https://dictionary.cambridge.org/), [Oxford](https://www.oxfordlearnersdictionaries.com/), [Merriam-Webster](https://www.merriam-webster.com/).
- Easily toggle extension via `Alt` + `O` (default).
- Open dictionary in a new tab after press `Enter` in the search box.
- Look up word in all dictionaries by press `Alt` + `Enter` in the search box.
- Easily change dictionary via `Tab` key.
- Get previous word when press `↑` key.
- Search multiple word at once, using comma (`,`)
- Select word and **right-click to look up**.
- **Simple** but yet **powerful**.

## Installation
**Note**: If you use Firefox, please go to the [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/dictionary-look-up/), or you can checkout [firefox branch](https://github.com/ngntrgduc/Dictionary-Look-Up/tree/firefox).

1. Clone this repository / [download zip](https://github.com/ngntrgduc/Dictionary-Look-Up/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Dictionary-Look-Up.git
```

2. Load extension:

- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**    `Extensions` -> `Manage Extensions`.

Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

3. 
   - Make the extension more visible by `Pin` (Chrome) / `Show in toolbar` (Edge). 
   - Change shortcut in `Keyboard shortcuts` if needed.
   - If you want to change default dictionary, go to the source code folder and change order of option in [index.html](https://github.com/ngntrgduc/Dictionary-Look-Up/blob/master/index.html#L15-L17).

4. Enjoy your brand new look up process ✨. 

## Todo
- [ ] Options page
  - [ ]  Select default dictionary (change order of url)
  - [ ]  Custom url to search (general purpose, like search video on Youtube, not only for dictionary)
  - [x]  Search multiple word at once, using seperator (`,`) ~~(user defined)~~ (maybe keep the extension/add-on simple)
- [ ]  Right click to look up word (does it necessary or just a make the extension slower ?)
- [ ] Auto read copied text when open the extension (no more Ctrl + V)
- [ ] Change behavior of `Tab` key because clicking to change dictionary seem weird when it's just switch to other but not show the dictionary pane
- [ ] Another port
  - [ ] ~~Chrome~~ (because it's cost 5$ fee to create account 🥲)
  - [ ] Edge

## Contributing
If you found a bug or want to contribute, feel free to open a issue / pull requests. 

## Coffee
If you like this project and want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc).

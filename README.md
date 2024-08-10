
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
- Get previous word when press `↑` key
- Search multiple word at once, using `,` (default)
- **Simple** but yet **powerful**, **time-saving**

## Installation
**Note**: If you use Firefox, the extension is available on [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/dictionary-look-up/), or you can checkout [`firefox` branch](https://github.com/ngntrgduc/Dictionary-Look-Up/tree/firefox) for local installation.

1. Clone this repository/[download zip](https://github.com/ngntrgduc/Dictionary-Look-Up/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Dictionary-Look-Up.git
```

2. Load extension:

- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**    `Extensions` -> `Manage Extensions`.

Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

3. 
   - Make the extension more visible by `Pin` (Chrome)/`Show in toolbar` (Edge). 
   - Change shortcut in `Keyboard shortcuts` if needed.
   - If you want to change default dictionary, go to the source code folder and change order of option in [index.html](https://github.com/ngntrgduc/Dictionary-Look-Up/blob/master/index.html#L15-L17).

4. Enjoy your brand new look up process ✨. 

## Todo/Idea
- [ ] Options page
    - [ ]  Select default dictionary (change order of URL)
    - [ ]  Custom URL to search (general purpose, like search video on Youtube, not only for dictionary)
    - [ ] Custom seperator...
    - [ ] Add option to remove Tabbing behavior, maybe some people prefer the default behavior
- [ ] Another port
    - [ ] ~~Chrome~~ (because it's cost 5$ fee to create account 🥲)
    - [ ] Edge
- [ ] Make a GIF to demo how it works.
- [ ] Add warning when inputting too many characters. Open too many tabs at once can cause lag on the user's device
    - [ ]  limit to 5 words? If it exceeds this limit, add a delay

### Done
- [x] Search multiple words at once, using separator (`,`) ~~(user-defined)~~ (keep the extension simple)
- [x] Change the behavior of the `Tab` key because clicking to change the dictionary seems weird when it's just switched to another but does not show the dictionary pane
- [x] `Shift` + `Tab` to move back dictionary
    - [x] Change/Fix/Remove focus behavior, maybe using event.key instead
- [x] Remove and maybe add a new feature for `Alt` + `Tab` instead. Because opening all dictionaries for a word is not necessary, and maybe upgrade this extension to be more general (like Vomnibar in Vimium), not only with dictionary look up
- [x] Fix autofocus on Firefox
- [x] Handle when no word is entered: won't work if nothing in the search box or just type space, or when mistyping `,`

### Abandoned
- Auto read copied text when opening the extension, no more Ctrl + V (the JS clipboard API is [limited availability](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility))
- If search incorrect vocab, auto redirect to the search page with vocab (for Cambridge dictionary) (too specific, and type again make the vocab more memorable)
- More limit of the previous word? (not optimal, use `Ctrl + H` instead)


## Contributing
If you found a bug or want to contribute, feel free to open a issue/pull requests. All contributions are welcomed.

## Coffee
If you like this project and you want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc). Thank you very much 💖.
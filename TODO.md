## Todo & Ideas
- [ ] Add a ROADMAP.md and move this section to that file. (When the extension having sufficient users 🥲)
- [ ] Another port
    - [ ] ~~Chrome~~ (because it costs $5 to create an account 🥲)
    - [ ] Edge
- [ ] Make a GIF to demo how it works. 
- [ ] Options page
    - [ ] Custom 1st dictionary by changing order of URLs
    - [ ] Custom URLs to search not only for dictionary (general purpose, same as Vomnibar feature of Vimium, such as search video on Youtube,...)
    - [ ] Custom delimiter (default is ,) but exclude space character, also check that delimiter is a single symbol (not character because it will conflict with English words)
    - [ ] Add option (checkbox) to remove "Tab to switch dictionary" behavior, maybe some people prefer the default behavior: press Tab to move to dictionary selection, and select it by mouse or navigation through arrow keys. Also, if there are lots of URLs, selecting options by using mouse will be easier
    - [ ] Limit select options on popup (with hard limit is 10 options)? There's no need for many options to appear on the popup. 
    - [ ] Option for Opening in background (using active: false when creating tab) instead of foreground
    - [ ] Add error message and option to hide it
    - [ ] Drag and Drop or add moving arrow to reorder dictionaries
- [ ] Prevent searching when input too many characters. Opening too many tabs at once can cause lag on the user's device and potentially result in the IP being banned.
    - [ ] limit to 5 words? If it exceeds this limit, add a delay (but bad for UX), or prevent opening more than 5 words (or a specific number of words defined in the options page), or just skip extra words, only search for first 5 words


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
- Remove duplicated words -> Not necessary
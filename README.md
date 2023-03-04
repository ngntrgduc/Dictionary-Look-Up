
# Dictionary-Look-Up

Extension to look up words **painlessly**.

## Why this ?

I'm so tired when looking up some words: Open a new tab -> Type Dictionary webpage -> Hit `Enter` -> Type a word to look up -> Hit `Enter`.

This extension will make the look up process less painful when you just need to toggle the extension and search the word.

## Features

- Support dictionaries: [Cambridge](https://dictionary.cambridge.org/), [Oxford](https://www.oxfordlearnersdictionaries.com/).
- Open dictionary in a new tab after press `Enter` in the search box.
- Easily change dictionary to look up.
- Hide some infomations that's not useful on the websites.
- Simple but yet powerful.

## How to use
1. Clone this repository or [download zip](https://github.com/ngntrgduc/Dictionary-Look-Up/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Dictionary-Look-Up.git
```

2. Load extension:

- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**  `Extensions` -> `Manage Extensions`.

Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

3. 
   - Make the extension more visible by `Pin` (Chrome) / `Show in toolbar` (Edge). 
   - Create a shortcut to toggle the extension easier in `Keyboard shortcuts` (I use `Alt + O`).
   - If you want to change dictionary, use `Tab` key and arrow keys to change and use `Tab` again to go back to the search box. 
   - If you want to change default dictionary to Oxford, go to the source code folder and change order of option in [index.html](https://github.com/ngntrgduc/Dictionary-Look-Up/blob/master/index.html).

4. Enjoy your brand new look up process ✨. 
 
## Notes
- This extension hide some infomations that's not useful on the websites. If you don't want to hide, delete `"content_scripts"` part in [manifest.json](https://github.com/ngntrgduc/Dictionary-Look-Up/blob/master/manifest.json#L12#L21).

## Screenshot
![image](https://user-images.githubusercontent.com/47920109/222754942-fe791266-0a32-4fde-b0c8-4e1044a8fc84.png)

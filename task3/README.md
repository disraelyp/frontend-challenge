# Task 3 - Interactive Memory Game
This is a simple memory matching game, built with JavaScript, CSS, and HTML. The game has three different levels of difficulty based on the number of cards: Easy (6), Normal (8) and Hard (10).

## Project Structure
The project has the following structure:

```
.
├── src
│   └── js
│     └── core.js
│   └── css
│     └── globals.css
│
├── index.html
```
- `core.js`: Contains the game logic written in plain Javascript. It has a mechanism to generate cards, shuffle them, flip a card on user interaction, check a match between two flipped cards and handle end game scenario.

- `globals.css`: Contains the global styles for the entire application. It is responsible for the colors, fonts and position of elements on the webpage.

- `index.html`: This file contains the HTML structure of the application. All the other files are linked in it.

User can start a new game by pressing the "New Game" button and select difficulty using the dropdown menu. During the game, user can see the elapsed time and the number of moves he/she made. Once all the cards have been matched, a message will pop-up displaying the win message and the total time and moves it took.

## How To Run (Recommended)
- Open the project in VS Code.
- Install ''Live Server'' extension.
- Right click on `index.html` and select `Open with Live Server`.
- 
### How To Run (Alternative)
- Open the `index.html` file in any modern browser.
- Select the difficulty level and start the game.


## Requirements
- Any modern web browser (like Chrome, Firefox, Safari etc)
- Text Editor for viewing/editing the code (like VS Code, Sublime Text, Atom etc)
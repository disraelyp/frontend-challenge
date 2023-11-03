# Project "Dog's Page"

## Project Structure
The project consists of 2 HTML pages `index.html` and `page2.html` which display data fetched from an external API. The data displayed includes details about different dog breeds, images of the dogs, and a search history.

- `index.html` : This page displays a list of dog breeds and their images. Breeds are displayed as cards and the name of each breed can be seen on hover.
- `page2.html` : This page displays a table of the dog breeds with their sub-breeds. It also features a search form and a sort feature.

The `src` folder contains the CSS and JavaScript files:

- `loader.js` : It fetches the data from the API and displays the cards in `index.html`.
- `table.js` : It fetches the data from the API and populates the table in `page2.html`. It also handles the sorting and searching of data.
- `globals.css` : Contains styles that apply globally to both HTML pages.

The project also includes an `public/image-not-found.jpg` which is shown whenever an image cannot be found for a specific breed.

## Prerequisites
- A modern web-browser like Brave , Chrome , Firefox etc
- Active Internet Connection

## How To Run (Recommended)
- Open the project in VS Code.
- Install ''Live Server'' extension.
- Right click on `index.html` and select `Open with Live Server`.
- 
### How To Run (Alternative)
- Open the `index.html` file in any modern browser.
- Select the difficulty level and start the game.

## Built With
- HTML
- CSS
- JavaScript

## External API
https://dog.ceo/api/breeds/list/all

## Potential Improvements
- An actual backend server could be implemented.
- User authentication to create a personalized experience.
- Create a feature to favorite breeds and save them locally.
- Improve UI/UX design for better interaction.

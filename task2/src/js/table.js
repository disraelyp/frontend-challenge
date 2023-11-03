const DOGS_DATA_KEY = 'dogsData';
const DOGS_DATA_TIMESTAMP_KEY = 'dogsDataTimestamp';
const SEARCH_HISTORY_KEY = 'searchHistory';

let isSortedAZ = true;
let searchHistory = JSON.parse(localStorage.getItem(SEARCH_HISTORY_KEY)) || [];

const searchInput = document.getElementById('search-input');
const tableBody = document.getElementById('dog-table-body');
const sortButton = document.getElementById('sort-btn');
const searchForm = document.getElementById('search-form');
const searchHistorySection = document.getElementById('search-history-section');

/**
 * Add a search history item to the page
 * @param {string} item
 * @returns {void}
 */
function init() {
    fetchDogsData().then(populateTable);
    sortButton.addEventListener('click', sortTable);
    searchForm.addEventListener('submit', performSearch);
}
init();

/**
 * Add a search history item to the page
 * @param {string} item
 * @returns {void}
 */
searchHistory.forEach((item) => addSearchHistoryItem(item));

/**
 * Add a search history item to the page
 * @param {string} item
 * @returns {void}
 */
function addSearchHistoryItem(item) {
    console.log(searchHistorySection.children.length);
    const newHistoryItem = document.createElement('p');
    newHistoryItem.textContent = searchHistorySection.children.length == 1 ? item : `, ${item}`
    searchHistorySection.appendChild(newHistoryItem);
  }

/**
 * Fetch data from the API and create a div element for each dog
 * @returns {void}
 */
function fetchDogsData() {
    const cachedData = localStorage.getItem(DOGS_DATA_KEY);

    // If the data is cached and less than 30 minutes old, use the cached data
    if (cachedData) {
        const ageInMinutes = getMinutesElapsed(localStorage.getItem(DOGS_DATA_TIMESTAMP_KEY));
        if (ageInMinutes < 30) {
            return Promise.resolve(JSON.parse(cachedData));
        }
    }

    // Otherwise, fetch the data from the API
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem(DOGS_DATA_KEY, JSON.stringify(data.message));
            localStorage.setItem(DOGS_DATA_TIMESTAMP_KEY, Date.now());
            return data.message;
        });
}


/**
 * Fetch data from the API and create a div element for each dog
 * @returns {void}
 */
function getMinutesElapsed(timestamp) {
    const elapsedMilliseconds = Date.now() - timestamp;
    return Math.floor((elapsedMilliseconds % 86400000 % 3600000) / 60000);
}

/**
 * Populate the table with data
 * @param {object} breedsObject
 * @returns {void}
 */
function populateTable(breedsObject) {
    Object.keys(breedsObject).forEach(breed => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${breed}</td><td>${breedsObject[breed].join(', ')}</td>`;
        tableBody.appendChild(row);
    });
}

/**
 * Sort the table by breed
 * @returns {void}
 */
function sortTable() {
    const rowsArray = Array.from(tableBody.getElementsByTagName("tr"));

    // Sort the rows by breed
    const sortedArray = rowsArray.sort((rowA, rowB) => {
        const breedA = rowA.getElementsByTagName("td")[0].innerText;
        const breedB = rowB.getElementsByTagName("td")[0].innerText;
        return isSortedAZ ? breedA.localeCompare(breedB) : breedB.localeCompare(breedA);
    });

    sortedArray.forEach(row => tableBody.appendChild(row));
    isSortedAZ = !isSortedAZ;
    sortButton.innerText = `Sort by Breed (${isSortedAZ ? 'A-Z' : 'Z-A'})`;
}

/**
 * Perform a search on the table
 * @param {Event} e
 * @returns {void}
 */
function performSearch(e) {
    e.preventDefault();

    const searchValue = searchInput.value.toLowerCase();

    // Loop through each row and hide the ones that don't match the search value
    Array.from(tableBody.getElementsByTagName('tr')).forEach(row => {
        const [breedCell, subBreedCell] = row.getElementsByTagName("td");
        const breed = breedCell?.innerText.toLowerCase();
        const subBreed = subBreedCell?.innerText.toLowerCase();

        // If the search value is empty, show all rows
        row.style.display = breed.includes(searchValue) || subBreed.includes(searchValue) ? '' : 'none';
    });

    // Add the search value to the search history
    if (searchValue && !searchHistory.includes(searchValue)) {
        searchHistory.push(searchValue);
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
        addSearchHistoryItem(searchValue);
    }
}

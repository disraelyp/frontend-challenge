const contents = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷'];
let cardsQuantity = 8;
let cards = genCards(cardsQuantity);
let movement = 0;
let cardSelectedA = null;
let cardSelectedB = null;
let clockEnable = false;
let time = 0;
let score = 0;

/***
 * Generate cards
 * @param {number} quantity quantity of cards
 * @returns {Array} array of cards
 * */
function genCards(quantity) {
    let cards = [];

    for (let i = 0; i < quantity; i++) {
        cards.push({ id: i, content: contents[i] });
        cards.push({ id: i, content: contents[i] });
    }

    return shuffle(cards)
}

/***
 * Shuffle array
 * @param {Array} array array to shuffle
 * @returns {Array} shuffled array
 * */
function shuffle(array) {
    let len = array.length;

    while (0 !== len) {
        let randomIdx = Math.floor(Math.random() * len);
        len -= 1;
        [array[len], array[randomIdx]] = [array[randomIdx], array[len]];
    }

    return array;
}


/***
 * Create div element
 * @param {string} id element id
 * @param {string} className element class
 * @param {string} innerHTML element innerHTML
 * @returns {HTMLElement} element
 * */
function createDiv(id, className, innerHTML) {
    let element = document.createElement('div');
    element.id = id;
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
}

/***
 * Search element by query
 * @param {string} query query selector
 * @returns {HTMLElement} element
 * */
function search(query) {
    return document.querySelector(query);
}

/***
 * Start clock and update clock element
 * @returns {void}
 * */
function startClock() {
    setInterval(() => {
        if (clockEnable) {
            time++;
            search('#clock').innerHTML = `Time: ${time} seconds`;
        }
    }, 1000);
}

/***
 * Create card element
 * @param {*} card card object
 * @returns {HTMLElement} card element
 */
function createCardElement(id, card) {
    let element = createDiv(id, 'card', card.content);
    element.dataset.cardId = card.id;
    element.addEventListener('click', cardClickHandler);
    return element;
}

/***
 * Render game board
 * @returns {void}
 * */
function render() {
    let gameBoard = search('#board');
    cards.forEach((card, index) => {
        let cardElement = createCardElement(`card-element${index}`, card);
        gameBoard.appendChild(cardElement);
    });
}
render();

/***
 * Calculate movement and update movement element
 * @returns {void}
 * */
function renderMovement() {
    search('#movement').innerHTML = `${movement} moves`;
}
renderMovement();

/***
 * Card click handler function that flip card and check for match
 * @param {Event} event click event
 * @returns {void}
 * */
function cardClickHandler(event) {
    movement++;

    search('.start-button').disabled = true;
    search('.reset-button').disabled = false;
    
    if (clockEnable === false) {
        time = 0;
        startClock();
        clockEnable = true;
    }
    let card = event.target;
    if ((!cardSelectedA || !cardSelectedB) && !card.classList.contains('flipped')) {
        flip(card);
        if (cardSelectedA) {
            cardSelectedB = card
        } else {
            cardSelectedA = card;
        }
        if (cardSelectedA && cardSelectedB) {
            checkForMatch();
        }
    }
}

/***
 * Flip card adding class 'flipped'
 * @param {HTMLElement} card card element
 * @returns {void}
 * */
function flip(card) {
    card.classList.add('flipped');
}

/***
 * Clean flipped cards and calculate movement
 * @returns {void}
 * */
function clean() {
    cardSelectedA = null;
    cardSelectedB = null;
    renderMovement();
}

/***
 * Verify if game is over
 * @returns {void}
 * */
function verifyEndGame() {
    if (score === cards.length / 2) {
        clockEnable = false;
        alert(`You win! Time: ${time} (Move: ${movement})})`);
    }
}

/***
 * Restart game and update movement element
 * @returns {void}
 * */
function restart() {
    search('.start-button').disabled = false;
    search('.reset-button').disabled = true;
    console.log(search('.grid-select').value);
    cards = genCards(cardsQuantity);
    movement = 0;
    score=0;
    time = 0;
    search('#clock').innerHTML = `Time: ${time}`;
    clockEnable = false;
    search('#board').innerHTML = '';
    render();
    renderMovement();
}

/***
 * Check for match between flipped cards
 * @returns {void}
 * */
function checkForMatch() {
    if (cardSelectedA.dataset.cardId === cardSelectedB.dataset.cardId) {
        score++;
        clean();
    } else {
        setTimeout(() => {
            cardSelectedA.classList.remove('flipped');
            cardSelectedB.classList.remove('flipped');
            clean();
        }, 1000);
    }
    verifyEndGame();
}

// Event listeners
search('.reset-button').addEventListener('click', restart);
search('.grid-select').addEventListener('change', (event) => {
    cardsQuantity = event.target.value
    restart();
});

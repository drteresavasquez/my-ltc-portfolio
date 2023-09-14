// console.log('Memory JS connected');

let cardFlipped = false;
let freezeBoard = false;
let firstCard = null;
let secondCard = null;
let pairs = 0;

const deck = `
  <div class="card">
    <div class="front">JS</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">JS</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">React</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">React</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">Python</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">Python</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">Server</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">Server</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">CSS</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">CSS</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">HTML</div>
    <div class="back"></div>
  </div>
  <div class="card">
    <div class="front">HTML</div>
    <div class="back"></div>
  </div>
  `;

const flipCard = (e) => {
  // if 2 cards are turned over prevent clicking
  if (freezeBoard) return;

  // If the user clicks the card that is already turned over, do nothing
  if (e.currentTarget === firstCard) return;

  // if there there are less than 2 cards and the user clicks a card, apply the "flip" class to the card to turn it over
  e.currentTarget.classList.add('flip');

  // Check to see if this is the first card or second card flipped. If the first, save the element.
  if (!cardFlipped) {
    cardFlipped = true;

    firstCard = e.currentTarget;
  } else {
    // If second card, also save the element...
    cardFlipped = false;
    secondCard = e.currentTarget;

    // then compare the values on each card.
    if (firstCard.innerHTML !== secondCard.innerHTML) {
      // If they do not match, freeze the board...
      freezeBoard = true;

      // and remove the flip class after 3 seconds...
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        // and reset all the variables
        cardFlipped = false;
        freezeBoard = false;
        firstCard = null;
        secondCard = null;
      }, 1500);
    } else {
      // Keep track of the pairs because when we get to 6, we know the game is over
      pairs += 1;

      // If they do match, remove the events so they do not mess up the other cards
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      // When the game is over, display a message and a button that reads: "Play Again"
      if (pairs === 6) {
        document.querySelector(
          '#game-container'
        ).innerHTML = `<h3>WINA WINA CHICKEN DINA</h3><button id="play-again" class="btn btn-success">Play Again<button>`;

        document
          .querySelector('#play-again')
          .addEventListener('click', startGame);
      }
    }
  }
};

const shuffle = (cards) => {
  for (const card of cards) {
    // get a random number between 0 -12
    let randomNum = Math.floor(Math.random() * 12);
    // add the random number as flex order on element
    card.style.order = randomNum;
  }
};

const addEventsOnCards = (cards) => {
  for (const card of cards) {
    card.addEventListener('click', flipCard);
  }
};

const startGame = () => {
  document.querySelector('#game-container').innerHTML = deck;
  const cards = document.querySelectorAll('.card'); // selecting all the elements with the class of "card" on them
  shuffle(cards);
  addEventsOnCards(cards);
};

startGame();

class Player {
  constructor(
    hand,
    score,
    isDealer,
    isWinner,
    boardSide,
    extraCardDiv,
    scoreEl
  ) {
    this.hand = hand;
    this.score = score;
    this.isDealer = isDealer;
    this.isWinner = isWinner;
    this.boardSide = boardSide;
    this.extraCardDiv = extraCardDiv;
    this.scoreEl = scoreEl;
  }
}

const bank = document.getElementById("bank");
const confirmBet = document.getElementById("confirm-bet");
const userMoney = document.getElementById("user-money");
const userBet = document.getElementById("user-bet");
const betMsgArea = document.getElementById("bet-msg-area");
let userBank = 200;
let bet = userBet.value;
userMoney.textContent = "$" + userBank;

function placeBet() {
  bet = parseInt(userBet.value, 10);
  console.log("bet " + bet);
  if (bet > userBank) {
    betMsgArea.textContent =
      "You cannot bet more than you have in the bank. Enter another bet.";
  } else {
    confirmBet.style = "border: solid 3px";
    playerMsgDiv.textContent = "Bet set at $" + userBet.value;
  }
}

const gameplay = document.getElementById("gameplay");
const playerScoreEl = document.getElementById("player-score");
const dealerScoreEl = document.getElementById("dealer-score");

const playerSide = document.getElementById("player-side");
const dealerSide = document.getElementById("dealer-side");

const playerMsgDiv = document.getElementById("player-msg-div");

const clubs2 = ["clubs", "♣", "2", 2, false];
const clubs3 = ["clubs", "♣", "3", 3, false];
const clubs4 = ["clubs", "♣", "4", 4, false];
const clubs5 = ["clubs", "♣", "5", 5, false];
const clubs6 = ["clubs", "♣", "6", 6, false];
const clubs7 = ["clubs", "♣", "7", 7, false];
const clubs8 = ["clubs", "♣", "8", 8, false];
const clubs9 = ["clubs", "♣", "9", 9, false];
const clubs10 = ["clubs", "♣", "10", 10, false];
const clubsJack = ["clubs", "♣", "J", 10, false];
const clubsQueen = ["clubs", "♣", "Q", 10, false];
const clubsKing = ["clubs", "♣", "K", 10, false];
const clubsAce = ["clubs", "♣", "A", 10, true];
const diamonds2 = ["diamonds", "♦", "2", 2, false];
const diamonds3 = ["diamonds", "♦", "3", 3, false];
const diamonds4 = ["diamonds", "♦", "4", 4, false];
const diamonds5 = ["diamonds", "♦", "5", 5, false];
const diamonds6 = ["diamonds", "♦", "6", 6, false];
const diamonds7 = ["diamonds", "♦", "7", 7, false];
const diamonds8 = ["diamonds", "♦", "8", 8, false];
const diamonds9 = ["diamonds", "♦", "9", 9, false];
const diamonds10 = ["diamonds", "♦", "10", 10, false];
const diamondsJack = ["diamonds", "♦", "J", 10, false];
const diamondsQueen = ["diamonds", "♦", "Q", 10, false];
const diamondsKing = ["diamonds", "♦", "K", 10, false];
const diamondsAce = ["diamonds", "♦", "A", 10, true];
const spades2 = ["spades", "♠", "2", 2, false];
const spades3 = ["spades", "♠", "3", 3, false];
const spades4 = ["spades", "♠", "4", 4, false];
const spades5 = ["spades", "♠", "5", 5, false];
const spades6 = ["spades", "♠", "6", 6, false];
const spades7 = ["spades", "♠", "7", 7, false];
const spades8 = ["spades", "♠", "8", 8, false];
const spades9 = ["spades", "♠", "9", 9, false];
const spades10 = ["spades", "♠", "10", 10, false];
const spadesJack = ["spades", "♠", "J", 10, false];
const spadesQueen = ["spades", "♠", "Q", 10, false];
const spadesKing = ["spades", "♠", "K", 10, false];
const spadesAce = ["spades", "♠", "A", 10, true];
const hearts2 = ["hearts", "♥", "2", 2, false];
const hearts3 = ["hearts", "♥", "3", 3, false];
const hearts4 = ["hearts", "♥", "4", 4, false];
const hearts5 = ["hearts", "♥", "5", 5, false];
const hearts6 = ["hearts", "♥", "6", 6, false];
const hearts7 = ["hearts", "♥", "7", 7, false];
const hearts8 = ["hearts", "♥", "8", 8, false];
const hearts9 = ["hearts", "♥", "9", 9, false];
const hearts10 = ["hearts", "♥", "10", 10, false];
const heartsJack = ["hearts", "♥", "J", 10, false];
const heartsQueen = ["hearts", "♥", "Q", 10, false];
const heartsKing = ["hearts", "♥", "K", 10, false];
const heartsAce = ["hearts", "♥", "A", 10, true];

const fullDeck = [
  clubs2,
  clubs3,
  clubs4,
  clubs5,
  clubs6,
  clubs7,
  clubs8,
  clubs9,
  clubs10,
  clubsJack,
  clubsQueen,
  clubsKing,
  clubsAce,
  diamonds2,
  diamonds3,
  diamonds4,
  diamonds5,
  diamonds6,
  diamonds7,
  diamonds8,
  diamonds9,
  diamonds10,
  diamondsJack,
  diamondsQueen,
  diamondsKing,
  diamondsAce,
  spades2,
  spades3,
  spades4,
  spades5,
  spades6,
  spades7,
  spades8,
  spades9,
  spades10,
  spadesJack,
  spadesQueen,
  spadesKing,
  spadesAce,
  hearts2,
  hearts3,
  hearts4,
  hearts5,
  hearts6,
  hearts7,
  hearts8,
  hearts9,
  hearts10,
  heartsJack,
  heartsQueen,
  heartsKing,
  heartsAce
]; //reset button

let usedIdx = [];

const mysteryCard = dealSecretCard();

const firstCard = document.getElementById("player-card-1");

const secondCard = document.getElementById("dealer-card-1");
console.log("d" + secondCard.innerText);

const thirdCard = document.getElementById("player-card-2");

const secretCard = document.getElementById("secret-card");

let firstRoundCards = document.getElementsByClassName("round-1");

const dealBtn = document.getElementById("deal-button");

const hitBtn = document.getElementById("hit-button");

const standBtn = document.getElementById("stand-button");

const newGameButton = document.getElementById("new-game-button");

const playerExtraCards = document.getElementById("player-extra-cards");
const dealerExtraCards = document.getElementById("dealer-extra-cards");

const dealerScore = document.getElementById("dealer-score");

const playerScore = document.getElementById("player-score");
const player1 = new Player(
  [],
  0,
  false,
  false,
  playerSide,
  playerExtraCards,
  playerScoreEl
);
const dealer = new Player(
  [],
  0,
  true,
  false,
  dealerSide,
  dealerExtraCards,
  dealerScoreEl
);

function isRed(card) {
  if (card[0] === "diamonds" || card[0] === "hearts") {
    return true;
  } else {
    return false;
  }
}

function isAce(card) {
  return card[4];
}

function generateIdx() {
  let idx = Math.floor(Math.random() * 52);
  if (usedIdx.includes(idx)) {
    idx += 1;
  }
  usedIdx.push(idx);
  return idx;
}

function dealSecretCard() {
  let idx = generateIdx();
  let faceDownCard = fullDeck[idx];
  return faceDownCard;
}
function revealSecretCard() {
  if (isRed(mysteryCard)) {
    secretCard.style = "color:red";
  }
  secretCard.textContent = mysteryCard[1] + mysteryCard[2];
}

function dealCard(player, deck, destination) {
  let idx = generateIdx();
  let newCard = deck[idx];
  player.hand.push(newCard);
  calculateScore(player);
  console.log(
    "b " + player.isDealer + " " + player.hand + " , " + player.score
  );
  displayScore(player);
  if (isRed(newCard)) {
    destination.style = "color:red";
  }
  destination.textContent = newCard[1] + newCard[2];
}

function dealFirstRound() {
  dealCard(player1, fullDeck, firstCard);
  dealCard(dealer, fullDeck, secondCard);
  dealCard(player1, fullDeck, thirdCard);

  firstCard.textContent = player1.hand[0][1] + player1.hand[0][2];
  secondCard.textContent = dealer.hand[0][1] + dealer.hand[0][2];
  thirdCard.textContent = player1.hand[1][1] + player1.hand[1][2];
  secretCard.style.visibility = "visible";
  secretCard.textContent = "???";
}

function calculateScore(player) {
  player.score = 0;
  player.hand.forEach(function (e) {
    if (isAce(e) === false) {
      player.score += e[3];
    } else if (isAce(e) === true && player.score + 11 > 21) {
      player.score += 1;
    } else {
      player.score += 11;
    }
  });
}
function displayScore(player) {
  if (player.isDealer === true) {
    player.scoreEl.innerText = "Dealer's Score: " + player.score;
  } else {
    player.scoreEl.innerText = "Your Score: " + player.score;
    playerMsgDiv.innerText =
      "Click Hit to draw another card or Stand to end your turn.";
  }
}

function endRound(player, dealer) {
  let result = "";

  if (player.score > 21) {
    revealSecretCard();
    calculateScore(dealer);

    result = "BUST! Dealer wins!";
  } else if (dealer.score > 21) {
    player.isWinner = true;
    result = "BUST! You win!";
  } else if (player.score > dealer.score) {
    player.isWinner = true;
    result = "You win!";
  } else if (player.score === dealer.score) {
    result = "Push!";
  } else if (dealer.score > player.score) {
    result = "Dealer wins!";
  }

  if (player.isWinner) {
    userBank += bet;
  } else if (!(player.score === dealer.score)) {
    userBank -= bet;
  }
  playerMsgDiv.innerText = result + userBank;

  userMoney.textContent = userBank;
}

function chooseHit(player) {
  let extraCard = document.createElement("div");
  extraCard.classList.add("card");

  player.extraCardDiv.appendChild(extraCard);
  dealCard(player, fullDeck, extraCard);
  calculateScore(player);
  console.log(player.score);
  if (player.score > 21) {
    endRound(player1, dealer);
  } else if (player.score === 21) {
    chooseStand(player);
  }
}

function chooseStand() {
  dealer.hand.push(mysteryCard);
  revealSecretCard();
  while (dealer.score < 17) {
    chooseHit(dealer);
  }
  endRound(player1, dealer);
}

function newGame() {
  for (let i = 0; i < firstRoundCards.length; i++) {
    firstRoundCards[i].style.visibility = "hidden";
  }
  playerExtraCards.style.visibility = "hidden";
  dealerExtraCards.style.visibility = "hidden";
  usedIdx = [];
  player1.score = 0;
  playerScoreEl.textContent = "Your Score: 0";
  player1.hand = [];
  player1.isWinner = "";
  dealer.score = 0;
  dealerScoreEl.textContent = "Dealer's Score: 0";
  dealer.hand = [];
}

confirmBet.addEventListener("click", placeBet);
dealBtn.addEventListener("click", dealFirstRound);
hitBtn.addEventListener("click", chooseHit.bind(null, player1));
standBtn.addEventListener("click", chooseStand);
newGameButton.addEventListener("click", newGame);

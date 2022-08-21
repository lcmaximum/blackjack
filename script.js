class Player {
    constructor(hand,score,isDealer,isWinner, boardSide,extraCardDiv, scoreEl){
      this.hand = hand;
      this.score = score;
      this.isDealer = isDealer;
      this.isWinner = isWinner;
      this.boardSide = boardSide;
      this.extraCardDiv = extraCardDiv
      this.scoreEl = scoreEl
    }
  }
  
  const playerScoreEl = document.getElementById("player-score")
  const dealerScoreEl = document.getElementById("dealer-score")
  
  const playerSide = document.getElementById('player-side')
  const dealerSide = document.getElementById('dealer-side')
  
  const secretDiv = document.getElementById('secret-div')
  
  const faceUp = document.querySelectorAll("face-up")
  
  const clubs2 = ["2 of Clubs", 2]
  const clubs3 = ["3 of Clubs", 3]
  const clubs4 = ["4 of Clubs", 4]
  const clubs5 = ["5 of Clubs", 5]
  const clubs6 = ["6 of Clubs", 6]
  const clubs7 = ["7 of Clubs", 7]
  const clubs8 = ["8 of Clubs", 8]
  const clubs9 = ["9 of Clubs", 9]
  const clubs10 = ["10 of Clubs", 10]
  const clubsJack = ['Jack of Clubs', 10]
  const clubsQueen = ['Queen of Clubs', 10]
  const clubsKing = ['King of Clubs', 10]
  const clubsAce= ['Ace of Clubs', 11, true]
  const diamonds2 = ["2 of Diamonds", 2]
  const diamonds3 = ["3 of Diamonds", 3]
  const diamonds4 = ["4 of Diamonds", 4]
  const diamonds5 = ["5 of Diamonds", 5]
  const diamonds6 = ["6 of Diamonds", 6]
  const diamonds7 = ["7 of Diamonds", 7]
  const diamonds8 = ["8 of Diamonds", 8]
  const diamonds9 = ["9 of Diamonds", 9]
  const diamonds10 = ["10 of Diamonds", 10]
  const diamondsJack = ['Jack of Diamonds', 10]
  const diamondsQueen = ['Queen of Diamonds', 10]
  const diamondsKing = ['King of Diamonds', 10]
  const diamondsAce= ['Ace of Diamonds', 11, true]
  const spades2 = ["2 of Spades", 2]
  const spades3 = ["3 of Spades", 3]
  const spades4 = ["4 of Spades", 4]
  const spades5 = ["5 of Spades", 5]
  const spades6 = ["6 of Spades", 6]
  const spades7 = ["7 of Spades", 7]
  const spades8 = ["8 of Spades", 8]
  const spades9 = ["9 of Spades", 9]
  const spades10 = ["10 of Spades", 10]
  const spadesJack = ['Jack of Spades', 10]
  const spadesQueen = ['Queen of Spades', 10]
  const spadesKing = ['King of Spades', 10]
  const spadesAce= ['Ace of Spades', 11, true]
  const hearts2 = ["2 of Hearts", 2]
  const hearts3 = ["3 of Hearts", 3]
  const hearts4 = ["4 of Hearts", 4]
  const hearts5 = ["5 of Hearts", 5]
  const hearts6 = ["6 of Hearts", 6]
  const hearts7 = ["7 of Hearts", 7]
  const hearts8 = ["8 of Hearts", 8]
  const hearts9 = ["9 of Hearts", 9]
  const hearts10 = ["10 of Hearts", 10]
  const heartsJack = ['Jack of Hearts', 10]
  const heartsQueen = ['Queen of Hearts', 10]
  const heartsKing = ['King of Hearts', 10]
  const heartsAce= ['Ace of Hearts', true]
  
  const fullDeck = [clubs2, clubs3, clubs4, clubs5, clubs6, clubs7, clubs8, clubs9, clubs10, clubsJack, clubsQueen, clubsKing, clubsAce, diamonds2, diamonds3, diamonds4, diamonds5, diamonds6, diamonds7, diamonds8, diamonds9, diamonds10, diamondsJack, diamondsQueen, diamondsKing, diamondsAce, spades2, spades3, spades4, spades5, spades6, spades7, spades8, spades9, spades10, spadesJack, spadesQueen, spadesKing, spadesAce, hearts2, hearts3, hearts4, hearts5, hearts6, hearts7, hearts8, hearts9, hearts10, heartsJack, heartsQueen, heartsKing, heartsAce]//reset button
  
  usedIdx =[]
  
  const mysteryCard = dealSecretCard()
  
  
  const firstCard = document.getElementById("player-card-1");
  
  const secondCard = document.getElementById("dealer-card-1");
  console.log('d' + secondCard.innerText)
  
  const thirdCard = document.getElementById("player-card-2");
  
  const secretCard = document.getElementById("secret-card")
  
  const dealBtn = document.getElementById("deal-button");
  
  const hitBtn = document.getElementById("hit-button");
  
  const standBtn = document.getElementById("stand-button");
  
  const newGameButton = document.getElementById("new-game-button")
  
  const extraCards = document.querySelectorAll('extra-cards');
  const playerExtraCards =document.getElementById('player-extra-cards');
  const dealerExtraCards =document.getElementById ('dealer-extra-cards')
  
  const dealerScore = document.getElementById('dealer-score');
  
  const playerScore = document.getElementById('player-score')
  
  player1 = new Player([],0, false, false,playerSide, playerExtraCards, playerScoreEl);
  dealer = new Player([],0, true, false, dealerSide, dealerExtraCards, dealerScoreEl)
  
  function isAce(card) {
    if (card.length == 3) {
      return true
    }else {
      return false
    }
  }
  
  function generateIdx() {
    let idx = Math.floor(Math.random() * 52)
      if (usedIdx.includes(idx)) {
      idx += 1
    }
    usedIdx.push(idx)
    return idx
  }
  
  function dealSecretCard() {
    let idx = generateIdx()
    let faceDownCard = fullDeck[idx]
    return faceDownCard
  }
  function revealSecretCard() {
    
    secretCard.innerText = mysteryCard[0]
    
  }
  
  function dealCard(player,deck, destination) {
  
    let idx = generateIdx()
    let newCard = deck[idx];
    player.hand.push(newCard)
    calculateScore(player)
    console.log('b '+player.isDealer +" "+player.hand+' , '+player.score)
   displayScore(player)
    destination.innerText = newCard[0]
  
  }
  
  function dealFirstRound() {
    dealBtn.style.visibility = 'hidden';
    newGameButton.style.visibility = "visible";
    hitBtn.style.visibility = "visible";
    standBtn.style.visibility = "visible";
    
    dealCard(player1, fullDeck, firstCard)
    dealCard(dealer, fullDeck, secondCard)
    dealCard(player1, fullDeck, thirdCard)
    
    firstCard.innerText =player1.hand[0][0]
    secondCard.innerText = dealer.hand[0][0]
    thirdCard.innerText = player1.hand[1][0]
    secretCard.innerText = "who knows?";
       
  }
  
  function calculateScore(player) {
    player.score = 0;
    player.hand.forEach(function(e){
      if (isAce(e) === false) {
      player.score +=e[1]} else if
         (isAce(e) === true && player.score + 11 >21) {
          player.score +=1} else {
            player.score +=11
          }
        
      })
        
    }
  function displayScore(player) {
    if (player.isDealer === true) {
      player.scoreEl.innerText = "Dealer's Score: " + player.score
    } else {
      player.scoreEl.innerText = "Your Score: " + player.score
      secretDiv.innerText = "Click Hit to draw another card or Stand to end your turn."
    }  
    
  }
  
  function endRound(player, dealer) {
    let result = ''
    if (player.score > 21) {
      revealSecretCard();
      calculateScore(dealer);
      result = "BUST! Dealer wins!"
    } else if
      (dealer.score > 21) {
      result = "BUST! You win!"
  } else if
    (player.score > dealer.score) {
      result = "You win!"
    } else if
      (player.score === dealer.score){
      result = "Push!"} else if (dealer.score > player.score) {
       result = "Dealer wins!" 
      }
        
      
    console.log(result)
    secretDiv.innerText = result
    hitBtn.style.visibility = "hidden"
    standBtn.style.visibility = "hidden"
  }
  
  
  function chooseHit(player) {
    extraCard = document.createElement('div')
    extraCard.classList.add('card')
    
    player.extraCardDiv.appendChild(extraCard)
    dealCard(player,fullDeck,extraCard)
    calculateScore(player)
    console.log(player.score)
    if (player.score > 21) {
      endRound(player1,dealer)
    } else if 
      (player.score === 21) {
        chooseStand(player)
      }
    }
    
  
  function chooseStand() {
    dealer.hand.push(mysteryCard)
    revealSecretCard()
    while (dealer.score< 17) {
      chooseHit(dealer)
    } 
      endRound(player1, dealer)
    }
  
  
  
  function newGame() {
    location.reload()
  }
  
  dealBtn.addEventListener('click', dealFirstRound);
  hitBtn.addEventListener('click', chooseHit.bind(null,player1))
  standBtn.addEventListener('click', chooseStand)
  newGameButton.addEventListener('click', newGame)
$(document).ready(function(){
  shuffle(cards);
  startGame()
});


   /*
    * Create a list that holds all of your cards
    */
let card = document.getElementsByClassName('card');
let cards = [...card];
const cardShuffle = shuffle(cards);
let openedCards = [];
let matchedCards = 0;/*this is the number of matched cards (16)*/
const matchedCard = document.getElementsByClassName('match');
let matchArray = [];
/*deck of cards*/
const deck = document.querySelector('.deck');

/*variables for moves*/
let moves = 0;
const movesNumber = document.getElementById('moves-number');
//stars variables
const stars = document.getElementsByClassName('stars');
const starsArray = document.querySelectorAll('.stars li');
let starNumber = 0;
/*timer*/
let timer = document.querySelector('.timer');
let timerMin = document.getElementById('timer-min');
let timerSec= document.getElementById('timer-sec');
let timeTrigger = 0;
let seconds = 0;
let minutes = 0;
let t;

/*restart button*/
let restart = document.querySelector('.restart');

let modal = document.querySelector('.modal-popup');
let playAgain = document.querySelector('.play-again');
let closeWindow = document.querySelector('.close');
   /*
    * Display the cards on the page
    *   - shuffle the list of cards using the provided "shuffle" method below
    *   - loop through each card and create its HTML
    *   - add each card's HTML to the page
    */


function startGame(cards){
  $('.deck').on('click', '.card', clickedCard);
  for (let i = 0; i < cardShuffle.length; i++) {
    cardShuffle[i].classList.remove('open','show', 'match', 'disabled');
    deck.appendChild(cardShuffle[i]);
    }
/*reset cardarray to 0*/
  openedCards =[];
  matchedCards = 0;
  console.log('matched cards: '+matchedCards+';');
  matchArray = [];

/*reset moves counter*/
  moves = 0;
  movesNumber.innerHTML = moves;
/*reset timer */
  timer = document.querySelector('.timer');
  minutes = 0;
  seconds = 0;
  timerMin.innerHTML = minutes;
  timerSec.innerHTML = '0' + seconds;
  timeTrigger = 0;
  clearInterval(t);
/*stars*/
  starArray = [];
  starNumber = 0;


  };


   // Shuffle function from http://stackoverflow.com/a/2450976
   function shuffle(array) {
       var currentIndex = array.length, temporaryValue, randomIndex;

       while (currentIndex !== 0) {
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex -= 1;
           temporaryValue = array[currentIndex];
           array[currentIndex] = array[randomIndex];
           array[randomIndex] = temporaryValue;
       }

       return array;
}


/* The handler "knows" that any .card is e.target and this */
       // toggleClass the .open and .show classes
/* set up the event listener for a card. If a card is clicked:
        *  - display the card's symbol (put this functionality in another function that you call from this one)
*/
function clickedCard(event) {
  /*display card on click*/
$(this).toggleClass('open show disabled');

timeTrigger++;
if (timeTrigger===1){
  startTimer();
}
if (event.target.classList.contains('card') && openedCards.length<2){
  /*push card to open cards array*/
  openedCards.push(this);
}
/*add to moves and push to matched cards*/
if (openedCards.length===2){
  addMoves(); /*need to declare moves function*/
/*add function for checking matchedCards*/
  if (openedCards[0].innerHTML===openedCards[1].innerHTML){
  matchedCards++;
  //add matched cards to match array
  match();
  /*add function for stop timer*/
  stopTimer();
  } else {
    /*add function for noMatch*/
      noMatch();
    };

  }
};


function match(){
  openedCards[0].classList.add('match', 'disabled');
  openedCards[1].classList.add('match', 'disabled');
  openedCards[0].classList.remove('open', 'show');
  openedCards[1].classList.remove('open', 'show');
  matchArray.push(openedCards[0]);
  matchArray.push(openedCards[1]);
  openedCards =[];

};

function noMatch(){
  openedCards[0].classList.add('unmatched', 'disabled');
  openedCards[1].classList.add('unmatched','disabled');
  //timeout function for reverting card
      setTimeout(function revertCard(){
        removeOpenedClass();
        //add eventlistener clickedCard back in after timer
        for (let i=0; i<matchArray.length; i++ ){
          matchArray[i].classList.add('disabled');
        }
      }, 1000);
}

function removeOpenedClass(){
  openedCards[0].classList.remove('open', 'show','disabled', 'unmatched');
  openedCards[1].classList.remove('open', 'show','disabled', 'unmatched');
  openedCards = [];
}

function addMoves (){
  moves++;
  movesNumber.innerHTML = moves;
  starCount()
}
/*timer function*/
function startTimer(){
  t = setInterval(function(){
        seconds++;
        if (seconds===60) {
          seconds =0;
          minutes++;
          if (minutes ===60){
            seconds = 0;
            minutes = 0;
          }
        }
        /*add leading 0 to seconds timer*/
        timerMin.innerHTML = minutes;
        if (seconds<10) {
          timerSec.innerHTML = '0' + seconds;
        } else {
          timerSec.innerHTML = seconds;
        };
      }, 1000);
    }

/*    *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    *  - if the list already has another card, check to see if the two cards match
    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
    *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
    *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
    *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
    */
//stars functionality
function starCount(){
  if (moves <10){
    starNumber=3;

  };
  if (moves >10 && moves <16) {
    starNumber = 2;
    starsArray.length===2;
    document.querySelector('.star1').innerHTML='<i class="fa fa-star-o"></i>';
  };
  if (moves >=16 && moves <22){
    starNumber = 1;
    starsArray.length===1;
    document.querySelector('.star1').innerHTML='<i class="fa fa-star-o"></i>';
    document.querySelector('.star2').innerHTML='<i class="fa fa-star-o"></i>';
  }
}

function stopTimer(){
  if (matchedCards===8){
    clearInterval(t);
    endGame();
  }
}

function endGame(){
  //popup upon delayed time
  setTimeout(function modalPopup(){
    modal.style.display = "block";
  },1000);
  document.getElementsByClassName('final-moves')[0].innerHTML= moves;
  document.getElementsByClassName('final-stars')[0].innerHTML = starNumber;
  document.getElementsByClassName('time-taken')[0].innerHTML = timer.innerHTML;


  };

closeWindow.addEventListener("click",close);
  function close(){
  modal.style.display = "none";
  cardShuffle;
  startGame();
}

playAgain.onclick = function(){
    modal.style.display="none";
    cardShuffle;
    startGame();
  }

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    shuffle(cards);
    startGame();
  }
}

/*restart game*/
restart.onclick = function (){
  shuffle(cards);
  startGame();
}

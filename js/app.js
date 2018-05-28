$(document).ready(function(){
  startGame()
});


   /*
    * Create a list that holds all of your cards
    */
let card = document.getElementsByClassName('card');
let cards = [...card];
let cardShuffle = shuffle(cards);
let openedCards = []
let matchedCards = []
let matchCount = 0;
/*deck of cards*/
let deck = document.querySelector('.deck');

/*variables for moves*/
let moves = 0;
let movesNumber = document.getElementsByClassName('.moves');

let stars = document.getElementsByClassName('stars');
let starsArray = document.querySelectorAll('.stars li');
/*timer*/
let timer = document.querySelector('.timer');
let timerMin = document.getElementById('timer-min');
let timerSec= document.getElementById('timer-sec');
let timeTrigger = 0;
let seconds = 0;
let minutes = 0;
let t;


   /*
    * Display the cards on the page
    *   - shuffle the list of cards using the provided "shuffle" method below
    *   - loop through each card and create its HTML
    *   - add each card's HTML to the page
    */


function startGame(){
  for (let i = 0; i < cardShuffle.length; i++) {
    cardShuffle[i].classList.remove('open','show', 'match');
    deck.appendChild(cardShuffle[i]);

/*reset cardarray to 0*/

openedCards =[];
matchedCards = 0;
matchCount = 0;
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


  }
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

/*register deck to click event, second parameter card */
$('.deck').on('click', '.card', clickedCard);
/* The handler "knows" that any .card is e.target and this */
       // toggleClass the .open and .show classes
/* set up the event listener for a card. If a card is clicked:
        *  - display the card's symbol (put this functionality in another function that you call from this one)
*/
function clickedCard(event) {
  /*display card on click*/
$(this).toggleClass('open show');
/*push card to array*/
openedCards.push(this);

timeTrigger++;
if (timeTrigger===1){
  startTimer();
}
/*add to moves and push to matched cards*/
if (openedCards.length===2){
  addMoves(); /*need to declare moves function*/

}
};

function addMoves (){
  moves++;
  movesNumber.innerHTML = moves;

}

/*timer function*/
function startTimer(){
  t = setInterval(function(){
        seconds++;
        if (seconds>=60) {
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
        } 1000;
      });
    }


/*    *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    *  - if the list already has another card, check to see if the two cards match
    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
    *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
    *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
    *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
    */

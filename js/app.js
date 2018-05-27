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
let closedCards = []

/*deck of cards*/
let deck = document.querySelector('.deck');

/*variables for moves*/
let moves = 0
let movesCount = document.getElementsByClassName('moves');

let stars = document.getElementsByClassName('stars');
let starsArray = document.querySelectorAll('.stars li');
/*timer*/
let timer = document.querySelector('.timer');
let seconds = 0;
let minutes = 0;
let hours = 0;

/* initialize your variables outside the function var count = 0; var clearTime;
var seconds = 0, minutes = 0, hours = 0; var clearState; var secs, mins, gethours ;
function startWatch( ) { /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */
if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; }
/* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */
mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
/* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */ /*if ( minutes === 60 ) { minutes = 0; hours = hours + 1; }
/* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */

gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds );
 // display the stopwatch var x = document .getElementById("timer"); x.innerHTML = 'Time: ' + gethours + mins + secs;
 /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */
  seconds++; /* call the setTimeout( ) to keep the stop watch alive ! */
  clearTime = setTimeout( "startWatch( )", 1000 ); }
   // startWatch( ) //create a function to start the stop watch

*/
 function startTime( ) { /* check if seconds, minutes, and hours are equal to zero and start the stop watch */
 if ( seconds === 0 && minutes === 0 && hours === 0 ) { /* hide the fulltime when the stop watch is running */ var fulltime = document.getElementById( "fulltime" ); fulltime.style.display = "none"; /* hide the start button if the stop watch is running */ this.style.display = "none"; /* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */ startWatch( ); } // if () } // startTime() /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */ window.addEventListener( 'load', function ( ) { var start = document .getElementById("start"); start.addEventListener( 'click', startTime ); }); // startwatch.js end
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
$('.deck').on('click', '.card', handler);
/* The handler "knows" that any .card is e.target and this */
       // toggleClass the .open and .show classes
/* set up the event listener for a card. If a card is clicked:
        *  - display the card's symbol (put this functionality in another function that you call from this one)
*/
function handler(event) {
$(this).toggleClass('open show');
};

/*    *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    *  - if the list already has another card, check to see if the two cards match
    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
    *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
    *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
    *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
    */

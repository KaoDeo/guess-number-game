//grabbing all the data I need to work on

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const overlay = document.querySelector('#infoImg')

const guessSubmit = document.querySelector('.guessSubmit'); //btn
const guessField = document.querySelector('.guessField'); // text field

let guessCount = 1; //players first go
let resetButton; //to reset the game
guessField.focus(); //this method to automatically put the text cursor into the <input> text field as soon as the page loads, meaning that the user can start typing their first guess right away, without having to click the form field first
// Variables that don't contain references to form elements won't have focus() available to them. e.g guesses and guessCount consts



//functions

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) { //players' first go
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
  
    guessCount++; //player uses up the turn so we increment it by 1
    guessField.value = ''; //empty the value out of the form text and focus it again, ready for the next guess to be entered
    guessField.focus();
  }
  

  // when btn is pressed, we need to call checkGuesses() func
  // for theat use event

  guessSubmit.addEventListener('click', checkGuess);




  //finishing the game

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    
    //generate new btn
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.border = 'none'
    resetButton.style.backgroundColor = '#C389F5'
    resetButton.style.color = 'white'

    document.body.append(resetButton);
    


    //when btn is clicked, the game resets by resetGame()
    resetButton.addEventListener('click', resetGame);
  }


  //reset game and start it again

  function resetGame() {
    guessCount = 1;
  
    //empty all the texts out of the info paragraps
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = ''; //loop through all the paragraphs and set them to an empty string
      //Note that even though resetParas is a constant, we can change its internal properties like textContent.
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  
const overLay = document.querySelector('#overlay');
document.querySelector('#show-modal-btn').addEventListener('click', () => {
  overLay.style.display = 'block'
})
  

document.querySelector('.close-modal-btn').addEventListener('click', () => {
  overLay.style.display = 'none'
}) 

// import functions and grab DOM elements
const ballOne = document.getElementById('ball-1');
const ballTwo = document.getElementById('ball-2');
const ballThree = document.getElementById('ball-3');


const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const messageEl = document.getElementById('trash-talk');
const totalEl = document.getElementById('total');

// let state
let correctGuesses = 0;
let wrongGuesses = 0;

// set event listeners
buttonOne.addEventListener('click', ()=> {
    const whichShell = Math.ceil(Math.random() * 3);
    handleShell(1, whichShell);
});

buttonTwo.addEventListener('click', ()=> {
    const whichShell = Math.ceil(Math.random() * 3);
    handleShell(2, whichShell);
});

buttonThree.addEventListener('click', ()=> {
    const whichShell = Math.ceil(Math.random() * 3);
    handleShell(3, whichShell);
});

  // get user input
function handleShell(guess, correctShell) {
	//reset ball state
    ballOne.classList.remove('reveal');
    ballTwo.classList.remove('reveal');
    ballThree.classList.remove('reveal');
	//check if guessed shell is correct
    if (guess === correctShell) {
		// use user input to update state 
        correctGuesses++;
		// update DOM to reflect the new state
        ballOne.classList.add('reveal');
        winsEl.textContent = correctGuesses;

    } else {
		// use user input to update state 
        wrongGuesses++;
		// update DOM to reflect the new state
        lossesEl.textContent = wrongGuesses;

    }
	//increment guesses
    totalEl.textContent = correctGuesses + wrongGuesses;
}

// to-do:
// -hide ball
// -show ball on guess
// -change trash-talk to reflect win/loss








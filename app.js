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
function handleShell(num, correctShell) {
	//reset ball state

	//increment guesses
	totalEl.textConent = correctGuesses + wrongGuesses;

	//check if guessed shell is correct
	if (num === correctShell) {
		correctGuesses++;
		console.log(correctGuesses);
	} else {
		wrongGuesses++;
		console.log(wrongGuesses);
	}
}
  // use user input to update state 
  // update DOM to reflect the new state









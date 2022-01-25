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
    const correctShell = Math.ceil(Math.random() * 3);
	handleShell(1, correctShell);
});

buttonTwo.addEventListener('click', ()=> {
    const correctShell = Math.ceil(Math.random() * 3);
	handleShell(2, correctShell);
});

buttonThree.addEventListener('click', ()=> {
    const correctShell = Math.ceil(Math.random() * 3);
	handleShell(3, correctShell);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state









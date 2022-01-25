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

const container = document.getElementById('shells-container');

// let state
let correctGuesses = 0;
let wrongGuesses = 0;

// set event listeners
buttonOne.addEventListener('click', ()=> {
    const whichShell = Math.ceil(Math.random() * 3);
    handleShell(1, whichShell);
    container.style.setProperty('margin-top', '0px');
});

buttonTwo.addEventListener('click', ()=> {
    const whichShell = Math.ceil(Math.random() * 3);
    handleShell(2, whichShell);
    container.style.setProperty('margin-top', '0px');
});

buttonThree.addEventListener('click', ()=> {
    const whichShell = Math.ceil(Math.random() * 3);
    handleShell(3, whichShell);
    container.style.setProperty('margin-top', '0px');
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
        winsEl.textContent = correctGuesses;
        messageEl.textContent = 'You got lucky.';
    } else {
		// use user input to update state 
        wrongGuesses++;
		// update DOM to reflect the new state
        lossesEl.textContent = wrongGuesses;
        messageEl.textContent = 'Nice try, sucker!';
    }

    // update DOM to reflect the new state
    if (correctShell === 1) {
        ballOne.classList.add('reveal');           
    } else if (correctShell === 2) {
        ballTwo.classList.add('reveal');
    } else {
        ballThree.classList.add('reveal');
    }

    // change response based on success
    if ((correctGuesses - 2) > wrongGuesses) {
        messageEl.textContent = "Stop, kid! I can't take much more!";
    } else if ((wrongGuesses - 2) > correctGuesses) {
        messageEl.textContent = "Don't quit your day job! Wanna try again? I could always use more money.";
    }
}









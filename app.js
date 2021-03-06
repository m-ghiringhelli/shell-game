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

//to keep container from shifting down on ball load
const container = document.getElementById('shells-container');

// let state
let correctGuesses = 0;
let wrongGuesses = 0;
let correct = false;

// set event listeners
buttonOne.addEventListener('click', ()=> {
    isCorrect(1, randomOneTwoThree());
    adjustMargin();
});

buttonTwo.addEventListener('click', ()=> {
    isCorrect(2, randomOneTwoThree());
    adjustMargin();
});

buttonThree.addEventListener('click', ()=> {
    isCorrect(3, randomOneTwoThree());
    adjustMargin();
});

function reset() {
    ballOne.classList.remove('reveal');
    ballTwo.classList.remove('reveal');
    ballThree.classList.remove('reveal');
}

function randomOneTwoThree() {
    return Math.ceil(Math.random() * 3);
}

function adjustMargin() {
    container.style.setProperty('margin-top', '0px');
}

function isCorrect(guess, correctShell) {
    //check if guessed shell is correct
    if (guess === correctShell) {
        correct = true;
        correctGuesses++;
    } else {
        correct = false;
        wrongGuesses++;
    }
    displayResults(correct, correctShell);
}

function showBall(correctShell) {
    if (correctShell === 1) {
        ballOne.classList.add('reveal');           
    } else if (correctShell === 2) {
        ballTwo.classList.add('reveal');
    } else {
        ballThree.classList.add('reveal');
    }
}

function displayResults(correct, correctShell) {
    //reset ball state
    reset();

    if (correct) {
        // update DOM to reflect the new state
        winsEl.textContent = correctGuesses;
        messageEl.textContent = 'You got lucky.';
    } else {
        // update DOM to reflect the new state
        lossesEl.textContent = wrongGuesses;
        messageEl.textContent = 'Nice try, sucker!';
    }

    showBall(correctShell);

    totalEl.textContent = correctGuesses + wrongGuesses;
        
    // change response based on success
    if ((correctGuesses - 2) > wrongGuesses) {
        messageEl.textContent = "Stop, kid! I can't take much more!";
    } else if ((wrongGuesses - 2) > correctGuesses) {
        messageEl.textContent = "Don't quit your day job! Wanna try again? I could always use more money.";
    }
    if ((wrongGuesses > 20) && (correctGuesses < 10)) {
        messageEl.textContent = "Okay, I think you've had enough.";
    }
}
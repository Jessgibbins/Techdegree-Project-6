// Declare Variables 

const qwerty = document.getElementById('qwerty');
const phrase = document.querySelectorAll('#phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.querySelector(".btn__reset");

// Phrases Array 

const phrases = ['A Piece of Cake', 'Burst Your Bubble', 'When Pigs Fly', 'Once in a Blue Moon', 'Just Do It'];

// Listen for the start game button to be pressed

resetBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});


// Return a random phrase from the array

const getRandomPhraseAsArray = arr => {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('');
}; 

const phraseArray = getRandomPhraseAsArray(phrases);

// Add the letters of a string to the display

const addPhraseToDisplay = arr => {

    // Create li for each letter and space 

    for (i = 0; i < arr.length; i += 1) {
        const string = arr[i];
        const newLI = document.createElement('li');
        newLI.innerHTML = string;
        document.querySelector('#phrase ul').appendChild(newLI);

        // Give each li a new class 

        if (newLI.innerHTML === ' ') {
            newLI.className = 'space';
        } else {
            newLI.className = 'letter';
        }
    }
};

addPhraseToDisplay(phraseArray); 

// check if a letter is in the phrase


const checkLetter = button => {

    const letters = document.querySelectorAll('.letter');
    let matched = null;

    for (i = 0; i < letters.length; i += 1) {
        if (letters[i].textContent.toLowerCase() === button) {
            letters[i].className += ' show';
            matched = button;
        }
    }
    return matched;
};



// Listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', event => {

    if (event.target.tagName === "BUTTON") {
        event.target.className += ' chosen';
        event.target.disabled = true;

        // Lose heart if letter clicked is incorrect 

        const letterFound = checkLetter(event.target.textContent);

        if(letterFound === null){
            missed++;
            const img = document.querySelectorAll("img");
            img[missed - 1].src="images/lostHeart.png";
           
        }
    }

    checkWin();
});

// Check if the game has been won or lost
 
const checkWin = () => {

    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const heading = document.querySelector('.title');

    // You won overlay

    if (letters.length === show.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        heading.textContent = 'You Won!';
        startBtn.textContent = 'Play Again';

        // You lost overlay

    } else if (missed > 4) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        heading.textContent = 'You Lost';
        startBtn.textContent = 'Play Again';
};
}

// Reload page when play agian button is clicked

document.addEventListener("click", e => {
    if (e.target.textContent === 'Play Again') {
      location.reload(true);
    }
  });
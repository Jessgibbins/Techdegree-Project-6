// Declare Variables 

const qwerty = document.getElementById('qwerty');
const phrase = document.querySelectorAll('#phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('startBtn');

// Phrases Array 

const phrases = ['A Piece of Cake', 'Burst Your Bubble', 'When Pigs Fly', 'Once in a Blue Moon', 'Don\'t Judge a Book by its Cover'];

// Listen for the start game button to be pressed

startBtn.onclick = function() {
    overlay.style.display = "none";
}

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
            matched = true;
        } 
    
     return matched;
}
};

// Listen for the onscreen keyboard to be clicked

qwerty.addEventListener('click', event => {

    if (event.target.tagName === "BUTTON") {
        event.target.className += ' chosen';
        event.target.disabled = true;
    
        const matchedLetter = checkLetter(event.target.textContent.toLowerCase());
    } 


});

// Check if the game has been won or lost
 
const checkWin = () => {
    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
}

const letters = document.querySelectorAll('.letter');
console.log(letters.length);

const show = document.querySelectorAll(' .show');
console.log(show.length);
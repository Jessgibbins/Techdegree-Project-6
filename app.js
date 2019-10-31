// Declare Variables 

const qwerty = document.querySelectorAll('#qwerty');
const phrase = document.querySelectorAll('#phrase');
const missed = 0;
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('startBtn');

// Phrases Array 

const phrases = ['A Piece of Cake', 'Burst Your Bubble', 'When Pigs Fly', 'Once in a Blue Moon', 'Don\'t Judge a Book by its Cover'];

// Hide Overlay on Start


startBtn.onclick = function() {
    document.getElementById("overlay").style.display = "none";
}


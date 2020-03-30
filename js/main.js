/*
 * Ex-1
*/

// References
var userIds = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
var inputEmail = prompt('Inserisci il tuo indirizzo email');
var userFound = false;

// User matching
for (var i = 0; i < userIds.length; i++) {
    
    if (inputEmail == userIds[i]) {
        userFound = true;
    }
}

// Feedback
if (userFound == true) {
    alert('Accesso effettuato');
} else {
    alert('Errore di autenticazione: utente non trovato');
}

/*
 * Ex-2
*/

// References
var rollBtn = document.getElementById('rollBtn');
var youWin = 'You win!';
var youLose = 'You lose';
var even = 'Even, let\'s try again';
var playerScore = 0;
var cpuScore = 0;
var showResults = document.getElementById('results');

// Roll button functionality
rollBtn.addEventListener ( 'click', 
    function () {
        showResults.className = 'show';

        // Player roll
        var playerRoll = Math.floor((Math.random() * 6) + 1);
        console.log(playerRoll);
            
        // CPU roll
        var cpuRoll = Math.floor((Math.random() * 6) + 1);
        console.log(cpuRoll);

        // Scores
        document.getElementById('playerRoll').innerHTML = playerRoll;
        document.getElementById('cpuRoll').innerHTML = cpuRoll;

        // Score matching
        if ( playerRoll < cpuRoll) {
            console.log('Hai perso');
            document.getElementById('result').innerHTML = youLose;
            ++cpuScore;
        } else if ( playerRoll > cpuRoll ) {
            console.log('Hai vinto');
            document.getElementById('result').innerHTML = youWin;
            ++playerScore;
        } else {
            console.log('Parità');
            document.getElementById('result').innerHTML = even;
        }
        
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('cpuScore').innerHTML = cpuScore;
    }
);


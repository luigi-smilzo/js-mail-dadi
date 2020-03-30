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


rollBtn.addEventListener ( 'click', 
    function () {
        // Player roll
        var playerRoll = Math.floor((Math.random() * 6) + 1);
        console.log(playerRoll);

        // CPU roll
        var cpuRoll = Math.floor((Math.random() * 6) + 1);
        console.log(cpuRoll);

        // Scores matching
        if ( playerRoll < cpuRoll) {
            console.log('Hai perso');
        } else if ( playerRoll > cpuRoll ) {
            console.log('Hai vinto');
        } else {
            console.log('Parità');
        } 
    }
);
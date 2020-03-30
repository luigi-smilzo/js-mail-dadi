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
    console.log('Ok');
} else {
    console.log('Fail');
}
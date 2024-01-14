// Ciclo While
// snack 2
// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

function random(min, max) {
    min = 1
    max = 100
    return Math.floor(Math.random() * (100) + min);
}
let numCasuale=random()
// console.log(numCasuale)

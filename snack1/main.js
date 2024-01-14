// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

let arrayNum=[ ]
const somma=50
let sommaNumeri=0
while (sommaNumeri<somma){
    let num=prompt("inserisci un numero")
    num=parseInt(num)
    sommaNumeri+=num
    arrayNum.push(num)
    
}
console.log(sommaNumeri)
console.log(arrayNum)
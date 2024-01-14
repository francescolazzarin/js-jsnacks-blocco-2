// Ciclo For
// snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

let arrayPiccolo=[ 1,2,3,4,5,6,7,]
let arrayGrande=[ 8,9,10,11,12,13,14,15,16,17,18,19,20]


function casuale(min, max) {
    min = 0
    max = 10
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
for ( ; arrayPiccolo.length !== arrayGrande.length ; ){
    let num=casuale(0,10)
    arrayPiccolo.push(num)
}
console.log(arrayPiccolo)
console.log(arrayGrande)
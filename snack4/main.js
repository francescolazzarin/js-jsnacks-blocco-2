// Ciclo For
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let num=0

for(let i=0 ; i<=10; i++){
    let num=prompt("inserisci un numero")
    num=parseInt(num)
    if (num % 2 == 0 ){
        document.writeln(num)
    }else{
        num++
        document.writeln(num)
    }
} 
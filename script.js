//1 Crea una funzione che controlla due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.

function controlloNumeri(number1 ,number2) {
    

    if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
        return true
    } else {
        return false
    }

}

console.log(controlloNumeri(25,50))




//2 Crea una funzione che rimuove il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function togliCarattere(parola, posizione) {

    var newParola =  parola.split("")
    

    newParola.splice(posizione,1)

    return newParola.join("")
}

console.log(togliCarattere("casa",0)

)



//3 Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".

function controlloNumeri2(number1,number2) {
    
    if (number1 >= 40 && number1 <= 60 || number1 >= 70 && number1 <= 100 || number2 >= 40 && number2 <= 60 || number2 >= 70 && number2 <= 100) {
       return true
    } else {
        return false
    }
}

console.log(controlloNumeri2(35,65))


//4 Crea una funzione che accetti un nome di città come paramentro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false".

function nomeCitta(nomeCitta) {

    if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
        return true
    } else {
        return false
    }
}

console.log(nomeCitta("New York"))

//5 Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

function sommaArray(arr) {

    var somma = 0

    for (let i = 0; i < arr.length; i++) {
         somma += arr[i]
        }
    return somma
}
 console.log(sommaArray([77,44,6,10,44]))


//6 Crea una funzione che controlli che un array non contenga i numeri 1 o 3. Se non li contiene, ritorna "true", altrimenti ritorna "false".

function controlloArray(arr){

    if (arr.includes(1 && 3)){
        return false
    }else{
        return true
    }
  }
  console.log(controlloArray([4,2,5]))

//7 Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° -> ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi -> ritorna “ottuso”
// Angolo retto: 90° -> ritorna “retto”
// Angolo piatto: 180° -> ritorna “piatto”

function angolo(gradi){

    if(gradi < 90){
        return("angolo acuto")
    }
    if(gradi > 90 && gradi < 180){
        return("angolo ottuso")
    }
    if(gradi === 90){
        return("angolo retto")
    }
    if (gradi === 180){
        return("angolo piatto")
    }

}

console.log(angolo(167))


//8 Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function cambiaCarattere(fiat){

    let FIAT = fiat.toUpperCase()
    let arr = FIAT.split(" ")
    let acronimo = ""

    for(index of arr){
        acronimo += index.charAt(0)
    }
    return acronimo
}

console.log(cambiaCarattere("Fabbrica Italiana Automobili Torino"))
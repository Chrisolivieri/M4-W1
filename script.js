//1 Crea una funzione che controlla due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.

function controlloNumeri() {
    let number1 = 2
    let number2 = 25

    if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
        console.log(true)
    } else {
        console.log(false)
    }

}


//2 Crea una funzione che rimuove il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function togliCarattere(stringa, posizione) {

}

//3 Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".

function controlloNumeri2() {
    let number1 = 34
    let number2 = 65

    if (number1 >= 40 && number1 <= 60 || number1 >= 70 && number1 <= 100 || number2 >= 40 && number2 <= 60 || number2 >= 70 && number2 <= 100) {
        console.log(true)
    } else {
        console.log(false)
    }
}

//4 Crea una funzione che accetti un nome di città come paramentro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false".

function nomeCitta(nomeCitta) {

    nomeCitta = "New York"

    if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
        console.log(true)
    } else {
        console.log(false)
    }
}

//5 Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

function sommaArray(arr = [3, 5, 9]) {

    var somma = 0

    for (let i = 0; i < arr.length; i++) {
        somma += arr[i]

    }
    console.log(somma)
}

//6 Crea una funzione che controlli che un array non contenga i numeri 1 o 3. Se non li contiene, ritorna "true", altrimenti ritorna "false".

function controlloArray(){
    array = [4,5,7,8,10]

    if (array.includes(1) || array.includes(3)){
        console.log(false)
    }else{
        console.log(true)
    }
  

}

//7 Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° -> ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi -> ritorna “ottuso”
// Angolo retto: 90° -> ritorna “retto”
// Angolo piatto: 180° -> ritorna “piatto”

function angolo(gradi){

    gradi = 86

    if(gradi < 90){
        console.log("angolo acuto")
    }
    if(gradi >= 90 && gradi <= 180){
        console.log("angolo ottuso")
    }
    if(gradi === 90){
        console.log("angolo retto")
    }
    if (gradi === 180){
        console.log("angolo piatto")
    }

}


//8 Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.


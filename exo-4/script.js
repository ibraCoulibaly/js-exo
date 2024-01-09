// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage)

//Dernier elt
let dernierElement = secretMessage[secretMessage.length - 1]
console.log("Dernier element : " + dernierElement)

//Ajout à la fin
let ajoutFin = secretMessage.push('to', 'programm')
console.log("Ajout à la fin : " + ajoutFin)

//Remplacer 'easily' par 'right'
console.log(secretMessage)
for(let i = 0; i < secretMessage.length; i++){
    if(secretMessage[i] == 'easily'){
        secretMessage.splice(i, 1, 'right')
    }
}
console.log(secretMessage)

//Suppression du premier element
let supFirstElement = secretMessage.shift()
console.log(secretMessage)

//Ajout au début
let ajoutDebut = secretMessage.unshift('Programming')
console.log(secretMessage)

//remplacer la série de cinq mots 'get', 'right', 'the', 'first', 'time' pae 'know'
for(let i = 0; i < secretMessage.length; i++){
    if(secretMessage[i] == 'get' || secretMessage[i] == 'right' || secretMessage[i] == 'the' || secretMessage[i] == 'first' || secretMessage[i] == 'time'){
        secretMessage.splice(i, 5, 'know')
    }
}
console.log(secretMessage)

//join() the message
let msgSecret = secretMessage.join(' ')
console.log(msgSecret)





console.log('exo-5');
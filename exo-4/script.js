// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
//console.log(secretMessage)

//Dernier elt
secretMessage.pop()
//console.log(secretMessage)

//Ajout à la fin
let ajoutFin = secretMessage.push('to', 'programm')
//console.log(secretMessage)

//Remplacer 'easily' par 'right'
secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right')
//console.log(secretMessage)

//Suppression du premier element
let supFirstElement = secretMessage.shift()
//console.log(secretMessage)

//Ajout au début
let ajoutDebut = secretMessage.unshift('Programming')
//console.log(secretMessage)

//remplacer la série de cinq mots 'get', 'right', 'the', 'first', 'time' pae 'know'
console.log(secretMessage)
console.log(secretMessage.splice(5, 5, 'know'))
//console.log(secretMessage)

//join() the message
let msgSecret = secretMessage.join(' ')
//console.log(msgSecret)





console.log('exo-5');
// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];


//Q1 on peut utiliser la fonction pop() -> renvois le dernier elt, mais supprime l'elt ds le tab original
function enleverDernier(tab){
    // let tab1 = tab
    // return tab1.pop()
    return tab[tab.length-1]
}

console.log(enleverDernier(secretMessage))

//Q2
function ajoutFin(mot, tab){
    tab.push(mot)
}
ajoutFin('to', secretMessage)
ajoutFin('programm', secretMessage)

//Q3 Changement du mot 'easily' par 'right'
console.log(secretMessage)
for(let i = 0; i < secretMessage.length; i++){
    if(secretMessage[i] == 'easily'){
        secretMessage[i] = 'right'
    }
}

console.log(secretMessage)


//Q4
function supprimerPremier(tab){
    return tab.shift()
}

console.log(supprimerPremier(secretMessage))
console.log(secretMessage)

//Q5
function ajoutDebut(mot, tab){
    return tab.unshift(mot)
}

ajoutDebut('Programming', secretMessage)

console.log(secretMessage)
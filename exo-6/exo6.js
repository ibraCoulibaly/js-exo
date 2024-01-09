// Cours 8 de Codecademy
// console.log("exo-6");

// var joeInfo = {
//     name: "Joe's house",
//     rooms: 5,
//     garage: false,
//     bathrooms: 1 + 2,
//     cars: ['Clio', 'Van'],
// };
// // ! Ne faites pas de modification au dessus de cette ligne !

// // 1. Afficher le nombre de voitures de Joe
// for(let e of joeInfo.cars){
//     console.log(e)
// }


// // 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
// const newBathrooms = joeInfo.bathrooms = 1
// console.log(newBathrooms)
// // 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
// const newGarage = joeInfo.garage = true 
// console.log(newGarage)

//Q3


/*-------------------------------------------------------------------------
    une modelisation avec des classes
---------------------------------------------------------------------------*/
class jouer{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    
}

class game{
    constructor(opponent, teamPoints, opponentPoints){
        this.opponent = opponent
        this.teamPoints = teamPoints
        this.opponentPoints = opponentPoints
    }
    
}

const team = {
    players: [],
    gammes: [],
    addPlayer: (p = new jouer() ) => {
        team.players.push(p)
    },

    addGame: (g = new game()) => {
        team.gammes.push(g)
        
    }
}
let j1 = new jouer('Pablo', 'Sanchez', 41)
let g1 = new game('Broncos', 35, 21)

let j2 = new jouer('Mous', 'Cam', 22)
let g2 = new game('Tenis', 15, 12)

let j3 = new jouer('Bill', 'Tra', 26)
let g3 = new game('Broncos', 35, 21)


team.addPlayer(j1)
team.addGame(g1)

team.addPlayer(j2)
team.addGame(g2)

team.addPlayer(j3)
team.addGame(g3)


console.log(team)

//Somme des points
let sumPoint = 0
let taille = team.gammes.length
for(let i = 0; i  < taille; i++){
    sumPoint += team.gammes[i].teamPoints
}

console.log("La somme des point : " + sumPoint)
//Somme des points équipe adverse
let moyenneAdvers = 0
for(let i = 0; i  < taille; i++){
    moyenneAdvers += team.gammes[i].opponentPoints
}

console.log("La somme des point adverssaires : " + moyenneAdvers/taille)



/*-------------------------------------------------------------------------
    avec des paramettre à l'interieur de la fonction addPlayer et addGame
---------------------------------------------------------------------------*/

// const team = {
//     players: [],
//     gammes: [],
//     addPlayer: (firstName, lastName, age ) => {
//         team.players.push(firstName)
//         team.players.push(lastName)
//         team.players.push(age)
//     },

//     addGame: (opponent, teamPoints, opponentPoints ) => {
//         team.gammes.push(opponent)
//         team.gammes.push(teamPoints)
//         team.gammes.push(opponentPoints)
//     }
// }

// team.addPlayer('Pablo', 'Sanchez', 11)
// team.addPlayer('Mous', 'Cam', 25)
// team.addPlayer('Bill', 'Tra', 20)

// team.addGame('Broncos', 35, 21)
// team.addGame('Football', 4, 2)
// team.addGame('Tenis', 50, 46)

// console.log(team)

// //Somme
// let sum = 0
// for(let i = 1; i  < team.gammes.length; i++){
//     sum += team.gammes[i]
//     i = i + 2
//     console.log("valeur de sum : " + sum)
    
// }

// console.log("La somme " + sum)

/*-------------------------------------------------------------------------
    Écrire une fonction qui permet de trouver le joueur le plus âgé.
---------------------------------------------------------------------------*/

function plusAge(){
    let max = team.players[0].age
    for(let i = 0; i  < taille; i++){
        if(team.players[i].age > max){
            max = team.players[i].age
        }
    } 
    console.log("Le jouer le plus agé à " + max + " ans")
}
plusAge()

/*-------------------------------------------------------------------------
    Bonus : Trier les joueurs par ordre alphabétique.
---------------------------------------------------------------------------*/
function trie(){
    let tab = []
    for(let i = 0; i  < taille; i++){
        tab.push(team.players[i].firstName)
    }
    console.log(tab.sort())
}

trie()


// you can write js here



let valTaper = prompt("Entrr une valeur : ").toLowerCase()


function getPlayerChoice(playereInput){

    if(playereInput === "rock" || playereInput === "paper" || playereInput === "scissors"){
        return playereInput
    }
}


jouerOrdi = ''
function getComputerChoice(){
    let ordi = Math.floor(Math.random()*3)
    if(ordi == 0){
        jouerOrdi = 'rock'
    }else if(ordi == 1){
        jouerOrdi = 'peper'
    }else{
        jouerOrdi = 'scissors'
    }
    return jouerOrdi
}

function findWinner(playerChoice, computerChoice){
    playerChoice = getPlayerChoice(valTaper)
    computerChoice = getComputerChoice()
    console.log("Le choix de l'utilisateur : " + playerChoice)
    console.log("Le choix de l'ordi : " + computerChoice)
    if(playerChoice == computerChoice){
        console.log('Resultat : Tied')
        
    }else if(((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice === "rock") || (playerChoice === "scissors") && (computerChoice === "paper"))){
        console.log("Resultat : Won")
     
    }else if(playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors"){
        console.log("ERREUR")

    }else{
        console.log("Resultat won")
    }
}

findWinner()


console.log('exo-3');
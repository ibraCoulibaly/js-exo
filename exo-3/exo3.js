// you can write js here


jouerPerso = ''
function getPlayerChoice(playerInput){
    playerInput = prompt("Your choice ( rock, paper, scissors) ?")
    if(playerInput == "rock" || playerInput == "paper"  || playerInput == "scissors"){
        jouerPerso = playerInput.toLowerCase()
    }else{
        jouerPerso = 'erreur'
    }
    return jouerPerso
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
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
    console.log("Le choix de l'utilisateur : " + playerChoice)
    console.log("Le choix de l'ordi : " + computerChoice)
    if(playerChoice == computerChoice){
        console.log('Resultat : Tied')
        
    }else if(((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice === "rock") || (playerChoice === "scissors") && (computerChoice === "paper"))){
        console.log("Resultat : Won")
     
    }else{
        console.log("Resultat : Lost")

    }
}

findWinner()


console.log('exo-3');
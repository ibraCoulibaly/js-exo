

let isTesting = true
let jourSemaine = 'Jour de la semaine'
let weekend = 'En week end'
if (isTesting) {
    let jourActuel = prompt('Entrer le jour')
    let heureActuelle = prompt('Entrer l\'heure')
    comparaisonDate(jourActuel, heureActuelle)
} else {
    const myDate = new Date();
    let jourActuel = myDate.getDay()
    let heureActuelle = myDate.getHours()
    comparaisonDate(jourActuel, heureActuelle)
}

function comparaisonDate(jourActuel, heureActuelle){
    console.log( jourActuel + "e Jour")
    console.log(heureActuelle + " Heure")
    if (jourActuel < 7 && heureActuelle < 24) {
        if (jourActuel == 6 || jourActuel == 0 || jourActuel == 5 && heureActuelle > 17 || jourActuel == 1 && heureActuelle < 9) {
            console.log(weekend )
        } else {
            console.log(jourSemaine)
        }
    } else {
        console.log("Hors des heure")
    }
    
}


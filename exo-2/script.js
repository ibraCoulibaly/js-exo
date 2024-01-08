// you can write js here


const myDate = new Date();
let jourSemaine = 'Jour de la semaine'
let weekend = 'En week end'
let jourActuel = myDate.getDay() 
let heureActuelle = myDate.getHours() 



//
/*if(jourActuel === 0){
    console.log('Dimanche : ' + weekend);
}else if(jourActuel === 1){
    console.log('Lundi : ' + jourSemaine);
}else if(jourActuel === 2){
    console.log('Mardi : ' + jourSemaine);
}else if(jourActuel === 3){
    console.log('Mercredi : ' + jourSemaine);
}else if(jourActuel === 4){
    console.log('Jeudi : ' + jourSemaine);
}else if(jourActuel === 5){
    console.log('Vendredi : ' + jourSemaine);
}else{
    console.log('Samedi : ' + weekend);
}*/

if(jourActuel === 0){
    console.log('Dimanche : ' + weekend);
}else if((jourActuel === 1) && (heureActuelle < 9)){
    console.log( weekend);
}else if((jourActuel === 1) && (heureActuelle > 9)){
    console.log('Lundi : ' + jourSemaine);
}
else if(jourActuel === 2){
    console.log('Mardi : ' + jourSemaine);
}else if(jourActuel === 3){
    console.log('Mercredi : ' + jourSemaine);
}else if(jourActuel === 4){
    console.log('Jeudi : ' + jourSemaine);
}else if((jourActuel === 5) && (heureActuelle < 17)){
    console.log('Vendredi : ' + jourSemaine);
}else if((jourActuel === 5) && (heureActuelle >= 17)){
    console.log(weekend);
}
else{
    console.log('Samedi : ' + weekend);
}


/*

Pour le test, j'ai joué sur la valeur des variables jourActuel et heureActuelle
Exemple : On est est à lundi et il est 11h en ce moment
let jourActuel = myDate.getDay() + 4 // +4 pour aller à vendredi
let heureActuelle = myDate.getHours() + 6// +6 pour décaler heure jusqu'à 17h

Resultat : 
En week end

*/ 





















console.log('exo-2');
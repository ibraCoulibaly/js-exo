//Une copie de jsonDatas
const copie = jsonDatas

//Q1  afficher un à un dans la console les types
function test(){
    for(let i = 0; i < jsonDatas.length; i++){
        console.log(jsonDatas[i].type)
    }
}

//Q2

const traduire = {
    car : "Je suis une belle voiture",
    house : "Villa sur la plage",
	game : "jeux",
    videoGame : "Jeux video",
    show : "Evenement VIP"
}

for(let i = 0; i < jsonDatas.length; i++){
    let tmp = jsonDatas[i]
    if(tmp.type == 'car'){
        tmp.traduit = traduire.car
    }else if(tmp.type == 'house'){
        tmp.traduit = traduire.house
    }else if(tmp.type == 'game'){
        tmp.traduit = traduire.game
    }else if(tmp.type == 'videoGame'){
        tmp.traduit = traduire.videoGame
    }else{
        tmp.traduit = traduire.show
    }
}



//Affiche 
function allArticle(){
    for(let i = 0; i < jsonDatas.length; i++){
        document.getElementById("list" + `${i}`).textContent = jsonDatas[i].type
    }
}
allArticle()

//Affichage du contenu input
function afficher(){
    let input = document.getElementById("mot").value
    document.querySelector('p').textContent = input
}
//Verification de stock
function enStock(){
    let coche = document.getElementById("check")
    for(let i = 0; i < jsonDatas.length; i++){
        if(coche.checked == true && jsonDatas[i].quantity > 0){
            document.getElementById("stock" + `${i}`).textContent = jsonDatas[i].type
            //console.log('test')
        }else if(coche.checked == false){
            document.getElementById("stock" + `${i}`).textContent = "Cocher pour verifier"
        }else{
            document.getElementById("stock" + `${i}`).textContent = "Rupture de stock"
        }
    }
}

//Tri asc and desc 



function triAsc(){
    let result = [] //une table qui va contenir le nom des articles trié
    let tab = []// va contenier le nom des articles
    for(let i = 0; i < jsonDatas.length; i++){
        tab.push(jsonDatas[i].name) //envoi tous les nom d'article dans la table tab
    }
    result = tab.sort()//tri
    /* je parcours mon resultat et je recupere chaque id de ma liste "li" en concatenant  
        avec l'indice j pour correspond à : trij -> tri0, tri1...
    */
    for(let j = 0; j < result.length; j++){
        document.getElementById("tri" + `${j}`).textContent = result[j] 
    }
}


function triDesc(){
    let result1 = []
    let tab = []
    for(let i = 0; i < jsonDatas.length; i++){
        tab.push(jsonDatas[i].name)
    }
    result1 = tab.sort().reverse()
    for(let j = 0; j < result1.length; j++){
        document.getElementById("tri" + `${j}`).textContent = result1[j]
    }
}

//Ajout de formulaire



console.log("exo-7");
console.log(jsonDatas);

let ttt = 'a' + 2
console.log(ttt)
console.log(ttt + ttt)
console.log(ttt + `${ttt}`)


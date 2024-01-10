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

////////////////////////////

// const list1 = document.getElementById("list1")
// const list2 = document.getElementById("list2")
// const list3 = document.getElementById("list3")
// const list4 = document.getElementById("list4")
// const list5 = document.getElementById("list5")
// const list6 = document.getElementById("list6")
// const list7 = document.getElementById("list7")
// const list8 = document.getElementById("list8")
// const list9 = document.getElementById("list9")

//list1.textContent = jsonDatas[0].type

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

//Tri
let result = []
function triAsc(){
    let tab = []
    for(let i = 0; i < jsonDatas.length; i++){
        tab.push(jsonDatas[i].name)
    }
    result = tab.sort()
    for(let j = 0; j < result.length; j++){
        document.getElementById("tri" + `${j}`).textContent = result[j]
    }
    return result
}
let res = []

function triDesc(){
    let tab = []
    tab = triAsc()
    const triDesc = (a, b) => b-a
    res = tab.sort(triDesc)
    return res
}



console.log("exo-7");
console.log(jsonDatas);
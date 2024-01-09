//Une copie de jsonDatas
const copie = jsonDatas

//Q1  afficher un à un dans la console
for(let i = 0; i < jsonDatas.length; i++){
    console.log(jsonDatas[i].type)
}

//Q2

const traduireObj = {
    traduire: function(e, descrip){
        for(let i = 0; i < jsonDatas.length; i++){
            if(jsonDatas[i].type ==  e && jsonDatas[i].description == ""){
                jsonDatas[i].description = descrip
            }
        }
    }  
}

//
for(let i = 0; i < jsonDatas.length; i++){
        Object.assign(jsonDatas[i], traduireObj)
    
}





console.log("exo-7");
console.log(jsonDatas);



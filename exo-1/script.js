// you can write js here
// Q1
//let kelvins = 294
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log("Valeur en kelvins : " + kelvins)

//Q2
//Je converti le kelvins - celcius en soustrant -273 et l'affecter à la variable celsius
let celsius = kelvins - 273
console.log("Valeur en celsius : " + celsius)
//Q3
let fahrenheits = celsius * (9/5) + 32
console.log("Valeur en fahrenheits decimal : " + fahrenheits)

//Q4
let entierFahrenheits = Math.floor(fahrenheits)
console.log("Valeur en fahrenheits entier : " + entierFahrenheits)








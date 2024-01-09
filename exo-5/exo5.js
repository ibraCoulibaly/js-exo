// you can write js here
// you can write js here
let input = 'gdjef lbrjbvqfjb ivnrknvqk qjbvjrbjjnv edc'
let vowels = ['a', 'e', 'i', 'u', 'o', 'y']
let resultArray = []




// With indexOf
// for(let j = 0; j < input.length; j++){
//     if(vowels.indexOf(input[j]) > 0){
//         resultArray.push(input[j])
//     }
// }
    


// Avec parcors imbriquer
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(input[i] == vowels[j]){
            resultArray.push(input[i])
        }
    }
}

console.log(resultArray);
console.log(resultArray.join(' ').toUpperCase());

console.log('exo-5');
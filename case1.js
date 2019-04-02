
let weights = "56 65 74 100 99 68 86 180 90"

function sumOfDigit(n){
    let addition = 0;
    while (n != 0){
        addition += n % 10
        n = Math.floor(n / 10) 
    }
    return addition
}  

function takeSecondElem (element){
    return element[1]
}

function orderWeight (string){
    let weight_array = string.split(' ');
    let weight_hash = []
    let weight_resut=[];
    weight_array.forEach(element => {
        weight_hash.push([sumOfDigit(element),element])
    });
    weight_hash.sort(function(a,b){
        return a == b 
        ? a[1].localeCompare(b[1])
        : (a[0] - b[0]);
    })
    weight_hash.forEach(weigth =>{
        weight_resut.push(takeSecondElem(weigth))
    })
    return weight_resut.join(' ')
}

console.log(orderWeight(weights));
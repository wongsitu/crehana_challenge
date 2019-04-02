

function is_valid(ip){
    ip = ip.split(".") 
    if(ip.length !== 4) {
        return false
    }
    for (let i = 0; i < ip.length; i++){
        let element = ip[i]
        if (element.length > 3 || parseInt(element) < 0 || parseInt(element) > 255 ) {
            return false
        } else if( element.length > 1 && parseInt(element) != 0 && parseInt(element[0]) === 0  ) {
            return false
        } else if( element.length > 1 && parseInt(element) === 0  ) {
            return false
        }
    }
    return true
} 

console.log(is_valid('1.2.3.4'))

console.log(is_valid('123.45.67.89'))

console.log(is_valid('1.2.3'))

console.log(is_valid('1.2.3.4.5'))

console.log(is_valid('123.456.78.90'))

console.log(is_valid('123.045.067.089'))

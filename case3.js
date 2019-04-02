
let object1 = { a: [{ b: { c: 3 } }] }

let object2 =  {a: { b: { c: 3 } } }

function getIn(obj, path, defaultValue){
    let path_array = path.split('.')
    for( let i = 0 ; i < path_array.length ; i++)
        if ( obj[path_array[i]] ) {
            elem = path_array[i]
            obj = obj[elem]
        }
        else {
            return defaultValue
        }
    return obj
}

console.log(getIn(object1, 'a.b.c', 'default'))

console.log(getIn(object2, 'a.b.c', 5))

console.log(getIn(object2, 'a.b.d', 5))
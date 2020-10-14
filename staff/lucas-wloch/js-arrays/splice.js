var animals = ["🦏", "🐪", "🐫", "🦒", "🦘","🦂", "🐢", "🐍", "🦎", "🦖"]
function splice(array,initial,amount, items){
    if(!(items === undefined)){
        result = []
        itemIndex = 0
        for(var i=initial;i<amount;i++){
            result[result.length] = array[i]
            array[i] = items[itemIndex]
            itemIndex++
        }
        return result 
    } else {
        result = []
        for(var i=initial;i<amount;i++){
            result[result.length] = array[i]
        }
        return result
    }
}
var monkeys = ["🙈", "🙉","🙊"]
var hola = splice(animals,0,2,monkeys)
console.log(hola)
console.log("y ahora como quedo animals")
animals.forEach(console.log)

// function moveElementsArray(array){
      
//     for (var i = 0; i < array.length; i++){
//         array[array.length-i] = array[(array.length-i)+1]
//     }
//     return array
// }

//2
var animals = ["🦏", "🐪", "🐫", "🦒", "🦘","🦂", "🐢", "🐍", "🦎", "🦖"]
function splice(array,initial,amount, items){
    if(!(items === undefined)){
        if( items.length > amount){
            var diference = items.length - amount
            for(var i=0; i<diference; i++){
            
            array[array.length-i] = array[(array.length-i)-1]
            //no funciona.. no se porque este for no cambia el array.. igualmente lo que hace
            //esta mal.. este mueve los ultimos numeros para delante pero no llega a al indice que tiene que llegar
            //que seria initial + amount.. h¿tiene que mover hacia adelante todos los elementos desde la position initial
            //mas amount y desplazarlos diference numero de veces
            }
        }
        result = []
        itemIndex = 0
        for(var i=initial;i<amount;i++){
            result[result.length] = array[i]
            array[i] = items[itemIndex]
            itemIndex++
        }
        return result 
    } else {
        result = []
        for(var i=initial;i<amount;i++){
            result[result.length] = array[i]
        }
        return result
    }
}
var monkeys = ["🙈", "🙉","🙊"]
var hola = splice(animals,0,2,monkeys)
console.log(hola)
console.log("y ahora como quedo animals")
animals.forEach(console.log)
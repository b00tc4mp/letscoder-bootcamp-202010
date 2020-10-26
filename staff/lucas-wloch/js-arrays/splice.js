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
            // falta la parte de borrar los numeros del array original y eliminar los elementos vacios
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
            for(var i=0; i<(array.lenght - initial); i++){
            
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

//3 (juntando con version de manu)
var animals = ["🦏", "🐪", "🐫", "🦒", "🦘","🦂", "🐢", "🐍", "🦎", "🦖"]
function splice(array,start,deleteCount, items){
    if(!(items === undefined)){
        if( items.length > deleteCount){
            var diference = items.length - deleteCount
            for(var i=0; i<(array.lenght - start); i++){
            // for (var i = array.length; i> start; i--)
            //      array[i] = array[i-1]
            // array[start] = item

            
            
            array[array.length-i] = array[(array.length-i)-1]
            //no funciona.. no se porque este for no cambia el array.. igualmente lo que hace
            //esta mal.. este mueve los ultimos numeros para delante pero no llega a al indice que tiene que llegar
            //que seria start + deleteCount.. h¿tiene que mover hacia adelante todos los elementos desde la position start
            //mas deleteCount y desplazarlos diference numero de veces 
            }
        }
        result = []
        itemIndex = 0
        //esto de abajo que agrega los items tenemos que repetirlo desde start hasta start + delete count
        for(var i=start;i<deleteCount;i++){
            result[result.length] = array[i]
            array[i] = items[itemIndex]
            itemIndex++
        }
        return result 
    } else {
        result = []
        for(var i=start;i<deleteCount;i++){
            result[result.length] = array[i]
        }
        return result
    }
}

//ej manu para achicar el array cuando le pasas solo un item for(var i = start + deleteCount; i< array.length; i++)
//                                                     array.length = array.length - (deleteCount -1)
var monkeys = ["🙈", "🙉","🙊"]
var hola = splice(animals,0,2,monkeys)
console.log(hola)
console.log("y ahora como quedo animals")
animals.forEach(console.log)
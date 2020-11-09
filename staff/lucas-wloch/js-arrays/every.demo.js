console.log('DEMO FOR EVERY')

console.log('return true or false if all the item accomplish the condition')

var arr = [1,2,3,4]

var expresion = every(arr, function(value) {
    return value > 0
})

console.log(expresion)




var expresion = every(arr, function(value) {
    return value > 3
})

console.log(expresion)

// var numbers = [53, 25, 49, 89, 75, 64, 16];
// var numbers = [];
// var length = 7;
// var length = rando

// for(let i=0; i<length; i++){
    
//     var randomNum = randomInt(1,100);
//     numbers.push(randomNum)
// }

// var arr = []
// while(arr.length < 8){
//   var randomnumber=Math.ceil(Math.random()*100)
//   if(arr.indexOf(randomnumber) === -1){arr.push(randomnumber)}  
// }
// document.write(arr);



// let greaterThan10 = arr.every( function(num){
    
//     return num > 10;
// })
// console.log(greaterThan10)
// if(greaterThan10 === true) {
//   console.log("every number is greater than 10");  
// } else console.log("every number is not greater than 10");

// let greaterThan20 = arr.every( function(num){
    
//     return num > 20;
// })
// console.log(greaterThan20)
// if(greaterThan20 === true) {
//   console.log("every number is greater than 20");  
// } else console.log("every number is not greater than 20");
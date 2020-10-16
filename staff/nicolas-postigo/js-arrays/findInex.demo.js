console.log('DEMO filter')
var array = [20, 40, 60, 80, 100]

console.log("screen the elements greater than 50")
var result = findIndex (array,function(value){
    return value > 50
});

console.log(result);
console.log('TEST Caray prototype forEach');

(function (){
    console.log("should multiply numbers by 10");

    var numbers = new Caray (1, 2, 3, 4, 5)

    
    var result = new Caray();

    numbers.forEach(function(value){
        newValue = value * 10;
        result[result.length] = newValue;
        result.length++;
    })

console.assert(numbers.length === 5, "should length numbers length 5")
console.assert(result.length === 5, "should the result length be 5")

for (var i = 0; i < result.length; i++){
console.assert(result[i] === numbers[i] * 10, result[i] + " should equal " + numbers[i] * 10);
};

})();

(function () {
    console.log("should concat the position and de mierda to all the items on the Caray");

    var months = new Caray('January', 'February', 'March', 'April', 'May', 'June');

    var result = new Caray();

    months.forEach(function (value, position) {

        result[result.length] = position + ": " + value + "de mierda";
        result.length++;
    })

    console.assert(result.length === 6, "should the result length 6");

    for (var i = 0; i < result.length; i++){
        console.assert(result[i].includes ("de mierda"), "result should include de mierda in all items");
    };

    for (var i = 0; i < result.length; i++){
        console.assert(result[i].includes(i.toString()), "result position should be the same as the position we gave them on the string");
    };
})();
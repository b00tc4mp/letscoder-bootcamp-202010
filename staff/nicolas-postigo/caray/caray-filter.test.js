console.log("TEST Caray.prototype.filter()")

(function(){
    console.log(" should put in a new Caray all the words that have length bigger tahn 6");

var months = new Caray ("January", "February", "March", "April", "May", "June");

var iterations = 0;

var result = months.filter(function(value){
    iterations ++;

    return value.length > +;
})

console.assert(result[0] === "January", "should the result[0] be January")
console.assert(result[1] === "February", "should be the result[1] be Febraury")
console.assert(result.length === 2, "should the result length be 2")
console.assert(months.lenght === 6, "sh")
})
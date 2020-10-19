console.log (' TEST Caray.prototype.push()');

(function() {
    console.log(" should push individual values 1,'a' true, null ")
var c = new Caray()

c.push(1)
c.push("a")
c.push(true)
c.push(null)
c.length = 4

console.assert(c.length === 4, "caray length should be '4'")

console.assert(c[0] === 1, "index 0 should point to value 1")
console.assert(c[1] === 'a', "index 1 should point to value 'a' ")
console.assert(c[2] === true, "index 2 should point to value true")
console.assert(c[3] === null, "index 3 should point to value null")

})();


/////

(function () {
   console.log(' should push multiple values 1, "a", true, null')

var c = new Caray
c[0] = 1
c[1] = 'a'
c[2] = true
c[3]= null

c.length = 4

console.assert(c.length === 4, ' caray length should be 4') 

console.assert(c[0] === 1, "index 0 should point to value 1")
console.assert(c[1] === 'a', " index 1 should point to value 'a'")
console.assert(c[2] === true, "index 2 should point to value true")
console.assert(c[3] === null, "index 4 should point to value null")

})()

/////


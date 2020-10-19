console.log(" Test. Caray.Prototype. Find");

(function() {

    console.log( "Should find numbers bigger than 25")
    
    var c = new Caray ()
    c[0] = {name:'Aida', age: 24 }
    c[1] = {name:'Marta', age: 28 }
    c[2] = {name:'Toño' , age: 25 }

    c.length = 3
   

    var iterations = 0
    var result= c.find(function(element,i, carayTotal) {
      if (element.age > 24)
      iterations++

      return element.age > 24
    })
   console.log(result)

    console.assert(result.age === 28, "should return age 28")
    console.log(result.name === c[1].name && result.age === c[1].age)
})()


/////

console.log(" Test. Caray.Prototype. Find");

(function () {
    console.log (" Should find money more than 25")

    var c = new Caray()
  
    c[0] = {name: "Juan", money : 10 }
    c[1] = {name: "Albert", money : 20}
    c[2] = {name: "Antonio", money : 24}
    c[3] = {name: "Ana", money : 50}
    c.length = 4
    
    var iterations = 0
    
    var result = c.find(function(element) {
       iterations++
       return element.money > 25

    })
    console.log(result)

    console.assert(result.money === 50, "should be more than 25")
    console.log(result.money=== 50 && result.name === "Ana")
    console.log(iterations)
    console.assert(iterations === 4)   
    





})()

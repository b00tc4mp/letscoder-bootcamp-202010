(function(){
    console.log ("TEST retrieve-user()");
(function(){
    console.log ("should fail retrieve is token not exit")
     var token = Math.random().toString() 
     retrieveUser(token,function(error){
        console.assert( error instanceof Error ,"should error be defined as error" )
        console.assert(error.message === "invalid token")
     })


})();

(function(){
    console.log ("should fail retrieve if token not string")
    var token = Math.random()

    retrieveUser(token,function(error){
        console.assert( error instanceof Error ,"should error be defined as error" )
        console.assert(error.message === "invalid token")
    })

})();

})()
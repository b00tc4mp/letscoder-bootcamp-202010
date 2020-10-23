registerUser('Ga To','ga@to.com', '123','123', function(error){
console.log("DEMO registerUser()")
    
if(error===undefined) console.log('ok, perfect, user registered')
else console.error('ERROR! ' + error.message) 
})

registerUser('Toma To','toma@to.com', '456', '456', function(error){
    if( error===undefined) console.log('ok, well done, user registered')
})
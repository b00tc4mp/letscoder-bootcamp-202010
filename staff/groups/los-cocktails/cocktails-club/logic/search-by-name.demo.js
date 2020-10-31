searchByName('martini', function(error, results) {
    if (error) return alert(error.message)
    
    var drinks = results.drinks
    console.log('searchByName()',drinks)
})
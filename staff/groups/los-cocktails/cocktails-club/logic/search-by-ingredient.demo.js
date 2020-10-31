searchByIngredient('chocolate',function(error,results){
    if (error) return alert(error.message)

    var {drinks} = results

    console.log('searchByIngredient',drinks)
})
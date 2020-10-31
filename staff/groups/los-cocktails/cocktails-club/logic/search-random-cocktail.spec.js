describe('SPEC searchRandomCocktail()', function(){
    describe('When api brings results', function(){

        it('should succed on random cocktail', function(){
            searchRandomCocktail(function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType('Object')
                expect(results.length).toBeGreaterThan(0)
                
                // var drinks = results.drinks
                var { drinks } = results

                expect(drinks.length).toBeGreaterThan(0)
                
                drinks.forEach( drink => {
                    expect(idDrink).toBeOfType('string')
                    expect(strDrink).toBeOfType('string')//nombre
                    expect(strGlass).toBeOfType('string')
                    expect(strInstructions).toBeOfType('string')
                    expect(strAlcoholic).toBeOfType('string')
                    expect(strDrinkThumb).toBeOfType('string')
                    
                })


            })
        })
    })

})
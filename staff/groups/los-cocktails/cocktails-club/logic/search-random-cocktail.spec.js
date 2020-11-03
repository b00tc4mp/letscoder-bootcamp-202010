describe('SPEC searchRandomCocktail()', function(){
    describe('When api brings results', function(){

        it('should succed on random cocktail', function(){
            searchRandomCocktail(function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType('object')

                expect(results.length).toBeGreaterThan(0)
                
                results.forEach( ({ id, glass, name, instructions, alcoholic, image }) => {
                    expect(id).toBeOfType('string')
                    expect(name).toBeOfType('string')//nombre
                    expect(glass).toBeOfType('string')
                    expect(instructions).toBeOfType('string')
                    expect(alcoholic).toBeOfType('string')
                    expect(image).toBeOfType('string')
                    
                })


            })
        })
    })

})
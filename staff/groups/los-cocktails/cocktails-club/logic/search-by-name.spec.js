describe('SPEC searchByName()', function(){
    describe('When api brings results', function(){
        let name
        beforeEach(function(){
            name = ['margarita', 'caipirinha', 'cosmopolitan', 'pisco_sour' , 'Mojito', 'Gin_And_Tonic' ].random()
        })

        it('should succed on matching cocktail/ coctails', function(){
            searchByName(name,function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType("object");
                expect(results.length).toBeGreaterThan(0);
                
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
    describe('When api does not brings results', function(){
        let name
        beforeEach(function(){
            name = ['nfsdkn','dfmdkjsfm','nfjsdn', 'mfkdsmds', 'aksas', 'nasdjndfi' ].random()
        })

        it('should fail on non-matching cocktail/ coctails', function(){
            searchByName(name,function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType("object")
                expect(results.length).toBeGreaterThan(0)
                
                // var drinks = results.drinks
                var { drinks } = results

                expect(drinks).toBeNull()

            })
        })
    })

})
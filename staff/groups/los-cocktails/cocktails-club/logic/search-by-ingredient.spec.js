describe('SPEC searchByIngredient()', function(){
    describe('When api brings results', function(){
        let name
        beforeEach(function(){
            name = ['Gin', 'Lemon_juice', 'vodka', 'wine', 'apple', 'rum', 'pineapple' ].random()
        })

        it('should succed on matching ingredient', function(done){
            searchByIngredient(name,function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType("object")
                expect(results.length).toBeGreaterThan(0)
                
                // var drinks = results.drinks
                var { drinks } = results

                expect(drinks.length).toBeGreaterThan(0)

                drinks.forEach( drink => {
                    expect(idDrink).toBeOfType('string')
                    expect(strDrink).toBeOfType('string')//nombre
                    expect(strDrinkThumb).toBeOfType('string')
                })

                done()
            })
        })
    })
    describe('When api does not brings results', function(){
        let name
        beforeEach(function(){
            name = ['nfsdkn','dfmdkjsfm','nfjsdn', 'mfkdsmds', 'aksas', 'nasdjndfi' ].random()
        })

        it('should fail on non-matching ingredient', function(done){
            
            // try{
                searchByIngredient(name,function(error,results){
                    expect(error).toBeNull()
    
                    expect(results.length).toBe(0)})
            //     })

            // } catch (error) {
            //     expect(error).toBeDefined()
            // }
            done()
        })
    })

})
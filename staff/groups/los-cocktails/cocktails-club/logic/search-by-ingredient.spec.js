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

                results.forEach( ({ id, name, image }) => {
                    expect(id).toBeOfType('string')
                    expect(name).toBeOfType('string')//nombre
                    expect(image).toBeOfType('string')
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
                searchByIngredient(name,function(error){
                    expect(error).toBeDefined()
    
                    expect(error.message).toBe("no ingredient found")})
            //     })

            // } catch (error) {
            //     expect(error).toBeDefined()
            // }
            done()
        })
    })

})
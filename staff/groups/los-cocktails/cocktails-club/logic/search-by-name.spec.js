describe('SPEC searchByName()', function(){
    describe('When api brings results', function(){
        let name
        beforeEach(function(){
            name = ['margarita', 'caipirinha', 'cosmopolitan', 'pisco_sour' , 'Mojito', 'Gin_And_Tonic' ].random()
        })

        it('should succed on matching cocktail/ coctails', function(){
            searchByName(name,function(error,results){
                expect(error).toBeNull()

                expect(results).toBeOfType("object")

                expect(results.length).toBeGreaterThan(0)

                results.forEach( ({ id, name, glass, instructions, alcoholic, image }) => {
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
    describe('When api does not brings results', function(){
        let name
        beforeEach(function(){
            name = ['nfsdkn','dfmdkjsfm','nfjsdn', 'mfkdsmds', 'aksas', 'nasdjndfi' ].random()
        })

        it('should fail on non-matching cocktail/ coctails', function(){
            searchByName(name,function(error,results){
                expect(error).toBeDefined()
                expect(results).toBeNull()

            })
        })
    })

})
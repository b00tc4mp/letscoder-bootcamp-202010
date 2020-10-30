//antes de empezar hacer nada, pensar que es lo que queremos hacer. done: al ser asincrono tenemos que indicarle cuando ha acabado la llamada

describe('SPEC searchVehicles()', function(){
    describe('when query gives results', function(){
        let query
        
        beforeEach(function(){
            query = ['red', 'blue','green','pink'].random()
        })

        it('should succeed on matching query', function(){
            searchVehicles(query, function(error,vehicles){
                
                expect(error).toBeNull()

                expect(vehicles).toBedefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBeGreaterThan(0)
            })
        })
    })
})
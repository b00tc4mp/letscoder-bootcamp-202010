describe('SPEC searchVehicles()', function() {
    describe('when query gives results', function() {
        let query

        beforeEach(function(){
            query = ['red', 'blue', 'green', 'pink', 'black'].random()
        })

        it('should succeed on matching query', function(donde){
            searchVehicles(query, function(error, vehicles) {
                expect(error).toBeNull()

                expect(Vehicles).toBeDefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBeGreaterThan(0)

                donde()
            })
        })
    })

    describe('when query gives no results', function() {
        let query

        beforeEach(function(){
            query = ['sgfasdgv', 'kjnkljb', 'qewtreqrt', 'uobhb', 'wergdsbfh'].random()
        })

        it('should succeed on matching query', function(donde){
            searchVehicles(query, function(error, vehicles) {
                expect(error).toBeNull()

                expect(Vehicles).toBeDefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBe(0)

                donde()
            })
        })
    })
})
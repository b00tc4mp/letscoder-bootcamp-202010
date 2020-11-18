describe('SPEC searchVehicles()', function() {
    describe('when query gives results', function() {
        let query

        beforeEach(function() {
            query = ['red', 'blue', 'green', 'pink', 'black'].random()
        })

        it('should succeed on matching query', function(done) {
            searchVehicles(query, function(error, vehicles) {
                expect(error).toBeNull()
                expect(vehicles).toBeDefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBeGreaterThan(0)

                done()
            })
        })
    })

    describe('when query gives no results', function() {
        let query

        beforeEach(function() {
            query = ['asdfasd', 'asdfasdf', 'ljklajsdf', 'añsdflkj'].random()
        })

        it('should provide no results on non-matching query', function(done) {
            searchVehicles(query, function(error, vehicles) {
                expect(error).toBeNull()

                expect(vehicles).toBeDefined()
                expect(vehicles).toBeInstanceOf(Array)
                expect(vehicles.length).toBe(0)

                done()
            })
        })
    })
}) 
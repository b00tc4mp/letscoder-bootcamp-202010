describe('SPEC retrieveVehicle()', () => {
    describe('when the vehicle exists', () => {
        let vehicleId

        beforeEach(() => {
            vehicleId = ['FYG51', 'FYB61', 'FYF94', 'FYC12', 'FJV51'].random()
        })

        it('should succeed on matching id', done => {
            retrieveVehicle(vehicleId, (error, vehicle) => {
                expect(error).toBeNull()

                expect(vehicle).toBeDefined()

                const { id, name, image, year, description, price, url } = vehicle

                expect(id).toBe(vehicleId)
                expect(name).toBeOfType('string')
                expect(image).toBeOfType('string')
                expect(year).toBeOfType('number')
                expect(description).toBeOfType('string')
                expect(price).toBeOfType('number')
                expect(url).toBeOfType('string')

                done()
            })
        })
    })
})
const { random } = Math

describe('SPEC retrieveTracks()', () => {
    describe('when the track id exist',() => {
        let fullname, email, password, token, spotyToken, id

        beforeEach(done =>{
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`

            call ('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            JSON.stringify({fullname, username: email, password}),
            function (status, response){
                expect(status).toBe(201)
                expect(response.length).toBe(0)

                call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                { 'Content-type': 'application/json' },
                JSON.stringify({username: email, password}),
                function(status, response){
                    expect(status).toBe(200)
                    expect(response.length).toBeGreaterThan(0)

                    token = JSON.parse(response).token

                    expect(token.length).toBeGreaterThan(0)

                    id = ["5fcxVCOtfesNzI2n4Y4kiJ", "4u7EnebtmKWzUH433cf5Qv", "5T8EDUDqKcs6OSOwEsfqG7", "5vdp5UmvTsnMEMESIF2Ym7", "1HKl3RJInVzf5ObVnM644j", "2fuCquhmrzHpu5xcA1ci9x", "4pbJqGIASGPr0ZpGpnWkDn"].random()
                    spotyToken = "BQCpP-LaSkWpP0mWHyuINBBDnIHfhyzVdnV_1SHJ3eLm-x5zVcP7uVodRVa5dIkZcjHkGRap4-wdgWJAlMOvjGBcIui4oh0El-XO_zjQC6N3rB0Y06-VU497Nwg7TvU9CDSdR-Y2Pa0L-OIwq4pJAfZo8yrEDuc"

                    done()
                })

            })
        
        })

        it('should succeed on matching id', done =>{
            retrieveTrack(token, spotyToken, id, (error, track) => {
                expect(error).toBeNull()

                expect(track).toBeDefined()

                console.log(track)

                const { id, song, preListening, album, artist, favourite} = track

                expect(id).toBeOfType('string')
                expect(song).toBeOfType('string')
                //expect(preListening).toBeOfType('string')
                expect(album).toBeOfType('string')
                expect(artist).toBeOfType('string')
                expect(favourite).toBeFalse()


                done()

            })

        })
        afterEach(done => {
            call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                JSON.stringify({ password }),
                function (status, response) {
                    expect(status).toBe(204)
                    expect(response.length).toBe(0)

                    done()
                }
            )
        })
    })

})
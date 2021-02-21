const { expect } = require('chai')
const call = require('./call')
const { XMLHttpRequest } = require('xmlhttprequest')

global.XMLHttpRequest = XMLHttpRequest

describe('call', () => {
    describe('when using callbacks', () => {
        describe('when url is valid', () => {
            let url

            beforeEach(() => {
                url = 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?color=gold'
            })

            it('should succeed on correct url', done =>
                call('GET', url, {}, '', (error, response) => {
                    expect(error).to.be.null

                    const { status, body } = response

                    expect(status).to.equal(200)
                    expect(body).to.be.a('string')

                    done()
                })
            )
        })

        describe('when url is invalid', () => {
            let url

            beforeEach(() => {
                url = 'NonValidUrlThatIJustMadeUp'
            })

            it('should fail on invalid url', done =>
                call('GET', url, {}, '', (error, response) => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal('network error')

                    expect(response).to.be.undefined

                    done()
                })
            )
        })
    })

    describe('when using promises (non callbacks)', () => {
        describe('when url is valid', () => {
            let url

            beforeEach(() => {
                url = 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?color=gold'
            })

            it('should succeed on correct url', () =>
                call('GET', url, {}, '')
                    .then(response => {
                        const { status, body } = response

                        expect(status).to.equal(200)
                        expect(body).to.be.a('string')
                    })
            )
        })

        describe('when url is invalid', () => {
            let url

            beforeEach(() => {
                url = 'asdfasdfasfasdf'
            })

            it('should fail on invalid url', () =>
                call('GET', url, {}, '')
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('network error')
                    })
            )
        })
    })
}) 
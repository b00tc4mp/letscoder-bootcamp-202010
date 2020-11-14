const { expect } = require('chai')
const retieveUser = require('./retrieve-user.js')
const fs = require('fs')


describe ('retrieveUser()', () => {
    describe('when id already exists', () =>{
        let id, fullname , email , password , file;
        

        beforeEach(done => {
            id = createId()
        })
    })

})


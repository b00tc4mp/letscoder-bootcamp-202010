describe('SPEC retrieve_movie()', function () {
    const { random } = Math
    
        describe("when callback is a not a function", function () {
        let token, id, language, callback;
    
        beforeEach(function () {
          id = random().toString()
          language = ["es", "fr", "it", "de", "en"].random()
          callback = [1, true, null, undefined, {}, [], 'string', new Date].random()
        })
    
        it("should fail if callback is not a function", function () {
             expect(function () {
             retrieveMovie(token, id, language, callback)
          }).toThrowError(TypeError, `${callback} is not a callback`)
    
        })
    
    
      })
//---------------------------------------------------------------------------------------------------
    describe("when token is a not string", function () {
        let token, id, language ;

        beforeEach(function () {
            token = [1, true, null, undefined, {}, []].random()
            id = random().toString()
            language = ["es","en","de","it","fr"].random()

        });

        it("should fail if token is not a string", function () {
            expect(function () {
                retrieveMovie(token, id, language, function () { });
            }).toThrowError(TypeError, `${token} is not a token`);
        });
    })
//---------------------------------------------------------------------------------
  describe('when token is empty or blank', function () {
    let token, id , language

    beforeEach(function () {
        token = ['', ' ', '\t', '\n'].random()
        id = random().toString()
        language = ["es","en","de","it","fr"].random()
    })

    it('should fail on empty or blank token', function () {
        expect(function () {
            retrieveMovie(token, id, language, function () { })
        }).toThrowError(Error, 'token is empty or blank')
    })
})
//---------------------------------------------------------------------------------
describe("when id is not a number", function () {
    let id, language;
    beforeEach(function () {
      id = [true, null, undefined, 'string', {}, []].random()
      language = ["es", "fr", "it", "de", "en"].random()
    })

    it("should fail if page is not a number", function () {
      expect(function () {
        retrieveMovie(id, language, function () { });
      }).toThrowError(TypeError, `${id} is not a number`)
    })
  })
//----------------------------------------------------------------------------------

/* describe("when language is not a string", function () {
    let  id, language ;

    beforeEach(function () {
      id = random().toString()
      language = [1, true, null, undefined, {}, [], new Date].random()
    })

    it("should fail if language is not a string", function () {
      expect(function () {
        retrieveMovie(id, language, function(){ });
      }).toThrowError(TypeError, `${language} is not a string`)

    })
  }) */

  //--------------------------------------------------------------------------------------------
}) 

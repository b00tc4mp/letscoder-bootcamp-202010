describe('SPEC retrieveNewMovies()', function () {
    const { random } = Math
  
    describe("when callback is a not a function", function () {
      let page, language, callback;
  
      beforeEach(function () {
        page = [1, 5, 7, 9, 0, 3, 2, 4, 7, 23, 45, 67, 89, 94].random()
        language = ["es", "fr", "it", "de", "en"].random()
        callback = [1, true, null, undefined, {}, [], 'string', new Date].random()
      })
  
      it("should fail if callback is not a function", function () {
        expect(function () {
          retrieveNewMovies(page, language, callback);
        }).toThrowError(TypeError, `${callback} is not a callback`)
  
      })
  
  
    })
  
    describe("when page is not a number", function () {
      let page, language;
      beforeEach(function () {
        page = [true, null, undefined, 'string', {}, []].random()
        language = ["es", "fr", "it", "de", "en"].random()
      })
  
      it("should fail if page is not a number", function () {
        expect(function () {
          retrieveNewMovies(page, language, function () { });
        }).toThrowError(TypeError, `${page} is not a number`)
      })
    })
  
    describe("when language is not a string", function () {
      let page, language;
  
      beforeEach(function () {
        page = Math.floor(Math.random() * 10) + 1
        language = [1, true, null, undefined, {}, [], new Date].random()
      })
  
      it("should fail if language is not a string", function () {
        expect(function () {
          retrieveNewMovies(page, language, function(){});
        }).toThrowError(TypeError, `${language} is not a string`)
  
      })
    })
  
  
    describe("when retrieve upcoming movies is success", function () {
      let page;
  
      beforeEach(function () {
        page = Math.floor(Math.random() * 10) + 1
        language = ["es", "fr", "it", "de", "en"].random()
      })
  
  
      it("should get a movies", function (done) {
  
        retrieveNewMovies(page, language, function (error) {
          expect(error).toBeNull()
          done()
        })
  
      })
  
    })
  
    //----------------------------------------------------------------------------------------------
  
  
  
  })
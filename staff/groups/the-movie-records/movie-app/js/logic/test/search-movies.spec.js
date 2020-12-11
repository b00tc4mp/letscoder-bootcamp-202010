describe('SPEC searchMovies()', function(){
    const {random, floor} = Math


describe("when search movies is success", function(){
    let query, page, language;

    beforeEach(function(){
    query = ["cars", "capitan america", "transformers"].random()
    page = floor(random() * 10) + 1
    language = ["es", "en", "fr", "de", "it"].random()

    })


    it("should retrieve a movies", function(done){
        searchMovies(query, page, language, function(error,movies){
        expect(error).toBeNull()
        expect(movies).toBeDefined()
        done()

        })
    
    })
})




})
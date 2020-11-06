describe('SPEC retrieveMovies()', function() {
    describe('when query provides results', function (){
        let query

        beforeEach(function() {
            query = ['fast', 'big', 'borat', 'moon', 'witches'].random();
        })

        it ('should succeed on matching query', function(done) {
            retrieveMovies(query, function(error, movies) {
                expect(error).toBeNull();

                expect(movies).toBeDefined();
                expect(movies).toBeInstanceOf(Array);
                expect(movies.length).toBeGreaterThan(0);

                movies.forEach(movie => {
                    const { title, poster_path: image } = movie
            
                    expect(title).toBeInstanceOf(String);
                    expect(image).toBeInstanceOf(String);
                    
                });

                done();
            })
        })
    })

    describe('when query provides no results', function() {
        let query;

        beforeEach(function() {
            query = ['dsggsds','yhgvdfsd','fdfgjgfj','asdafsa','dfbdfhd'].random();
        })

        it('should succeed providing no results or, empty array, on non-matching query', function(done) {
            retrieveMovies(query, function(error, movies) {
                expect(error).toBeNull();

                expect(movies).toBeDefined();
                expect(movies).toBeInstanceOf(Array);
                expect(movies.length).toBe(0);

                done();
            })
        })
    })
})
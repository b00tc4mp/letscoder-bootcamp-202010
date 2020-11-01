describe('SPEC retrieveMovie()', () => {
    describe('when the movie id exists', () => {
        let movieId;

        beforeEach(() => {
            movieId = [378112, 2185, 539617, 416477, 11870].random();
        })

        it ('should succed on matching id', done => {
            retrieveMovie(movieId, (error, movie) => {
                expect(error).toBeNull();

                expect(movie).toBeDefined();

                const {movieId, title, poster_path: image, release_date: date, vote_average, overview} = movie;
            
                    expect(movieId).toBeInstanceOf(Number);
                    expect(title).toBeInstanceOf(String);
                    expect(image).toBeInstanceOf(String);
                    expect(date).toBeInstanceOf(String);
                    expect(vote_average).toBeInstanceOf(Number);
                    expect(overview).toBeInstanceOf(String);

                    done();
            })
        })
    })

    describe('when the movie id does not exist', () => {
        let movieId;

        beforeEach(() => {
            movieId = [835567732432432, 2346787687632, 654354645654, 8956768778623];
        })

        it('should succeed resulting in error on non-matching id', done => {
            retrieveMovie(movieId, (error, movie) => {
                expect(error).toBeDefined('The resource you requested could not be found.')

                expect(movie).toBeNull();

                done();
            })
        })
    })
})
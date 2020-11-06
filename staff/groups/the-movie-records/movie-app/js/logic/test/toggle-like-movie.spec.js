describe('SPEC toggle_like_movie',function (){
const {random} = Math

describe("when token is a not string", function () {
    let token, movieid;

    beforeEach(function () {
        token = [1, true, null, undefined, {}, []].random()
        movieid = random().toString()

    });

    it("should fail if token is not a string", function () {
        expect(function () {
            toggleLikeMovie(token, movieid, function () { });
        }).toThrowError(TypeError, `${token} is not a token`);
    });
})

})
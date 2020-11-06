describe("SPEC retrieveMovie()", () => {
  describe("when the movie id exists", () => {
    let movieId, fullname, email, password, token;

    beforeEach((done) => {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@mail.com`;
      password = `password-${random()}`;

      call(
        "POST",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        { "Content-type": "application/json" },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
          expect(status).toBe(201);
          expect(response.length).toBe(0);

          call(
            "POST",
            "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
            { "Content-type": "application/json" },
            JSON.stringify({ username: email, password }),
            function (status, response) {
              expect(status).toBe(200);
              expect(response.length).toBeGreaterThan(0);

              token = JSON.parse(response).token;

              expect(token.length).toBeGreaterThan(0);

              movieId = [378112, 2185, 539617, 416477, 11870].random();

              done();
            }
          );
        }
      );
    });

    it("should succed on matching id", (done) => {
      retrieveMovie(movieId, token, (error, movie) => {
        expect(error).toBeNull();

        expect(movie).toBeDefined();

        const {
          id: movieId,
          title,
          poster_path: image,
          release_date: date,
          vote_average,
          overview,
        } = movie;

        expect(id).toBe(movieId);
        expect(movieId).toBeInstanceOf(Number);
        expect(title).toBeInstanceOf(String);
        expect(image).toBeInstanceOf(String);
        expect(date).toBeInstanceOf(String);
        expect(vote_average).toBeInstanceOf(Number);
        expect(overview).toBeInstanceOf(String);

        done();
      });
    });

    afterEach((done) => {
      call(
        "DELETE",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        JSON.stringify({ password }),
        function (status, response) {
          expect(status).toBe(204);
          expect(response.length).toBe(0);

          done();
        }
      );
    });
  });

  describe("when the movie id does not exist", () => {
    let fullname, email, password, token, movieId;

    beforeEach((done) => {
      fullname = `fullname-${random()}`;
      email = `email-${random()}@mail.com`;
      password = `password-${random()}`;

      call(
        "POST",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        { "Content-type": "application/json" },
        JSON.stringify({ fullname, username: email, password }),
        function (status, response) {
          expect(status).toBe(201);
          expect(response.length).toBe(0);

          call(
            "POST",
            "https://b00tc4mp.herokuapp.com/api/v2/users/auth",
            { "Content-type": "application/json" },
            JSON.stringify({ username: email, password }),
            function (status, response) {
              expect(status).toBe(200);
              expect(response.length).toBeGreaterThan(0);

              token = JSON.parse(response).token;

              expect(token.length).toBeGreaterThan(0);

              movieId = [8332432, 26787632, 654355654, 895676623].random();

              done();
            }
          );
        }
      );
    });
    it("should result in error on non-matching id", (done) => {
      retrieveMovie(movieId, (error, movie) => {
        expect(error).toBeDefined(
          "The resource you requested could not be found."
        );

        expect(movie).toBeNull();

        done();
      });
    });

    afterEach((done) => {
      call(
        "DELETE",
        "https://b00tc4mp.herokuapp.com/api/v2/users",
        {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        JSON.stringify({ password }),
        function (status, response) {
          expect(status).toBe(204);
          expect(response.length).toBe(0);

          done();
        }
      );
    });
  });
});

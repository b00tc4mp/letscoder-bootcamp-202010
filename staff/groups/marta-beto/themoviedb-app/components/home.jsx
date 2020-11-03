const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentWillMount = () => {
        retrieveUser(this.props.token, (error, user) => {
            if (error) return alert(error.message)

            retrieveTrendingMovies((error, trendingMovies) => {
                if (error) return alert(error.message)
    
                this.setState({trendingMovies, user})
            })
        })
    }

    handleGoToProfile = () => {
        this.setState({ view: 'profile' })
    }

    handleModifyUser = (fullname, image) => {
        modifyUser(this.props.token, { fullname, image }, error => {
            if (error) alert(error.message)

            retrieveUser(this.props.token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ user })
            })
        })
    }

    handleSearchMovies = query => {
        try {
        searchMovies(query, (error, movies) => {
            if (error) return alert(error.message)
            const pathPoster = 'https://image.tmdb.org/t/p/w500';

            const searchMoviePosters = movies.map(movie => (pathPoster + movie.poster_path))

            this.setState({ searchMoviePosters, query })
        })
        } catch (error) {
            alert(error.message)
        }
    }


    handleGoToMovie = movieId => {
        retrieveMovie(movieId, (error, movie) => {
            if (error) return alert(error.message)
            
            const {id, title, poster_path: image, genre_ids: genreIds, release_date: date, overview} = movie // all the details from the movice we want to show (movie destructuring)

            this.setState({movie: {id, title, image, genreIds, date, overview}})
        })
    }

    // handleOnGenre = genreId => {
    //     retrieveMoviesByGenre(genreId, (error, movies) => {
    //         // TODO
    //     })
    // }

    handleLike = movieId => {
        toggleLikeMovie(this.props.token, movieId, error => {
            if (error) return alert(error.message)

            this.handleSearchMovies(this.state.query)
        })
    }



    render() {

        const {state: {view, user, movie, trendingMovies, searchMoviePosters}, handleModifyUser, handleSearchMovies, handleGoToProfile, handleLike, handleGoToMovie} = this
        return <>
        {user && <Welcome name={user.fullname}/>}

        <button onClick={handleGoToProfile} className="profile__btn">Profile</button>

        {view === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} avatar={user.avatar}/>}

        <Search onSearch={handleSearchMovies}/>

        <Dropdown />

        {searchMoviePosters && <Carousel images={searchMoviePosters} title="Your search" onMovie={handleGoToMovie}/>}

        {trendingMovies && <Carousel movies={trendingMovies} title="Trending movies" onMovie={handleGoToMovie}/>}

        {/* {moviesByGenre && <Carousel images={moviesByGenre} title="Selected genre" onMovie={movie}/>} */}

        {movie && <Detail item={movie}/>}

        </>
    }
}
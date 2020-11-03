const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentWillMount = () => {
        //const { token } = sessionStorage

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
        //const {token} = sessionStorage

        modifyUser(this.props.token, { fullname, image }, error => {
            if (error) alert(error.message)

            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ user })
            })
        })
    }

    handleSearchMovies = query => {
        
        try {
        searchMovies(query, (error, movies) => {
            if (error) return alert(error.message)
            const locationPath = 'https://image.tmdb.org/t/p/w500';

            const moviesSearch = movies.map(({id, poster_path}) => ({id, image: locationPath + poster_path}))

            this.setState({ moviesSearch, query })
        })
        } catch (error) {
            alert(error.message)
        }
    }


    handleGoToMovie = movieId => {
        retrieveMovie(movieId, (error, movie) => {
            if (error) return alert(error.message)
            const genre = movie.genres[0].name
            
            const {id, title, poster_path: image, release_date: date, overview, like} = movie // all the details from the movie we want to show (movie destructuring)

            this.setState({movie: {id, title, image, date, overview, like, genre}})
        })
    }

    // handleOnGenre = genreId => {
    //     retrieveMoviesByGenre(genreId, (error, movies) => {
    //         // TODO
    //     })
    // }

    handleLike = movieId => {
        //const { token } = sessionStorage

        toggleLikeMovie(this.props.token, movieId, error => {
            if (error) return alert(error.message)

                searchMovieId(this.props.token, movieId, (error, movie) => {
                    if (error) return alert(error.message)

                    //this.setState({movie})
                })
        })
    }

    render() {

        const {state: {view, user, movie, trendingMovies, moviesSearch}, handleModifyUser, handleSearchMovies, handleGoToProfile, handleLike, handleGoToMovie} = this
        return <>
        {user && <Welcome name={user.fullname}/>}

        <button onClick={handleGoToProfile} className="profile__btn">Profile</button>

        {view === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} avatar={user.avatar}/>}

        <Search onSearch={handleSearchMovies}/>

        <Dropdown />

        {moviesSearch && <Carousel movies={moviesSearch} title="Your search" onMovie={handleGoToMovie}/>}

        {trendingMovies && <Carousel movies={trendingMovies} title="Trending movies" onMovie={handleGoToMovie}/>}

        {/* {moviesByGenre && <Carousel images={moviesByGenre} title="Selected genre" onMovie={movie}/>} */}

        {movie && <Detail item={movie} onLike={handleLike}/>}

        </>
    }
}
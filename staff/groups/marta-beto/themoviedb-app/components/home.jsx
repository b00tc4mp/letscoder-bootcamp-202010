const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    UNSAFE_componentWillMount = () => {
        //const { token } = sessionStorage

        retrieveUser(this.props.token, (error, user) => {
            if (error) return alert(error.message)

            retrieveUpcomingMovies((error, upcomingMovies) => {
                if (error) return alert(error.message)


                retrieveTrendingMovies((error, trendingMovies) => {
                if (error) return alert(error.message)
    
                    this.setState({ subview: 'home', trendingMovies, upcomingMovies, user })
            })

            })
        })
    }

    handleModifyUser = (fullname, avatar) => {
        //const {token} = sessionStorage

        modifyUser(this.props.token, { fullname, avatar }, error => {
            if (error) alert(error.message)

            retrieveUser(this.props.token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ user })
            })
        })
    }

    handleSearchMovies = query => {
        
        try {
        retrieveMovies(query, (error, movies) => {
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
        retrieveMovie(movieId, this.props.token, (error, movie) => {
            if (error) return alert(error.message)
            const genre = movie.genres[0].name
            
            const {id, title, poster_path: image, vote_average: vote, release_date: date, overview, like} = movie // all the details from the movie we want to show (movie destructuring)

            this.setState({movie: {id, title, image, date, vote, overview, like, genre}})
        })
        this.setState({subview: 'detail'})
    }

    handleLike = (movieId) => {
        //const { token } = sessionStorage

        toggleLikeMovie(this.props.token, movieId, error => {
            if (error) return alert(error.message)

                this.handleGoToMovie(movieId)                        
        })
    }

    handleGoToProfile = () => {
        
        retrieveLikedMovies(this.props.token, (error, likedMovies) => {
            if (error) alert (error.message)

            this.setState({ subview: 'profile', likedMovies})
        })
    }

    handleGoToHome = () => this.setState( {subview: 'home'} )

    render() {

        const {state: {subview, user, movie, trendingMovies, moviesSearch, upcomingMovies, likedMovies}, handleGoToHome,handleModifyUser, handleSearchMovies, handleGoToProfile, handleLike, handleGoToMovie} = this
        return <>
        {user && <Welcome name={user.fullname}/>}

        <button onClick={handleGoToProfile} className="profile__btn btn">Profile</button>

        {(subview === 'profile' || subview === 'detail') && <button onClick={handleGoToHome} className="back__btn btn">Home</button>}

        {subview === 'profile' && <Profile onModify={handleModifyUser} title="Favorite movies" fullname={user.fullname} avatar={user.avatar} likes={likedMovies} onMovie={handleGoToMovie}/>}


        {/* <Dropdown /> */}

        {subview === 'home' && <>
            <Search onSearch={handleSearchMovies}/>

            {moviesSearch && <Carousel movies={moviesSearch} title="Your search" onMovie={handleGoToMovie}/>}

            {upcomingMovies && <Carousel movies={upcomingMovies} title="Upcoming movies" onMovie={handleGoToMovie}/>}

            {trendingMovies && <Carousel movies={trendingMovies} title="Trending movies" onMovie={handleGoToMovie}/>} 
        </> }

        {subview === 'detail' && movie && <Detail item={movie} onLike={handleLike}/>}

        </>
    }
}
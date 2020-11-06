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

                retrieveTvTopRated((error, tvTopRated)=>{
                    if (error) return alert(error.message)

                retrievePopularPeople((error, popularPeople) => {
                    if (error) return alert(error.message)
                

                    this.setState({ subview: 'home', trendingMovies, upcomingMovies, popularPeople, tvTopRated, user })
                })
                
                })
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
            
            this.setState({ moviesSearch })
        })
        } catch (error) {
            alert(error.message)
        }
    }


    handleGoToMovie = movieId => {
        retrieveMovie(movieId, this.props.token, (error, movie) => {
            if (error) return alert(error.message)
            const genre = movie.genres[0].name
            
            const {id, title, poster_path: image, vote_average: vote, release_date: date, homepage, overview, like} = movie // all the details from the movie we want to show (movie destructuring)

            this.setState({movie: {id, title, image, date, vote, overview, like, homepage, genre}})
        })
        this.setState({subview: 'detail-movie'})
    }

    handleGoToShow = showId => {
        retrieveShow(showId ,this.props.token, (error, show) => {
            if (error) return alert(error.message)

            const {id, name: title, poster_path: image, vote_average: vote, first_air_date: date, overview, like} = show

            this.setState({show: {id, title, image, date, vote, overview, like}})
        })
        this.setState({subview: 'detail-movie'})
    }

    handleGoToPerson = personId => {
        retrievePerson(personId ,(error, person) => {
            if (error) return alert(error.message)

            const {name, profile_path: image, birthday, place_of_birth: birthPlace, biography} = person

            this.setState({person: {name, image, birthday, birthPlace, biography}})
        })
        this.setState({subview: 'detail-person'})
    }

    handleLike = (movieId) => {
        //const { token } = sessionStorage

        toggleLikeMovie(this.props.token, movieId, error => {
            if (error) return alert(error.message)

                this.handleGoToMovie(movieId)                        
        })
    }

    
    handleGoToProfile = () =>  {
        retrieveLikedMovies(this.props.token, (error, likedMovies) => {
            if (error) alert (error.message)
    
            this.setState({subview: 'profile', likedMovies})
            })

    }

    handleGoToHome = () => this.setState( {subview: 'home'} )

    render() {

        const {state: {subview, user, movie, trendingMovies, moviesSearch, upcomingMovies, likedMovies, tvTopRated, show, popularPeople, person}, handleGoToHome, handleModifyUser, handleSearchMovies, handleGoToProfile, handleLike, handleGoToMovie, handleGoToShow, handleGoToPerson} = this
        return <>
        {user && <Welcome name={user.fullname}/>}

        <button onClick={handleGoToProfile} className="profile__btn btn">Profile</button>

        {(subview === 'profile' || subview === 'detail-movie' || subview === 'detail-person') && <button onClick={handleGoToHome} className="back__btn btn">Home</button>}

        {subview === 'profile' && <Profile onModify={handleModifyUser} title="Favorite movies" fullname={user.fullname} avatar={user.avatar} likes={likedMovies} onItem={handleGoToMovie}/>}

        {subview === 'home' && <>

            <Search onSearch={handleSearchMovies}/>

            {moviesSearch && <Carousel items={moviesSearch} title="Your search" onItem={handleGoToMovie}/>}

            {trendingMovies && <Carousel items={trendingMovies} title="Trending movies" onItem={handleGoToMovie}/>}

            {popularPeople && <Carousel items={popularPeople} title="Popular people" onItem={handleGoToPerson}/>} 

            {upcomingMovies && <Carousel items={upcomingMovies} title="Upcoming movies" onItem={handleGoToMovie}/>} 

            {tvTopRated && <Carousel items={tvTopRated} title="Top Rated TV" onItem={handleGoToShow}/>}
        </> }
        {subview === 'detail-person' && (person) && <DetailPerson person={person}/>}

        {subview === 'detail-movie' && (movie || show) && <Detail item={movie || show} onLike={handleLike}/>}

        </>
    }
}
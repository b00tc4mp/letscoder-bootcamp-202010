const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentWillMount = () => {
        retrieveUser(this.props.token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
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
        searchMovie(query, (error, movies) => {
            if (error) return alert(error.message)

            movies = movies.map(({movieId, poster_path: url}) => ({movieId, url}))

            this.setState({ movies, query })
        })
        } catch (error) {
            alert(error.message)
        }
    }

    handleGoToMovie = movieId => {
        retrieveMovie(movieId, (error, movie) => {
            if (error) return alert(error.message)

            const {title, url, genre, date, like, description} = movie // all the details from the movice we want to show (movie destructuring)

            this.setState({subview: 'detail'}, {movie: {title, url, genre, date, like, description}})
        })
    }

    handleTrendingMovies = () => {
        showTrending(error, trending => {
            if (error) return alert(error.message)

            // TODO

        })
    }

    handleLike = movieId => {
        toggleLikeMovie(this.props.token, movieId, error => {
            if (error) return alert(error.message)

            this.handleSearchMovies(this.state.query)
        })
    }



    render() {

        const {state: {subview, view, user, movies, movie}, handleModifyUser, handleSearchMovies, handleGoToProfile, handleLike, handleGoToMovie} = this
        return <>
        {user && <Welcome name={user.fullname}/>}

        <button onClick={handleGoToProfile} className="profile__btn">Profile</button>

        {view === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} avatar={user.avatar}/>}

        <Search onSearch={handleSearchMovies}/>

        <Dropdown />

        <Carousel onMovie={movie}/>

        {subview === 'detail' && movie && <Detail item={movie}/>}

        </>
    }
}
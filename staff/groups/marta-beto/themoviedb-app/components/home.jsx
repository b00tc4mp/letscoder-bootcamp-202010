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

    handleSearchMovies = (query) => {
        try {
        searchMovie(query, (error, movies) => {
            if (error) return alert(error.message)

            // here goes the list of movies using map array method

            this.setState({ movies })
        })
        } catch ({message}) {
            alert(message)
        }
    }

    handleGoToMovie = movieId => {
        retrieveVehicle(movieId, (error, movie) => {
            if (error) return alert(error.message)

            const { } = movie // all the details from the movice we want to show (movie destructuring)

            this.setState({ movie: { } })
        })
    }

    handleLike = movieId => {
        toggleLikeMovie(this.props.token, movieId, error => {
            if (error) return alert(error.message)

            this.handleSearchMovies(this.state.query)
        })
    }



    render() {

        const {state: {view, user, movies}, handleModifyUser, handleSearchMovies, handleGoToProfile} = this
        return <>
        {user && <Welcome name={user.fullname}/>}

        <button onClick={handleGoToProfile} className="profile__btn">Profile</button>

        {view === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} avatar={user.avatar}/>}

        <Search />

        <Dropdown />

        <Carousel />

        </>
    }
}
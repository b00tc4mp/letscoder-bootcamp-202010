const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = { subview: 'search'}
    }

    componentWillMount() {
        const { token } = sessionStorage

        retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
    }

    handleGoToProfile = () => {
        this.setState( { subview: 'profile' } )
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

    // Gets the query from 'Search' compo and pass it to 'searchVehicles' to make the 'call' to the API. 
    // After the call, we get a response for the callback to do something with it.
    // If success, the callback will return a new array (array map method) 'vehicles' providing some features of each vehicle (id, title, image and price).
    handleSearchVehicles = query => {
        const { token } = sessionStorage
        try {
            searchVehicles(token, query, (error, vehicles) => {
                if (error) return alert(error.message)

                vehicles = vehicles.map(({ id, name: title, thumbnail: image, price, like }) => ({ id, title, image, price, like }))

                this.setState({ vehicles, vehicle: undefined, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    }

    handleGoToVehicle = vehicleId => {
        const { token } = sessionStorage
        retrieveVehicle(token, vehicleId, (error, vehicle) => {
            if (error) return alert(error.message)

            const { id, name: title, year, description: preview, price, url, image } = vehicle

            this.setState({ vehicle: { id, title, year, preview, price, url, image } })
        })
    }

    handleLike = vehicleId => {
        const { token } = sessionStorage
        toggleLikeVehicle(token, vehicleId, error => {
            if (error) return alert(error.message)

            const { state: { vehicle } } = this

            if (vehicle)
                this.handleGoToVehicle(vehicleId)
            else
                this.handleSearchVehicles(this.state.query)
        })
    }

    handleGoToLikes = () => {
        const { token } = sessionStorage

        retrieveLikedVehicles(token, (error, likedVehicles) => {
            if (error) alert(error.message)

            this.setState({ subview: 'likes', likedVehicles })
        })
    }

    handleGoToSearch = () => this.setState({ subview: 'search' })

    render() {
        const { state: { subview, vehicles, vehicle, user }, handleGoToProfile, handleModifyUser, handleSearchVehicles, handleGoToVehicle, handleLike, handleGoToSearch, handleGoToLikes } = this

        return <>
            {user && <Welcome name={user.fullname} image={user.image} />}

            <button onClick={handleGoToSearch}>Search</button>

            <button onClick={handleGoToLikes}>Likes</button>

            <button onClick={handleGoToProfile}>Profile</button>

            {subview === 'likes' && <Results items={this.state.likedVehicles} currency="$" />}

            {subview === 'search' && <>
                <Search onSearch={handleSearchVehicles} />

                {!vehicle && vehicles && <Results items={vehicles} currency="$" onItem={handleGoToVehicle} onLike={handleLike} />}

                { vehicle && <Detail item={vehicle} currency="$" onLike={handleLike} />}
            </>}

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}
        </>
    }
}
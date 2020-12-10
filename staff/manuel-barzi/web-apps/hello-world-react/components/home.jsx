const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = { subview: 'search' }
    }

    componentWillMount() {
        const { token } = sessionStorage

        retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
    }

    handleGoToProfile = () => {
        this.setState({ subview: 'profile', vehicle: undefined })
    }

    handleModifyUser = (fullname, image) => {
        const { token } = sessionStorage

        modifyUser(token, { fullname, image }, error => {
            if (error) alert(error.message)

            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ user })
            })
        })
    }

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

            const { id, name: title, year, description: preview, price, url, image, like } = vehicle

            this.setState({ vehicle: { id, title, year, preview, price, url, image, like } })
        })
    }

    handleLike = vehicleId => {
        const { token } = sessionStorage

        toggleVehicleLike(token, vehicleId, error => {
            if (error) return alert(error.message)

            const { state: { vehicle, vehicles, likedVehicles } } = this

            if (vehicle)
                this.handleGoToVehicle(vehicleId)
            else {
                vehicles && this.handleSearchVehicles(this.state.query)

                likedVehicles && this.handleGoToLikes()
            }
        })
    }

    handleGoToLikes = () => {
        const { token } = sessionStorage

        retrieveLikedVehicles(token, (error, likedVehicles) => {
            if (error) alert(error.message)

            this.setState({ subview: 'likes', likedVehicles, vehicle: undefined })
        })
    }

    handleGoToSearch = () => this.setState({ subview: 'search', vehicle: undefined })

    render() {
        const { state: { subview, vehicles, vehicle, user, likedVehicles }, handleGoToProfile, handleModifyUser, handleSearchVehicles, handleGoToVehicle, handleLike, handleGoToLikes, handleGoToSearch } = this

        return <>
            {user && <Welcome name={user.fullname} image={user.image} />}

            <button onClick={handleGoToSearch}>Search</button>

            <button onClick={handleGoToLikes}>Likes</button>

            <button onClick={handleGoToProfile}>Profile</button>

            {subview === 'likes' && <>
                {!vehicle && likedVehicles && <Results items={likedVehicles} currency="$" onItem={handleGoToVehicle} onLike={handleLike} />}

                { vehicle && <Detail item={vehicle} currency="$" onLike={handleLike} />}
            </>}

            {subview === 'search' && <>
                <Search onSearch={handleSearchVehicles} />

                {!vehicle && vehicles && <Results items={vehicles} currency="$" onItem={handleGoToVehicle} onLike={handleLike} />}

                { vehicle && <Detail item={vehicle} currency="$" onLike={handleLike} />}
            </>}

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}
        </>
    }
}
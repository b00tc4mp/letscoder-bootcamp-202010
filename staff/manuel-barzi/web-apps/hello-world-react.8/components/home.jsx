const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentWillMount() {
        const { token } = sessionStorage

        retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
    }

    handleGoToProfile = () => {
        this.setState({ subview: 'profile' })
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
        retrieveVehicle(vehicleId, (error, vehicle) => {
            if (error) return alert(error.message)

            const { id, name: title, year, description: preview, price, url, image } = vehicle

            this.setState({ vehicle: { id, title, year, preview, price, url, image } })
        })
    }

    handleLike = vehicleId => {
        const { token } = sessionStorage
        
        toggleLikeVehicle(token, vehicleId, error => {
            if (error) return alert(error.message)

            this.handleSearchVehicles(this.state.query)
        })
    }

    render() {
        const { state: { subview, vehicles, vehicle, user }, handleGoToProfile, handleModifyUser, handleSearchVehicles, handleGoToVehicle, handleLike } = this

        return <>
            {user && <Welcome name={user.fullname} image={user.image} />}

            <button onClick={handleGoToProfile}>Profile</button>

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}

            <h2>Vehicles</h2>

            <Search onSearch={handleSearchVehicles} />

            {!vehicle && vehicles && <Results items={vehicles} currency="$" onItem={handleGoToVehicle} onLike={handleLike} />}

            { vehicle && <Detail item={vehicle} currency="$" />}
        </>
    }
}
const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    handleGoToProfile = () => {
        this.setState( { subview: 'profile' } )
    }

    handleModifyUser = (fullname, image) => {
        modifyUser(this.state.token, { fullname, image }, error => {
            if (error) alert(error.message)

            retrieveUser(this.state.token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ user })
            })
        })
    }

    // Gets the query from 'Search' compo and pass it to 'searchVehicles' to make the 'call' to the API. 
    // After the call, we get a response for the callback to do something with it.
    // If success, the callback will return a new array (array map method) 'vehicles' providing some features of each vehicle (id, title, image and price).
    handleSearchVehicles = query => {
        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) return alert(error.message)

                vehicles = vehicles.map(({ id, name: title, thumbnail: image, price }) => ({ id, title, image, price }))

                this.setState({ vehicles, vehicle: undefined })
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

    render() {
        const { state: { subview, vehicles, vehicle }, props: { user }, handleGoToProfile, handleModifyUser, handleSearchVehicles, handleGoToVehicle } = this

        return <>
            {user && <Welcome name={user.fullname} image={user.image} />}

            <button onClick={handleGoToProfile}>Profile</button>

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}

            <h2>Vehicles</h2>

            <Search onSearch={handleSearchVehicles} />

            {!vehicle && vehicles && <Results items={vehicles} currency="$" onItem={handleGoToVehicle} />}

            { vehicle && <Detail item={vehicle} currency="$" />}
        </>
    }
}
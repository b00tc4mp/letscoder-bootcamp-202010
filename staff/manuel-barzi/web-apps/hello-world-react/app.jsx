class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'access' }

        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToHome = this.handleGoToHome.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleGoToProfile = this.handleGoToProfile.bind(this)
        this.handleModifyUser = this.handleModifyUser.bind(this)
        this.handleSearchVehicles = this.handleSearchVehicles.bind(this)
        //this.handleGoToVehicle = this.handleGoToVehicle.bind(this)
    }

    handleGoToRegister() {
        this.setState({ view: 'register' })
    }

    handleGoToLogin() {
        this.setState({ view: 'login' })
    }

    handleGoToHome() {
        this.setState({ view: 'access' })
    }

    handleRegister(fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error) return alert(error.message)

            this.setState({ view: 'register-confirm' })
        }.bind(this))
    }

    handleLogin(email, password) {
        authenticateUser(email, password, function (error, token) {
            if (error) return alert(error.message)

            this.setState({ token })

            retrieveUser(token, function (error, user) {
                if (error) return alert(error.message)

                this.setState({ view: 'home', user })
            }.bind(this))
        }.bind(this))
    }

    handleGoToProfile() {
        this.setState({ subview: 'profile' })
    }

    handleModifyUser(fullname, image) {
        modifyUser(this.state.token, { fullname, image }, function (error) {
            if (error) alert(error.message)

            retrieveUser(this.state.token, function (error, user) {
                if (error) return alert(error.message)

                this.setState({ user })
            }.bind(this))
        }.bind(this))
    }

    handleSearchVehicles(query) {
        searchVehicles(query, function (error, vehicles) {
            if (error) return alert(error.message)

            vehicles = vehicles.map(({ id, name: title, thumbnail: image, price }) => ({ id, title, image, price }))

            this.setState({ vehicles, vehicle: undefined })
        }.bind(this))
    }

    handleGoToVehicle = vehicleId => {
        retrieveVehicle(vehicleId, (error, vehicle) => {
            if (error) return alert(error.message)

            const { id, name: title, year, description: preview, price, url, image } = vehicle

            this.setState({ vehicle: { id, title, year, preview, price, url, image } })
        })
    }

    render() {
        const { state: { view, subview, user, vehicles, vehicle }, handleGoToHome, handleGoToLogin, handleGoToProfile, handleGoToRegister, handleLogin, handleModifyUser, handleRegister, handleSearchVehicles, handleGoToVehicle } = this

        return <>
            <Title onHome={handleGoToHome} />

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

            {view === 'register' && <Register onRegister={handleRegister} />}

            {view === 'login' && <Login onLogin={handleLogin} />}

            {view === 'register-confirm' && <RegisterConfirm onLogin={handleGoToLogin} />}

            {view === 'home' && <>
                {user && <Welcome name={user.fullname} image={user.image} />}

                <button onClick={handleGoToProfile}>Profile</button>

                {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}

                <h2>Vehicles</h2>

                <Search onSearch={handleSearchVehicles} />

                {!vehicle && vehicles && <Results items={vehicles} currency="$" onItem={handleGoToVehicle} />}

                { vehicle && <Detail item={vehicle} currency="$" />}
            </>}
        </>
    }
}
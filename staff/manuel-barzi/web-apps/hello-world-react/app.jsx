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

            vehicles = vehicles.map(({ name: title, thumbnail: image }) => ({ title, image }))

            this.setState({ vehicles })
        }.bind(this))
    }

    render() {
        const { state: { view, subview, user, results, vehicles }, handleGoToHome, handleGoToLogin, handleGoToProfile, handleGoToRegister, handleLogin, handleModifyUser, handleRegister, handleSearch, handleSearchVehicles } = this

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

                {vehicles && <Results items={vehicles} />}
            </>}
        </>
    }
}
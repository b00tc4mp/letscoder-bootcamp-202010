class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'access' }

        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToHome = this.handleGoToHome.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSearchGoogle = this.handleSearchGoogle.bind(this)
        this.handleSearchVehicles = this.handleSearchVehicles.bind(this)
        this.handleGoToProfile = this.handleGoToProfile.bind(this)
        this.handleModifyUser = this.handleModifyUser.bind(this)
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

    handleSearchGoogle(query) {
        searchInGoogle(query, function (error, googleResults) {
            if (error) return alert(error.message)
            this.setState({ googleResults })
        }.bind(this))
    }

    handleSearchVehicles(query){
        searchVehicles(query,function (error,vehiclesResults){
            if(error) return alert(error.message)
            this.setState({vehiclesResults})
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

    render() {
        return <>
            <Title onHome={this.handleGoToHome} />

            {this.state.view === 'access' && <Access onRegister={this.handleGoToRegister} onLogin={this.handleGoToLogin} />}

            {this.state.view === 'register' && <Register onRegister={this.handleRegister} />}

            {this.state.view === 'login' && <Login onLogin={this.handleLogin} />}

            {this.state.view === 'register-confirm' && <RegisterConfirm onLogin={this.handleGoToLogin} />}

            {this.state.view === 'home' && <>
                {this.state.user && <Welcome name={this.state.user.fullname} image={this.state.user.image} />}

                <button onClick={this.handleGoToProfile}>Profile</button>

                {this.state.subview === 'profile' && <Profile onModify={this.handleModifyUser} fullname={this.state.user.fullname} image={this.state.user.image} />}

                <Search placeholder = {"google"} onSearch={this.handleSearchGoogle}/>
                <Search placeholder = {"hotwheels"} onSearch = {this.handleSearchVehicles}/>

                {this.state.googleResults && <GoogleResults items={this.state.googleResults} />}
                {this.state.vehiclesResults && <VehiclesResults items ={this.state.vehiclesResults}/>}
            </>}
        </>
    }
}
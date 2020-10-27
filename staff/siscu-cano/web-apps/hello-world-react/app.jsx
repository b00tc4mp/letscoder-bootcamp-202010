class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'access' }

        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToHome = this.handleGoToHome.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
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

            retrieveUser(token, function(error, user) {
                if (error) return alert(error.message)

                this.setState({ view: 'welcome', name: user.fullname })
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

            {this.state.view === 'welcome' && <Welcome name={this.state.name} />}
        </>
    }
}
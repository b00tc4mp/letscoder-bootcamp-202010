const { Component } = React

class App extends Component {
    constructor() {
        super()

        const { token } = sessionStorage

        this.state = { view: token ? 'home' : 'access', token }
    }

    handleGoToRegister = () => {
        this.setState({ view: 'register', error: undefined })
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login', error: undefined })
    }

    handleGoToAccess = () => {
        if (!this.state.token)
            this.setState({ view: 'access', error: undefined })
    }

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname, email, password, repassword, error => {
            if (error) return this.setState({ error: error.message })

            this.setState({ view: 'register-confirm' })
        })
    }

    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return this.setState({ error: error.message })

            this.setState({ token, view: 'home' })

            sessionStorage.token = token
        })
    }

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ token: undefined, view: 'access' })
    }

    handleError = error => this.setState({ error })

    render() {
        const { state: { view, token, error }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister, handleLogout, handleError } = this

        return <>
            <Title onHome={handleGoToAccess} />

            {token && <button onClick={handleLogout}>Logout</button>}

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

            {view === 'register' && <Register onRegister={handleRegister} onError={handleError} />}

            {view === 'login' && <Login onLogin={handleLogin} onError={handleError} />}

            {view === 'register-confirm' && <RegisterConfirm onLogin={handleGoToLogin} />}

            {view === 'home' && <Home token={token} />}

            {error && <Feedback message={error} level="error" />}
        </>
    }
}
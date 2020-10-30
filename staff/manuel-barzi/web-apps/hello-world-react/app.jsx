const { Component } = React

class App extends Component {
    constructor() {
        super()

        const { token } = sessionStorage

        this.state = { view: token ? 'home' : 'access', token }
    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' })
    }

    handleGoToAccess = () => {
        if (!this.state.token)
            this.setState({ view: 'access' })
    }

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname, email, password, repassword, error => {
            if (error) return alert(error.message)

            this.setState({ view: 'register-confirm' })
        })
    }

    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message)

            this.setState({ token, view: 'home' })

            sessionStorage.token = token
        })
    }

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ token: undefined, view: 'access' })
    }

    render() {
        const { state: { view, token }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister, handleLogout } = this

        return <>
            <Title onHome={handleGoToAccess} />

            {token && <button onClick={handleLogout}>Logout</button>}

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

            {view === 'register' && <Register onRegister={handleRegister} />}

            {view === 'login' && <Login onLogin={handleLogin} />}

            {view === 'register-confirm' && <RegisterConfirm onLogin={handleGoToLogin} />}

            {view === 'home' && <Home token={token} />}
        </>
    }
}
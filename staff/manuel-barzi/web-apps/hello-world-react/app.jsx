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
        const { token } = sessionStorage

        if (!token)
            this.setState({ view: 'access' })
    }

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ view: 'access' })
    }

    handleRegisterSuccess = () => this.setState({ view: 'register-confirm' })

    handleLoginSuccess = () => this.setState({ view: 'home' })

    render() {
        const { state: { view }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLoginSuccess, handleLogout, handleRegisterSuccess } = this

        const { token } = sessionStorage

        return <>
            <Title onHome={handleGoToAccess} />

            {token && <button onClick={handleLogout}>Logout</button>}

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

            {view === 'register' && <Register onRegisterSuccess={handleRegisterSuccess} />}

            {view === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}

            {view === 'register-confirm' && <RegisterConfirm onLogin={handleGoToLogin} />}

            {view === 'home' && <Home />}
        </>
    }
}
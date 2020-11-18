const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: 'access' }

    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' })
    }

    handleGoToAccess = () => {
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

            

       
        })
    }
    render() {    
        const { state: { view, user, token }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister } = this
    
        return <>
            <Title onHome={handleGoToAccess} />

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

            {view === 'register' && <Register onRegister={handleRegister} />}

            {view === 'login' && <Login onLogin={handleLogin} />}

            {view === 'register-confirm' && <RegisterConfirm onLogin={handleGoToLogin} />}

            {view === 'home' && <Home token={token} />}
        </>
    }
}
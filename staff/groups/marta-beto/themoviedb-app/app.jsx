const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage

        this.state = {view: token ? 'home' : 'access', token }

    }

    handleGoToAccess = () => {
        if (!this.state.token)
            this.setState({view: 'access'})
    }

    handleGoToRegister = () => {
        this.setState({view: 'register'})
    }

    handleGoToLogin = () => {
        this.setState({view: 'login'})
    }

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname, email, password, repassword, error => {
            if (error) return alert(error.message);

            this.setState({ view: 'register-confirm' });
        })

    }

    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message)

            this.setState({ token, view: 'home' });

            sessionStorage.token = token;
        })
    }

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ token: undefined, view: 'access'})
    }
 
    render() {
        const {state: {view, token}, handleGoToAccess, handleGoToLogin, handleRegister, handleLogin, handleGoToRegister, handleLogout} = this;

        return <>
        <Title onAccess={handleGoToAccess}/>

        {token && <div className='logout'><button onClick={handleLogout} className="logout__btn btn">Logout</button></div>}

        {view === 'access' && <Access onRegisterSection={handleGoToRegister} onLoginSection={handleGoToLogin} />}

        {view === 'register' && <Register onRegister={handleRegister}/>}

        {view === 'register-confirm' && <RegisterConfirm onLoginSection={handleGoToLogin}/>}

        {view === 'login' && <Login onLogin={handleLogin}/>}

        {view === 'home' && <Home token={token}/>}

        </>
    }
}


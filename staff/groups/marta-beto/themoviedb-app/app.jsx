class App extends React.Component {
    constructor() {
        super()

        this.state = {view: 'access'}

    }

    handleGoToHome = () => {
        this.setState({view: 'access'})
    }

    handleGoToRegister = () => {
        this.setState({view: 'register'})
    }

    handleGoToLogin = () => {
        this.setState({view: 'login'})
    }

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname, email, password, repassword, (error) => {
            if (error) return alert(error.message);

            this.setState({ view: 'register-confirm' });
        })

    }

    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message);

            this.setState({ view: 'home' });
        })
    }
 
    render() {
        return <>
        <Title onAccess={this.handleGoToHome}/>

        {this.state.view === 'access' && <Access onRegisterSection={this.handleGoToRegister} onLoginSection={this.handleGoToLogin} />}

        {this.state.view === 'register' && <Register onClick={this.handleRegister}/>}

        {this.state.view === 'login' && <Login onClick={this.handleLogin}/>}

        {this.state.view === 'home' && <Home />}

        </>
    }
}


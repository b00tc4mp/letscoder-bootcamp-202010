class App extends React.Component {
    constructor() {
        super()

        this.state = {view: 'access'}

    }

    handleGoTohome = () => {
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
        return <> <Title onHome={this.handleGoTohome}/>
        { this.state.view === 'access' && <Access onRegister={this.handleGoToRegister} onLogin={this.handleGoToLogin} />}

        {this.state.view === 'register' && <Register onclick={this.handleRegister}/>}

        {this.state.view === 'login' && <Login onclick={this.handleLogin}/>}
        </>
    }
}


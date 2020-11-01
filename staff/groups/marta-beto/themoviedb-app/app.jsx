class App extends React.Component {
    constructor() {
        super()

        this.state = {view: 'register-confirm'}

    }

    handleGoToAccess = () => {
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
            if (error) return alert(error.message);

            this.setState({ token });

            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message);

                this.setState({view: 'home', user})
            })
        })
    }
 
    render() {
        const {state: {view, user}, handleGoToAccess, handleGoToLogin, handleRegister, handleLogin, handleGoToRegister} = this;

        return <>
        <Title onAccess={handleGoToAccess}/>

        {view === 'access' && <Access onRegisterSection={handleGoToRegister} onLoginSection={handleGoToLogin} />}

        {view === 'register' && <Register onRegister={handleRegister}/>}

        {view === 'register-confirm' && <RegisterConfirm onLoginSection={handleGoToLogin}/>}

        {view === 'login' && <Login onLogin={handleLogin}/>}

        {view === 'home' && <Home user={user}/>}

        </>
    }
}


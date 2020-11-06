const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage


        
        sessionStorage.spotyToken = "BQCK2HZlbaiyt6wjEZa9OJ2CyPUDB_HN_f78SVyWc-zUheuEJtWvHEkdLQkDaZE-JuwWWmGdyjTgE3CMfl9StQii8TR15CrxGNCKm7s9CdH3xbFVb8l7d-BaB9a09RgQqdAfNUaYlX7MQ9eOhsEyep_IQoiwsPI"


        this.state = { view: token ? 'home' : 'access', error: ''}
    }


    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleGoToLogin = () => {

            this.setState({ view: 'login' })
        
    }
    
    handleGoToAcces = () => {
        this.setState({ view: 'access' })
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
            
            sessionStorage.token = token

            this.setState({ view: 'home' })
        })
    }

    handleView = () => {
        this.setState({view: 'access'})
    }

    handleExitError = () => {

        this.setState({ error: '' })

    }
    

    render() {
        const { state: {view, error }, handleGoToAcces, handleGoToRegister, handleGoToLogin, handleRegister, handleLogin, handleExitError, handleView} = this

        return <>

        <Title onHome={handleGoToAcces} />

        {error && <FeedBack level = {'error'} message={error} exitError={handleExitError}/>}

        {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

        {view === 'register' && <Register onRegister={handleRegister} />}

        {view === 'register-confirm' && <RegisterConfirm onLogin= {handleGoToLogin}/>}

        {view === 'login' && <Login onLogin={handleLogin} />}

        {view === 'home' && <Home  onView={handleView}/>}


        </>
    }
}
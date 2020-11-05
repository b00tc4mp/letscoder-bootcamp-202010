const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage


        
        sessionStorage.spotyToken = "BQBNkKs-4eqx3ecmL4xWm3C5JFxd5i2a_7pyH56Q07pnprqkQnBh1q4kXOR9UfHwquBusZOupg2eREqvlu0orj1BnVx2QlkSD6H7PqczImImWnDyk21bNnWTDFFkvERHY4wHQ5BE7U_2IyRGw7vXHky4wAgmo_c"


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
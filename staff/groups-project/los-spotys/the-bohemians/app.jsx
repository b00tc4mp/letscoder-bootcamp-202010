const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage


        
        sessionStorage.spotyToken = "BQDxGlJ_C-DcJJITySA1CXY5-ilY5NA-ZW9w4elNdYol2w9TN9sOXJWCt2p979dlYj6F0RsLodwIXfTc7MxYIB9pklu5JtlrU29M4NTCXAXr_k4nUKD7HmAl-_Bs_r49DeWyePRU0z7Xl_21v4OMjzMQZooYvZU"


        this.state = { view: token ? 'home' : 'access', error: ''}
    }


    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleGoToLogin = () => {

            this.setState({ view: 'login' })
        
    }
    
    handleGoToAcces = () => {
        this.setState({ view: 'access', error: '' })
    }

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname, email, password, repassword, error => {
            if (error) return this.setState({ error: error.message })

            this.setState({ view: 'register-confirm', error: '' })
        })
    }

    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return this.setState({ error: error.message })
            
            sessionStorage.token = token

            this.setState({ view: 'home', error: '' })
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
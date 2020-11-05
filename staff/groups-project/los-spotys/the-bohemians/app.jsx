const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage


        
        sessionStorage.spotyToken = "BQAYolmEYtSkMUkLqCuUIjJQ4JUluDPLsW4F6VoLXoz-17dvSWv7VnDmc7MtfShDFrHdLpVHqDLeNIwtKWYK6nBUJMBD5zQLeVh2m4myHDZWFIovSK3iRG6Q-MWJe4-bT_bmpr1bqwgaEdGE7cBqkrnI5QnRbT4"


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

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ view: 'access' })
    }

    handleExitError = () => {

        this.setState({ error: '' })

    }
    

    render() {
        const { state: {view, error }, handleGoToAcces, handleGoToRegister, handleGoToLogin, handleRegister, handleLogin, handleExitError, handleLogout} = this

        const { token } = sessionStorage

        return <>

        <Title onHome={handleGoToAcces} />

        {error && <FeedBack level = {'error'} message={error} exitError={handleExitError}/>}

        {token && <button className= "logout" onClick={handleLogout}>Logout</button>}

        {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

        {view === 'register' && <Register onRegister={handleRegister} />}

        {view === 'register-confirm' && <RegisterConfirm onLogin= {handleGoToLogin}/>}

        {view === 'login' && <Login onLogin={handleLogin} />}

        {view === 'home' && <Home />}


        </>

    }
}
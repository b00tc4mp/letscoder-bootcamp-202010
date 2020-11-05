const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage

        sessionStorage.spotyToken = "BQAy6gsbCW7gTXor2z1I6zSWQM68T3cJEhgq29H0zokT4gQEq8fC7x_uXEM3_IeRyPtQhTr3bnbFVUnmnu9PNpgGg7MmzF8W0P0vH2coq8g3yd7PatBAlOqu52FBjJfQ9sbpQW"

        this.state = { view: token ? 'home' : 'access', }
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
            if (error) return alert(error.message)

            this.setState({ view: 'register-confirm' })
        })
    }
    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message)

            sessionStorage.token = token

            this.setState({ view: 'home' })

            
        })
       
    }

    render() {
        const { state: {view }, handleGoToAcces, handleGoToRegister, handleGoToLogin, handleRegister, handleLogin } = this


        return <>

        <Title onHome={handleGoToAcces} />

        {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

        {view === 'register' && <Register onRegister={handleRegister} />}

        {view === 'register-confirm' && <RegisterConfirm onLogin= {handleGoToLogin}/>}

        {view === 'login' && <Login onLogin={handleLogin} />}

        {view === 'home' && <Home />}


        </>

    }
}
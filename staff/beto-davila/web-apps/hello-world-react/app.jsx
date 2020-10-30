const { Component } = React

class App extends Component {
    constructor() {
        super() // refers to the parent class and gets access to the parent's propoerties

        this.state = { view: 'access' } // initial state => component properties. The compo re-renders when state changes

    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })  // re-renders on clicking the register button (within access) to show the 'register' section
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' }) // re-renders on clicking the login button (within access) to show the 'login' section
    }

    handleGoToAccess = () => {
        this.setState({ view: 'access' }) // re-renders on clicking the title to show the 'access' section
    }

    handleRegister = (fullname, email, password, repassword) => {           // calls registerUser passing user inputs
        registerUser(fullname, email, password, repassword, error => {      // registerUser logic
            if (error) return alert(error.message)

            this.setState({ view: 'register-confirm' }) // if no error, setState.
        })
    }

    handleLogin = (email, password)  => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message)

            this.setState({ token, view: 'home' })
        })
    }

    render() {
        const { state: { view, token }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister } = this

        return <>

            <Title onAccess={handleGoToAccess} />

            {view === 'access' && <Access onRegisterSection={handleGoToRegister} onLoginSection={handleGoToLogin} />}

            {view === 'register' && <Register onRegister={handleRegister} />}

            {view === 'login' && <Login onLogin={handleLogin} />}

            {view === 'register-confirm' && <RegisterConfirm onLoginSection={handleGoToLogin} />}

            {view === 'home' && <Home token={token} />} 
        </>  // 'Home' gets the user through props
    }
}
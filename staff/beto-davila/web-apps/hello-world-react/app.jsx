const { Component } = React

class App extends Component {
    constructor() {
        super() // refers to the parent class and gets access to the parent's propoerties

        const {token} = sessionStorage

        this.state = { view: token? 'home' : 'access', token } // initial state => component properties. The compo re-renders when state changes

    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })  // re-renders on clicking the register button (within access) to show the 'register' section
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' }) // re-renders on clicking the login button (within access) to show the 'login' section
    }

    handleGoToAccess = () => {
        const { token } = sessionStorage

        if (!token)
            this.setState({ view: 'access' })
    }

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ view: 'access' })
    }

    handleRegisterSuccess = () => this.setState({ view: 'register-confirm' }) // passed by props onRegisterSuccess from Register

    handleLoginSuccess = () => this.setState({ view: 'home' }) // // passed by props onLoginSuccess from Login


    render() {
        const { state: { view }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLogout } = this

        const { token } = sessionStorage

        return <>

            <Title onAccess={handleGoToAccess} />

            {token && <button className="logout btn" onClick={handleLogout}>Logout</button>}

            {view === 'access' && <Access onRegisterSection={handleGoToRegister} onLoginSection={handleGoToLogin} />}

            {view === 'register' && <Register onRegisterSucccess={this.handleRegisterSuccess}/>}

            {view === 'login' && <Login onLoginSuccess={this.handleLoginSuccess}/>}

            {view === 'register-confirm' && <RegisterConfirm onLoginSection={handleGoToLogin} />}

            {view === 'home' && <Home />} 
        </>  
    }
}
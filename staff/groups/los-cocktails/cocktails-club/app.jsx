const { Component } = React
// const Component = React.Component

class App extends Component {
    constructor() {
        super()

        const { token } = sessionStorage

        this.state = { view: token ? 'home' : 'access' }

    }

    handleGoToRegister = () => {
        this.setState( { view: 'register' } )
    }

    handleGoToLogin = () => {
        this.setState( { view: 'login' } )
    }

    handleGoToHome = () => {
        this.setState({ view: 'home'})
    }

    handleLogout = () => {
        delete sessionStorage.token

        this.setState({ view: 'access' })
    }

    render() {
        const {state: { view }, handleLogout, handleGoToHome, handleGoToRegister, handleGoToLogin } = this
        const { token } = sessionStorage

        return <>

            {token && <button onClick={handleLogout}>Logout</button>}

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} /> }

            {view === 'register' && <Register onRegisterSuccess={handleGoToHome} returnToLogin={handleGoToLogin} />}

            {view === 'login' && <Login onLoginSuccess={handleGoToHome} returnToRegister={handleGoToRegister} />}

            {view === 'home' && <Home />}

        </>
    }

} 

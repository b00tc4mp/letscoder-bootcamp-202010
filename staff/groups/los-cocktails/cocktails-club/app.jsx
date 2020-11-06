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

    handleClickOnHome = () => {
        const { state: { view } } = this
        if( view === 'access' || view === 'register' || view === 'login' )
            this.setState({ view: 'access' })
        else this.setState({ view: 'home' })
    }

    render() {
        const {state: { view }, handleLogout, handleGoToHome, handleGoToRegister, handleGoToLogin, handleClickOnHome } = this
        const { token } = sessionStorage

        return <>
            
            { view === 'home' || <Logo onHome={handleClickOnHome} />}

            
            {token && <button onClick={handleLogout} className="logout">Logout</button>}

            {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} /> }

            {view === 'register' && <Register onRegisterSuccess={handleGoToHome} returnToLogin={handleGoToLogin} />}

            {view === 'login' && <Login onLoginSuccess={handleGoToHome} returnToRegister={handleGoToRegister} />}

            {view === 'home' && <Home />}

        </>
    }

} 

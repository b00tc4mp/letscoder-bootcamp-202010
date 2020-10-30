const { Component } = React

class App extends Component {
    constructor () {
        super()

        this.state = { view: 'access' }
    }


    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' })
    }

    handleGoToAccess = () => {
        this.setState({ view: 'access' })
    }

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname, email, password, repassword, error => {
            if (error) return alert(error.message)

            this.setState({ view: 'register-confirm' })
        })
    }

    handleLogin = (email, password) => {
        authenticateUser(email, password,(error, token) => {
            if (error) return alert(error.message)

            retrieveUser(token,(error, user)=>{
                if (error) return alert(error.message)

                this.setState({ view: 'home', user})
            })
        })
    }

    
   
    render() {
        const { state: { view, user }, handleGoToAccess, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister } = this
        return <>
            <Title onHome={this.handleGoToAccess} />

            {this.state.view === 'access' && <Access onRegister={this.handleGoToRegister} onLogin={this.handleGoToLogin} />}

            {this.state.view === 'register' && <Register onRegister={this.handleRegister} />}

            {this.state.view === 'login' && <Login onLogin={this.handleLogin} />}

            {this.state.view === 'register-confirm' && <RegisterConfirm onLogin={this.handleGoToLogin} />}

           
        </>
    }
}
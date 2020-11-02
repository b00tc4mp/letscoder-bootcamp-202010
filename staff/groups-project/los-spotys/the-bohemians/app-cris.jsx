const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: 'access' }
    }


    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    // HandleGoToLogin same as app-Pilar-jsx
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




    render() {
        const { state: {view, user }, handleGoToAcces, handleGoToRegister, handleGoToLogin, handleRegister } = this

        return <>

        <Title onHome={handleGoToAcces} />

        {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

        {view === 'register' && <Register onRegister={handleRegister} />}

        </>

    }
}
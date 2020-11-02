const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = {view: 'access'}
    }

    handleGoToRegister = () => {
        this.setState({view: 'register'})
    }

    handleGoToLogin = () => {
        this.setState({view: 'login'})
    }
    




    render() {
        const { state: {view, user }, handleGoToRegister}

        return <>
        <Title onHome={handleGoToAcces} />

        {view === 'access' && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin} />}

        </>

    }
}
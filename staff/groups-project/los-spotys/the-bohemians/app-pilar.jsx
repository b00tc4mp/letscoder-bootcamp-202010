const { Component } = React

class App extends Component {
    constructor(){
        super ()

        this.state = { view: 'register-confirm'}

    }

    handleGoToLogin = () => {
     
        this.setState({ view: 'login' })
        
    }

    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message)

            this.setState({ token, view: 'home'})

        })
    }

    render(){
        const { state: { view }, handleGoToLogin, handleLogin} = this

        return <>  

        {view === 'register-confirm' && <RegisterConfirm onLogin= {handleGoToLogin}/>}

        {view === 'login' && <Login onLogin={handleLogin} />}
        </>
    }

}

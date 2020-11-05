const { Component } = React

class App extends Component {
    constructor() {
        super()

        const {token} = sessionStorage

        sessionStorage.spotyToken = "BQCUJP1JbHqXYvNWyYN5oOduntycvorPcMLt2vNGLKg1TtZ6soX53Py5MKQlmzAGUwmmLKhnPTKciiqfRG55r28IXMwudGsmM0WGy8MGw4By1Xe0tSmAYEHoYyy-XuK0Vw8Nq1cSSTLlsv9g2DAvTmaxqi04XZw"

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
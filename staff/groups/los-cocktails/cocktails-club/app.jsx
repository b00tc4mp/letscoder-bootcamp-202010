const { Component }  = React
// const Component = React.Component

class App extends Component{
    constructor(){
    super()

    this.state = { view: "access"}

    }

    handleGoToRegister = () => {
    this.setState({ view: "register"})
}

    handleGoToLogin = () => {
    this.setState({ view: "login"})
}
    handleLogin = (email, password) => {
        authenticateUser(email, password, (error, token) => {
            if (error) return alert(error.message)

            retrieveUser(token, (error,user) => {
                    if (error) return alert(error.message)
                    this.setState({ token, view: "home", user })

                    this.setState({ token, view: "home", user })
        })

    })
}

    handleRegister = (fullname, email, password, repassword) => {
        registerUser(fullname,email,password,repassword, error => {
           if (error) return alert(error.message)
            
           authenticateUser(email, password, (error, token) => {
                if (error) return alert(error.message)
            //para guardar el token pides el authenticate para traer el token y se guarda en el state para no perderlo, aparte de eso se trae toda la información del usuario para poderla usar en la página.
                retrieveUser(token, (error,user) => {
                    if (error) return alert(error.message)
                    this.setState({ token, view: "home", user })
            

            })
            
        })
       

    })
}


    render() {
        const {state: {view, user, token}, handleGoToRegister, handleGoToLogin, handleLogin, handleRegister} = this
     return <>
        {view === "access" && <Access onRegister={handleGoToRegister} onLogin={handleGoToLogin}/>}
        {view === "login" && <Login onLogin={handleLogin} returnToRegister={handleGoToRegister}/>}
        {view === "register" && <Register onRegister={handleRegister} returnToLogin={handleGoToLogin}/>}
        {view === "home" && <Home user={user} token={token} />}

     </>

    }

}

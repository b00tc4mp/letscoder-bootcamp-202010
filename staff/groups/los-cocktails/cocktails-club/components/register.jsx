const { Component } = React

class Register extends Component {
  constructor(){
    super()

    this.state = { }
  }

  handleRegister = (fullname,email,password,repassword) => {
    const {props: {onRegisterSuccess}} = this
    try{
      registerUser(fullname,email,password,repassword, error => {
          if (error) return this.setState({error: error.message})
  
          authenticateUser(email, password, (error, token) => {
              if (error) return this.setState({error: error.message})
  
              retrieveUser(token, (error,user) => {
                  if (error) return this.setState({error: error.message})
                  
                  sessionStorage.token = token

                  onRegisterSuccess()
              }) 
          })
      })
    } catch (error) {
      this.setState({error: error.message})
    }
}

  render(){
    const { props: { returnToLogin }, state: { error }, handleRegister } = this

return <>
<section className="register">
      <h2 className="register__h2">Sign Up</h2>
      <form className="register__form" onSubmit={
          function(event) {
              event.preventDefault()
              var fullname = event.target.fullname.value
              var email = event.target.email.value
              var password = event.target.password.value
              var repassword = event.target.repassword.value

              handleRegister(fullname,email,password,repassword)
          }
      }>
        <p className="register__p">Fullname</p>
        <input className="register__input" name="fullname" type="text" placeholder="Fullname" />
        <p className="register__p">E-mail Address</p>
        <input className="register__input" name="email" type="text" placeholder="email@example.com" />
        <p className="register__p">Password</p>
        <input className="register__input" name="password" type="password" placeholder="********" />
        <p className="register__p">Repassword</p>
        <input className="register__input" name="repassword" type="password" placeholder="********" />
        {error && <Feedback error={error} />}
        <br/> <button className="register__button">Sign Up</button>
      </form>
      <p className="register__p2">Have an account?<span className="register__span" onClick={returnToLogin}>Log in here</span></p>
    </section>
</>
  }
}




function Login({onLogin, returnToRegister}){
    return <> 
    <section className="login">
          <h2 className= "login__h2">Log In</h2>
          <form className= "login__form" onSubmit={function(event){
    event.preventDefault()
    var email = event.target.email.value
    var password =event.target.password.value
    
    onLogin(email,password)
    
    }}>
            <p className= "login__p">E-mail Address</p>
            <input name="email" className="login__input" type="text" placeholder="email@example.com" />
            <p className="login__p" >Password</p>
            <input name="password" className="login__input" type="text" placeholder="********" />
            <button className="login__button">Log In</button>
          </form>
          <p className="login__p2">Don't have an account <span onClick={returnToRegister} className="login__span">Register here</span></p>
        </section> </>
} 
function Register({onRegister, returnToLogin}){
<<<<<<< HEAD
    return <>
    <section className="register">
          <h2 className="register__h2">Register</h2>
          <form className="register__form" onSubmit={
              function(event) {
                  event.preventDefault()
                  var fullname = event.target.fullname.value
                  var email = event.target.email.value
                  var password = event.target.password.value
                  var repassword = event.target.repassword.value
    
                  onRegister(fullname,email,password,repassword)
              }
          }>
            <p className="register__p">Fullname</p>
            <input name="fullname" className="register__input" type="text" placeholder="Fullname" />
            <p className="register__p">E-mail Address</p>
            <input name="email" className="register__input" type="text" placeholder="email@example.com" />
            <p className="register__p">Password</p>
            <input name="password" className="register__input" type="text" placeholder="**" />
            <p className="register__p">Repassword</p>
            <input name="repassword" className="register__input" type="text" placeholder="**" />
            <button className="register__button">Register</button>
          </form>
          <p className="register__p2">Have an account?<span className="register__span" onClick={returnToLogin}>Log in here</span></p>
        </section>
    </>
=======
return <>
<section className="register">
      <h2 className="register__h2">Register</h2>
      <form className="register__form" onSubmit={
          function(event) {
              event.preventDefault()
              var fullname = event.target.fullname.value
              var email = event.target.email.value
              var password = event.target.password.value
              var repassword = event.target.repassword.value

              onRegister(fullname,email,password,repassword)
          }
      }>
        <p className="register__p">Fullname</p>
        <input className="register__input" name="fullname" type="text" placeholder="Fullname" />
        <p className="register__p">E-mail Address</p>
        <input className="register__input" name="email" type="text" placeholder="email@example.com" />
        <p className="register__p">Password</p>
        <input className="register__input" name="password" type="text" placeholder="********" />
        <p className="register__p">Repassword</p>
        <input className="register__input" name="repassword" type="text" placeholder="********" />
        <button className="register__button">Register</button>
      </form>
      <p className="register__p2">Have an account?<span className="register__span" onClick={returnToLogin}>Log in here</span></p>
    </section>
</>

>>>>>>> b9cb068fbe37e85b6b7932ead657f2e01b3779d2
}
import './SignIn.scss'

function SignIn({ onSignIn }) {
    return <section className="sign-in">
        <div className = 'login'>
        <h2>Sign In</h2>
        <form className = "login-form" onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email }, password: { value: password } } } = event

            onSignIn(email, password)
        }}>

             <p class="login-text">
    <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-lock fa-stack-1x"></i>
    </span>
  </p>
  <input type="email" name= "email" class="login-username" autofocus="true" required="true" placeholder="Email" />
  <input type="password" name = "password" class="login-password" required="true" placeholder="Password" />
  <input type="submit" name="Login" value="Login" class="login-submit" />
        </form>
        </div>
    </section>
}

export default SignIn
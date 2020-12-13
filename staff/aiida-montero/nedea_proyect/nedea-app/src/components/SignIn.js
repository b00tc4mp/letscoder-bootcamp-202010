import './SignIn.scss'
import {Feedback} from './'

function SignIn({ onSignIn, error }) {
    return <section className="sign-in">
        <div className = 'login'>
        
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
    <h2>Entra</h2>
  </p>
  {error && <Feedback error = {error}/>}
  <input type="email" name= "email" class="login-username" autofocus="true" required="true" placeholder="Email" />
  <input type="password" name = "password" class="login-password" required="true" placeholder="Password" />
  <input type="submit" name="Login" value="Login" class="login-submit" />
        </form>
        </div>
    </section>
}

export default SignIn
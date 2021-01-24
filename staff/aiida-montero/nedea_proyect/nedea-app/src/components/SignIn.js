import './SignIn.scss'
import {Feedback} from './'
import {Link} from 'react-router-dom'

function SignIn({ onSignIn, error, onGoToInitial}) {
    return <section className="sign-in">
       <button className = 'logo'  onClick = {onGoToInitial} ><img class= "logo" src = "../imagenes/logo_button.png"/></button>
        <div className = 'login'>
        
        <form className = "login-form" onSubmit={event => {
            event.preventDefault()

            const { target: { email: { value: email }, password: { value: password } } } = event

            onSignIn(email, password)
        }}>

             <div class="login-text">
    <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-lock fa-stack-1x"></i>
    </span>
    
  </div>
  <h2>Identificate</h2>
  {error && <Feedback error = {error}/>}
  <input type="email" name= "email" class="login-username" autofocus="true" required="true" placeholder="Email" />
  <input type="password" name = "password" class="login-password" required="true" placeholder="Password" />
  <input type="submit" name="Identificate" value="Login" class="login-submit" />
  <Link to = '/sign-up'>¿Aun no te has registrado? Registrate</Link>   
        </form>
        </div>
    </section>
}

export default SignIn
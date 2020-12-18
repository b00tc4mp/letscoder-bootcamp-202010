import {Feedback} from './'
import './SignUp.scss'
import {Link} from 'react-router-dom'

function SignUp({ onSignUp, error, onGoToInitial }) {
    return <section className="sign-up">
       <button className = 'logo'  onClick = {onGoToInitial} ><img class= "logo" src = "../imagenes/logo_button.png"/></button>
       <div className = "register">
    
        <form className = "register_form" onSubmit={event => {
            event.preventDefault()

            const { target: { fullname: { value: fullname }, email: { value: email }, password: { value: password } } } = event

            onSignUp(fullname, email, password)
        }}>
          
          <p class="register-text">
    <span class="fas fa-user-graduate fa-2x ">
    </span>
  </p>
    <h2 >Registrate</h2>
    {error && <Feedback  error = {error}/>}
  <input type="text" name= "fullname" class="register-fullname"  placeholder="Fullname" />
  <input type="email" name= "email" class="register-username"  placeholder="Email" />
  <input type="password" name= "password" class="register-password" placeholder="Password" />
  <input type="submit" name="Registrate" value="Registrate" class="register-submit" />
        <Link to = '/sign-in'>¿Ya estas registrado? Identificate</Link>   
        </form>
        </div>
    </section>
}
export default SignUp
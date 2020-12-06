import './SignUp.sass'
import {Link} from 'react-router-dom'

function SignUp({ onSignUp }) {
    return <section className= "sign-up">
        <h2 className="sign-up__title">Sign Up</h2>

        <form className ="sign-up__form" onSubmit= { event => {
            event.preventDefault()

            const { target: { name: { value: name }, email : { value: email}, password: { value: password}}} = event
        
            onSignUp(name, email, password)
        }}>
            <input type ="text" name ="name" placeholder="Company Name" />
            <input type="email" name="email" placeholder="e-mail"/>
            <input type="password" name="password" placeholder="password" />
            {/* <input type="text" name="contact" placeholder="contact" /> */}
            
            
            <button>Send</button>

        </form>
        

        <Link to = '/sign-in'>Redirect to Sign In</Link>
        
    </section>
}

export default SignUp
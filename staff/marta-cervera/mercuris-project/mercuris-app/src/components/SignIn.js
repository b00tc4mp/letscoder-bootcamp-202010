import './SignIn.sass'
import {Link} from 'react-router-dom'
import { Feedback } from '.'

function SignIn({ onSignIn, error }) {
    return <main className= "sign-in">
        <h2 className="sign-in__title">Sign In</h2>

        <form className="sign-in__form"onSubmit= { event => {
            event.preventDefault()
            
            const { target: {email : { value: email}, password: { value:password} } } = event
            
            onSignIn(email, password)
        }}>
            { error && <Feedback error= {error}/>}          
            <input type="email" name="email" placeholder="e-mail"/>
            <input type="password" name="password" placeholder="password" />
            
            <button>Send</button>
            

        </form>
       
        <Link to = '/sign-up'>Redirect to Sign Up</Link>

       
    </main>
}

export default SignIn
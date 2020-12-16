import './SignUp.sass'
import {Link} from 'react-router-dom'
import{ Feedback } from '.'

function SignUp({ onSignUp, error }) {
    return <div className= "sign-up">
        <h2 className="sign-up__title">Sign Up</h2>
        
        { error && <Feedback error= {error}/>}       

        <form className ="sign-up__form" onSubmit= { event => {
            event.preventDefault()

            const { target: { name: { value: name }, email : { value: email}, password: { value: password}, address: { value: address}, city: { value: city}, phone:{ value:phone}, contact: { value: contact}}} = event
        
            onSignUp(name, email, password, contact, address, city, phone)
        }}>
            <input className="sign-up__form__input" type ="text" name ="name" placeholder="Company Name" />
            <input className="sign-up__form__input"type="email" name="email" placeholder="e-mail"/>
            <input className="sign-up__form__input"type="password" name="password" placeholder="password" />
            {<input className="sign-up__form__input"type="text" name="contact" placeholder="Contact Person" /> }            
            {<input className="sign-up__form__input"type="text" name="address" placeholder="address" /> }            
            {<input className="sign-up__form__input"type="text" name="city" placeholder="city" /> }            
            {<input className="sign-up__form__input"type="text" name="phone" placeholder="phone" /> }            
            
            <button className="sign-up__form__btn">Send</button>
           

        </form> 

        <Link to = '/sign-in'>Redirect to Sign In</Link>
        
    </div>
}

export default SignUp
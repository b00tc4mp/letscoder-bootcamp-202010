import './SignUp.sass'

function SignUp({ onSignUp }) {
    return <section className= "sign-up">
        <h2>Sign Up</h2>

        <form className ="sign-up__upform" onSubmit= { event => {
            event.preventDefault()

            const { target: { name: { value: name }, email : { value: email}, password: { value: password}}} = event
        
            onSignUp(name, email, password)
        }}>
            <input className ="sign-up__companyname" type ="text" name ="name" placeholder="Company Name" />
            <input type="email" name="email" placeholder="e-mail"/>
            <input type="password" name="password" placeholder="password" />
            {/* <input type="text" name="contact" placeholder="contact" /> */}
            
            
            <button>Send</button>

        </form>
        <p className="signUp">Already have an account? <span className="signUp__span" onClick={onSignUp}>Sign In</span></p> 
    </section>
}

export default SignUp
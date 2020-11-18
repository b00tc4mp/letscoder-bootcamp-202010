import './SignUp.sass'

function SignUp({ onSignUp } ) {
    return <section className="sign-up">
        <h2>SING UP</h2>
        <form onSubmit={event =>{
            event.preventDefault()

            const { target : { fullname: { value: fullname}, email: {value:email}, password: {value:password}}} = event

            onSignUp(fullname, email, password)

        }}>
            <input type= "text" name ="fullname" placeholder="fullname"/>
            <input type= "email" name ="email" placeholder="email"/>
            <input type= "password" name ="password" placeholder="password"/>
            <button>SEND</button>

        </form>
    </section>
    
}

export default SignUp
import './SignIn.sass'
import { Link } from 'react-router-dom'
import {Feedback} from '.'


function SignIn({onSignIn, onGoToMainSearch, error}){
    return <div className='signIn'>
        <header className='signIn__header'>
            <h1 className='signIn__h1'>Welcome to ADOGTApp</h1>
            <h3 className='signIn__h3'>In our APP you will find your four-legged BF</h3>
        </header>
        <section className='signIn__section'>
        <Link to = 'MainSearch'><img className='signIn__img' src="adoptUs.jpg" onClick={ onGoToMainSearch }/></Link>   
        </section>
        <form className='signIn__form' onSubmit={event => {
            event.preventDefault()
            
            const { target: { email: { value: email }, password: { value: password } } } = event
            
            onSignIn(email, password)
            
        }}>
            {error && <Feedback error={error}/>}
            <h4 className='signIn__h6'>Are you an ANIMAL SHELTER? Please SIGN IN here, if you have an account</h4>

            <input className='signIn__input' type="email" name="email" placeholder="e-mail" />
            <input className='signIn__input' type="password" name="password" placeholder="password" />
            <button className='signIn__button'>SEND</button>
        </form>
        <p className='signIn__p'>Don´t have an account? <Link to ='sign-up'><span className='signIn__span'>Sign Up</span></Link></p>

</div>

}

export default SignIn
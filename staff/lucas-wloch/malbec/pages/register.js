import { Layout, Feedback } from '../components'
import '../components/Register.sass'
import Link from 'next/link'
import { useState } from 'react'
// import { registerUser } from '../logic'



const Register = () => {

    const [error, setError] = useState()
    const [registerSuccess, setRegisterSuccess] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        var fullname = event.target.fullname.value
        var email = event.target.email.value
        var password = event.target.password.value

        handleRegister(fullname, email, password)
    }

    const handleRegister = (fullname, email, password) => {
        try {
            registerUser(fullname, email, password, error => {
                if (error) return setError( error.message )

                setRegisterSuccess(true)
            })
        } catch (error) {
            setError(error.message)
        }
    }


    return <Layout>
        {registerSuccess || <section className="register">
             <Link href="/access"><button className="register__back" >◀ back</button></Link>
            <h2 className="register__h2">Sign Up</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <p className="register__p">Fullname</p>
                <input className="register__input" name="fullname" type="text" placeholder="Fullname" />
                <p className="register__p">E-mail Address</p>
                <input className="register__input" name="email" type="text" placeholder="email@example.com" />
                <p className="register__p">Password</p>
                <input className="register__input" name="password" type="password" placeholder="********" />
                {error && <Feedback error={error} />}
                <br /> <button className="register__button">Sign Up</button>
            </form>
            <p className="register__p2">Have an account?<Link href="/login"><span className="register__span" >Log in here</span></Link></p>
        </section>}
        {registerSuccess && <section className="register">
             <Link href="/access"><button className="register__back" >◀ back</button></Link>
            <h2 className="register__h2">User Registered</h2>
            <Link href="/login"><button className="register__button">Log In Here</button></Link>
        </section>}
    </Layout>

}

export default Register









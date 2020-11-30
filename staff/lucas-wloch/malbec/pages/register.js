import { Layout, Feedback } from '../components'
import '../components/Register.sass'
import Link from 'next/link'
import { useState } from 'react'


const Register = () => {

    const [error, setError] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        var fullname = event.target.fullname.value
        var email = event.target.email.value
        var password = event.target.password.value

        handleRegister(fullname, email, password)
    }

    const handleRegister = (fullname, email, password) => {
        // try {
        //     registerUser(fullname, email, password, error => {
        //         if (error) return setError({ error: error.message })

        //         authenticateUser(email, password, (error, token) => {
        //             if (error) return setError({ error: error.message })

        //             retrieveUser(token, (error, user) => {
        //                 if (error) return setError({ error: error.message })

        //                 sessionStorage.token = token

        //                 onRegisterSuccess()
        //             })
        //         })
        //     })
        // } catch (error) {
        //     setError({ error: error.message })
        // }
    }


    return <Layout>
        <section className="register">
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
        </section>
    </Layout>

}

export default Register









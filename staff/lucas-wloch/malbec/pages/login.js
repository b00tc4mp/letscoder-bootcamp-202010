import { Layout, Feedback } from '../components'
import '../components/Login.sass'
import Link from 'next/link'
import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import { useRouter } from 'next/router'
// const { authenticateUser } = require('../logic')

const Login = (req, res) => {

    const [error, setError] = useState()
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        var email = event.target.email.value
        var password = event.target.password.value

        handleLogin(email, password)

    }

    const handleLogin = (email, password) => {
        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    router.push('/')
                })
                .catch(error => setError(error.message))
        } catch (error) {
            setError(error.message)
        }

    }

    return <Layout>
        <section className="login">
            <Link href="/access"><button className="login__back" >◀ back</button></Link>
            <h2 className="login__h2">Sign In</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <p className="login__p">E-mail Address</p>
                <input className="login__input" name="email" type="text" placeholder="email@example.com" />
                <p className="login__p">Password</p>
                <input className="login__input" name="password" type="password" placeholder="********" />
                {error && <Feedback error={error} />}
                <br /> <button className="login__button">Sign In</button>
            </form>
            <p className="login__p2">Have an account?<Link href="/register"><span className="login__span" >Register here</span></Link></p>
        </section>
    </Layout>
}


export default Login


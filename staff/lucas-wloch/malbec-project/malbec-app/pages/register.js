import { Layout, FeedbackAccess, Feedback } from '../components'
import '../components/Register.sass'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import registerUser from '../logic/register-user'

import { useRouter } from 'next/router'

const Register = () => {
    const router = useRouter()

    useEffect(() => {
        const { token } = sessionStorage

        if (token) return router.push('/')
    }, [])

    const [error, setError] = useState()
    const [registerSuccess, setRegisterSuccess] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        var fullname = event.target.fullname.value
        var email = event.target.email.value
        var password = event.target.password.value
        var key = event.target.key.value

        handleRegister(key, fullname, email, password)
    }

    const handleRegister = (key, fullname, email, password ) => {
        try {
            registerUser(key, fullname, email, password)
                .then(() => setRegisterSuccess(true))
                .catch(error => setError(error.message))
        } catch (error) {
            setError(error.message)
        }
    }


    return <><Layout>
        {registerSuccess || <section className="register">
            <Link href="/access"><button className="register__back" >◀ back</button></Link>
            <h2 className="register__h2">Sign Up </h2>
            <p className="register__p1">Solo para administradores</p>
            <form className="register__form" onSubmit={handleSubmit}>
                <p className="register__p">Fullname</p>
                <input className="register__input" name="fullname" type="text" placeholder="Fullname" />
                <p className="register__p">E-mail Address</p>
                <input className="register__input" name="email" type="text" placeholder="email@example.com" />
                <p className="register__p">Password</p>
                <input className="register__input" name="password" type="password" placeholder="********" />
                <p className="register__p">Secret key</p>
                <input className="register__input" name="key" type="password" placeholder="********" />

                {error && <FeedbackAccess error={error} />}
                {/* {error && <Feedback error={error} />} */}
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
        <footer className="registerFooter">
    <div className="registerFooter__contact">
        {/* <a className="registerFooter__p" href="mailto:reservas@malbecasadorargentino.es"><p className="registerFooter__p">reservas@malbecasadorargentino.es</p></a>
        <a className="registerFooter__p" href="tel:+34 622706676"><p className="registerFooter__p">reservas: 622706676</p></a> */}

        <p className="registerFooter__p">Carretera de Sant Cugat 63, Rubí, España</p>
        <p className="registerFooter__p">Horarios:  Lunes a Domingo</p>
        <p className="registerFooter__p"> de 10hs a 14hs y de 16hs a 21hs</p>
    </div>
    <div className="registerFooter__social">
        <a className="registerFooter__ig" href="https://www.instagram.com/malbecasadorargentino/">
        <span className="screen-reader-text">Instagram</span>
        <svg className="svgicon social-icon-instagram" aria-hidden="true" role="img">
            <use href="#social-icon-instagram" xlinkHref="#social-icon-instagram">
                #shadow-root (closed)
                    <svg id="social-icon-instagram"  viewBox="0 0 27 32">
                        <path d="M18.286 16q0-1.893-1.339-3.232t-3.232-1.339-3.232 1.339-1.339 3.232 1.339 3.232 3.232 1.339 3.232-1.339 1.339-3.232zM20.75 16q0 2.929-2.054 4.982t-4.982 2.054-4.982-2.054-2.054-4.982 2.054-4.982 4.982-2.054 4.982 2.054 2.054 4.982zM22.679 8.679q0 0.679-0.482 1.161t-1.161 0.482-1.161-0.482-0.482-1.161 0.482-1.161 1.161-0.482 1.161 0.482 0.482 1.161zM13.714 4.75q-0.125 0-1.366-0.009t-1.884 0-1.723 0.054-1.839 0.179-1.277 0.33q-0.893 0.357-1.571 1.036t-1.036 1.571q-0.196 0.518-0.33 1.277t-0.179 1.839-0.054 1.723 0 1.884 0.009 1.366-0.009 1.366 0 1.884 0.054 1.723 0.179 1.839 0.33 1.277q0.357 0.893 1.036 1.571t1.571 1.036q0.518 0.196 1.277 0.33t1.839 0.179 1.723 0.054 1.884 0 1.366-0.009 1.366 0.009 1.884 0 1.723-0.054 1.839-0.179 1.277-0.33q0.893-0.357 1.571-1.036t1.036-1.571q0.196-0.518 0.33-1.277t0.179-1.839 0.054-1.723 0-1.884-0.009-1.366 0.009-1.366 0-1.884-0.054-1.723-0.179-1.839-0.33-1.277q-0.357-0.893-1.036-1.571t-1.571-1.036q-0.518-0.196-1.277-0.33t-1.839-0.179-1.723-0.054-1.884 0-1.366 0.009zM27.429 16q0 4.089-0.089 5.661-0.179 3.714-2.214 5.75t-5.75 2.214q-1.571 0.089-5.661 0.089t-5.661-0.089q-3.714-0.179-5.75-2.214t-2.214-5.75q-0.089-1.571-0.089-5.661t0.089-5.661q0.179-3.714 2.214-5.75t5.75-2.214q1.571-0.089 5.661-0.089t5.661 0.089q3.714 0.179 5.75 2.214t2.214 5.75q0.089 1.571 0.089 5.661z"></path>
                    </svg>
            </use>
        </svg>
        </a>
    </div>
</footer>
    </>

}

export default Register









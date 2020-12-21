import Link from 'next/link'
import './NavBar.sass'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { retrieveUser } from '../logic'


const NavBar = () => {
    const router = useRouter()
    const [user, setUser] = useState()

    useEffect(() => {
        const { token } = sessionStorage

        if (token)
            Promise.all([retrieveUser(token)])
                .then(user => setUser(user))
                .catch(error => alert(error))

    }, [])

    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    }

    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
        // event.target.parentElement.style.width = "0%"
    }

    const handleLogOut = () => {
        delete sessionStorage.token

        router.reload()
    }
    return <div className="navBar navBar__sticky">
        <Link href="/"><div className="navBar__logo">
            <h2 className="navBar__logo__h2" >MALBEC</h2>
            <p className="navBar__logo__p" >Asador Argentino</p>
        </div></Link>
        <span className="navBar__span"  onClick={openNav} >&#9776;</span>

        <div id="myNav" className="navBar__bar overlay">
            <a className="closebtn" onClick={closeNav}>&times;</a>
            <div className="overlay-content">
            <Link href="/"><a className="navBar__a">Home</a></Link>
            <Link href="/nuestro-local"><a className="navBar__a" >Nuestro Local</a></Link>
            <Link href="/carta"><a className="navBar__a">Nuestra Carta</a></Link>
            {user || <Link href="/access"><div className="navBar__access"></div></Link>}
            {user && <Link href="/my-products"><a className="navBar__a" >My Products</a></Link>}
            <a href="http://www.google.com/maps/place/41.486020,2.039880/@41.486020,2.039880,17z" className="navBar__a">Ubicacion</a>
            {user && <a className="navBar__a" onClick={handleLogOut} >Log Out</a>}

            </div>
        </div>
    </div>
}

export default NavBar

import Link from 'next/link'
import './NavBar.sass'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { retrieveUser } from '../logic'


const NavBar = (req) => {
    const router = useRouter()
    const [user, setUser] = useState()

    useEffect(() => {
        const { token } = sessionStorage

        if (token)
            Promise.all([retrieveUser(token)])
                .then(user => setUser(user))
                .catch(alert)

    }, [])

    const handleLogOut = () => {
        delete sessionStorage.token

        router.reload() 
    }
    return <div className="navBar">
        <Link href="/"><div className="navBar__logo">
            <h2 className="navBar__logo__h2" >MALBEC</h2>
            <p className="navBar__logo__p" >Asador Argentino</p>
        </div></Link>
        <ul className="navBar__ul">
            <Link href="/"><li className="navBar__li">Home</li></Link>
            <Link href="/carta"><li className="navBar__li">Nuestra Carta</li></Link>
            {user || <Link href="/access"><li className="navBar__li">Acceder</li></Link>}
        {user && <li className="navBar__li" onClick={handleLogOut} >Log Out</li>}

        </ul>

    </div>
}

export default NavBar

import Link from 'next/link'
import './NavBar.sass'
import { useEffect, useState } from 'react'
import { Profile } from '../components'



const NavBar = (req) => {
    
    


    return <div className="navBar">
        <ul className="navBar__ul">
            <Link href="/"><li className="navBar__li">Home</li></Link>
            <Link href="/carta"><li className="navBar__li">Nuestra Carta</li></Link>
            <Link href="/access"><li className="navBar__li">Acceder</li></Link>
        </ul>

    </div>
}

export default NavBar

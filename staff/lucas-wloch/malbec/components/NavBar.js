import Link from 'next/link'
import './NavBar.sass'

const NavBar = () =>
    <div className="navBar">
        <ul className="navBar__ul">
            <Link href="/"><li className="navBar__li">Home</li></Link>
            <Link href="/access"><li className="navBar__li">Acceder</li></Link>
        </ul>

    </div>


export default NavBar

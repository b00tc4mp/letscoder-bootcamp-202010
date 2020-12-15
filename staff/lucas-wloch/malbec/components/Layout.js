import { NavBar } from '../components'
import { NavBar1 } from '../components'
import Link from 'next/link'
import './Layout.sass'

const Layout = (props) => {
    
    return <div className="layout">
        <NavBar1/>
        {props.children}
    </div>
}
export default Layout
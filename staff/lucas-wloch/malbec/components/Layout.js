import { NavBar } from '../components'
import { NavBar1, Slides1 } from '../components'
import Link from 'next/link'
import './Layout.sass'

const Layout = (props) => {
    // debugger
    var page = props.children.props.className
    return <div className="layout">
        <NavBar1/>
        {page === 'home' && <Slides1/>}
        {props.children}
    </div>
}
export default Layout
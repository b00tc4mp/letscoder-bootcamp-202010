import { NavBar} from '../components'
import Link from 'next/link'
import './Layout.sass'


const Layout = (props) => {

    return <div>
        <NavBar/>
        <Link href="/"><h1 className="layout__h1">MALBEC</h1></Link>
        {props.children}
    </div>
}
export default Layout
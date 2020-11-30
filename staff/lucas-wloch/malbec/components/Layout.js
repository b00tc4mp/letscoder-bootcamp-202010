import { NavBar} from '../components'
import './Layout.sass'


const Layout = (props) => {

    return <div>
        <NavBar/>
        <h1 className="layout__h1">MALBEC</h1>
        {props.children}
    </div>
}
export default Layout
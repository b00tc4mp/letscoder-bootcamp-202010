import { NavBar1, Slides1 } from '../components'
import './Layout.sass'

const Layout = (props) => {
    // debugger
    if(props.children && props.children.props && props.children.props.className)
        var page = props.children.props.className

    return <div className="layout">
        <NavBar1/>
        {/* {page === 'home' && <Slides1/>} */}
        {props.children}
        
    </div>
}
export default Layout

// footer,, direccion. numero de telefono. email? . cuentas de ig, faceebook, 
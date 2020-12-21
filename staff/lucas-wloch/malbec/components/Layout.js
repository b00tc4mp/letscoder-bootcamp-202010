import { NavBar } from '../components'
import './Layout.sass'
import Head from 'next/head'

const Layout = (props) => {
    // debugger
    if (props.children && props.children.props && props.children.props.className)
        var page = props.children.props.className

    return <div className="layout">
        <Head>
            <title>Malbec</title>
            <link rel="icon"
                type="image/png"
                href="/icon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <NavBar />
        {props.children}

    </div>
}
export default Layout

// footer,, direccion. numero de telefono. email? . cuentas de ig, faceebook, 
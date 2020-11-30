import { Layout } from '../components'
import '../components/Access.sass'
import Link from 'next/link'



const Access = () => {

    return <Layout>
            <div className="access">
                <Link href="/register"><button className="access__register" >Register</button></Link>
                <Link href="/login"><button className="access__login" >Login</button></Link>
            </div>
        </Layout>

}


export default Access
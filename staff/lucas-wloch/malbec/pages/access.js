import { Layout } from '../components'
import '../components/Access.sass'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Access = (req, res) => {
    const router = useRouter()
    useEffect(() => {
        const { token } = sessionStorage

        if (token) router.push('/')
    }, [])

    return <Layout>
        <div className="access">
            <Link href="/register"><button className="access__register" >Register</button></Link>
            <Link href="/login"><button className="access__login" >Login</button></Link>
        </div>
    </Layout>

}


export default Access
import {  MyProducts, Layout} from '../components'
import '../components/MyProducts.sass'
import { useEffect } from 'react'

import { useRouter } from 'next/router'

export default (req, res) => {
    const router = useRouter()

    useEffect(() => {
        const { token } = sessionStorage

        if (!token) return router.push('/')
    }, [])

    return <Layout>
        <MyProducts/>
    </Layout>

}



import { Layout, SaveProducts } from '../components'
import '../components/Home.sass'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { retrieveUser } from '../logic'




const Home = () => {
    const router = useRouter()
    const [view, setView] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        const { token } = sessionStorage

        if (token)
            retrieveUser(token, (error, user) => {
                if (error) return alert(error)

                setUser(true)
            })

    }, [])

    return <Layout>
        <div className="home">
            {user && view === undefined && <button onClick={() => setView('save-product')}>Create a product</button>}
            {user && view === 'save-product' && <SaveProducts onExit={() => setView()} />}
            {user && view === undefined && <Link href="/my-products"><button >My Products</button></Link>}
            {view === undefined && <Link href="/carta"><button >Ver La Carta</button></Link>}
        </div>
    </Layout>
}



export default Home


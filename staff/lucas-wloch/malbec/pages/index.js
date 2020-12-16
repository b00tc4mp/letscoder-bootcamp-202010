import { Feedback, Layout, Footer, Slides1  } from '../components'
import '../components/Home.sass'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { retrieveUser } from '../logic'




const Home = () => {
    const router = useRouter()
    const [view, setView] = useState()
    const [user, setUser] = useState()
    const [error, setError] = useState()


    useEffect(() => {
        const { token } = sessionStorage

        if (token)
            retrieveUser(token)
                .then(user => setUser(true))
                .catch(error => setError(error))

    }, [])


    return <><Layout>
        <div className="home">
            {/* <div className="home__logo"><img className="home__logo__img" src="/Malbec.png"/></div> */}
            {/* <Feedback error="hola"/> */}
            {/* {user && view === undefined && <button onClick={() => setView('save-product')}>Create a product</button>}
            {user && view === 'save-product' && <SaveProducts onExit={() => setView()} />} */}
            {/* {view === undefined && <Link href="/carta"><button >Ver La Carta</button></Link>} */}
            <Slides1/>
            {error && <Feedback error={error}  onExit={setError()}/>}
            {/* <h3 className="home__h3" >Nuestro Local</h3> */}

            {/* <div className="home__nuestroLocal">
                <img className="home__nuestroLocal__img" src="/330-200.jpg" />
                <img className="home__nuestroLocal__img" src="/330-200.jpg" />
                <img className="home__nuestroLocal__img" src="/330-200.jpg" />
                <img className="home__nuestroLocal__img" src="/330-200.jpg" />
            </div> */}
        </div>
        </Layout>
        <Footer/>
    </>
}



export default Home


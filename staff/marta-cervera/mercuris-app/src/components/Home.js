import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveProduct } from '../logic'
import SaveProduct from './SaveProduct'
import SearchProducts from './SearchProducts'
import Profile from './Profile'
import {Link} from 'react-router-dom'

export default function Home() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')

    const [name, setName] = useState()
    //const [products, setProducts] = useState()



    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { name } = user

                setName(name)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])
    const handleSaveProduct = (name, description, price) => {
        const { token } = sessionStorage

        try {
            saveProduct(undefined, token, name, description, price, error => {
                if (error) return alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToProfile = () => {
        setView('profile')
    }
    const handleGoToHome = () => {

        setView('home')
    }


    return (
        <section className="home">            
            { <button className="home__profile" onClick={handleGoToProfile}>PROFILE</button>}
            { <button className="home__profile" onClick={handleGoToHome}>HOME</button>}
            {view === 'home' && <SaveProduct onSaveProduct={handleSaveProduct} name = {name} />}
            {view === 'profile' && <SearchProducts />}
            {view === 'profile' && <Profile/>}

        </section >
    );
}
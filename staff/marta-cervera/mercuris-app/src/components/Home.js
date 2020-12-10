import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveProduct, saveProductImage, findProducts } from '../logic'
import SaveProduct from './SaveProduct'
import SearchProducts from './SearchProducts'
import Profile from './Profile'


export default function Home() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')

    const [name, setName] = useState()
    const [products, setProducts] = useState()



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


    const handleSaveProduct = (name, description, price, image) => {
        const { token } = sessionStorage

        try {
            saveProduct(undefined, token, name, description, price, (error, productId) => {
                if (error) return alert(error.message)

                saveProductImage(productId, image, error => {
                    if (error) return alert(error.message)
                    /* try {
                        findProducts(token, (error, products) => {
                            if (error) return alert(error.message)

                            setProducts(products)
                        })
                    }  catch (error) {
                        alert(error.message)
                    } */
                  })
            }
            )
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
    
    const handleSearchProducts = ( queryCompany, queryProduct, price, priceMin, priceMax) => {
        try {
           const { token } = sessionStorage

           findProducts(token, queryCompany, queryProduct, price, priceMin, priceMax, (error, products) =>{
               if (error) return alert (error.message)
               setProducts(products)
        })
                
        } catch(error) {
            alert(error.message)
        }
    }


    



    return (
        <section className="home">
            {view === 'home' && <button className="home__profile" onClick={handleGoToProfile}>PROFILE</button>}
            {view === 'profile' && <button className="home__profile" onClick={handleGoToHome}>HOME</button>}
            {view === 'home' && <SaveProduct onSaveProduct={handleSaveProduct} name={name} />}
            {view === 'profile' && <Profile name={name} />}
            {view === 'profile' && <SearchProducts onSearch={handleSearchProducts}/>}

        </section >
    );
}
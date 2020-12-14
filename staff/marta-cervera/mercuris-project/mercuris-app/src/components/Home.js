import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveProduct, saveProductImage, findProducts } from '../logic'
import SaveProduct from './SaveProduct'
import SearchProducts from './SearchProducts'
import Profile from './Profile'


export default function Home({onLogout}) {

    const [error, setError] = useState(null)
    
    function feedbackError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 10000)
    }
    
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')
    const [success, setSuccess] = useState()
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
            return alert(error.message)
        }
    }, [])


    const handleSaveProduct = (name, description, price, image) => {
        const { token } = sessionStorage

        try {
            saveProduct(undefined, token, name, description, price, (error, productId) => {
                if (error) return feedbackError(error.message)

                saveProductImage(productId, image, error => {
                    if (error) return feedbackError(error.message)
                    setSuccess(true)
                    
                  })
            }
            )
        } catch (error) {
           return feedbackError(error.message)
        }
    }

    const handleGoToProfile = () => {
        setView('profile')
    }
    const handleGoToHome = () => {

        setView('home')
    }
    
    const handleSearchProducts = (queryCompany, queryProduct, price, priceMin, priceMax) => {
        try {
           const { token } = sessionStorage 

           findProducts(token, queryCompany, queryProduct, price, priceMin, priceMax, (error, products) =>{
               if (error) return feedbackError('could not find any product')
               setProducts(products)
        })
                
        } catch(error) {
            alert(error.message)
        }
    }


    return (
        <div className="home">
            <button className="home__logout" onClick={()=> {
        setName(null)
        setError(null)
        onLogout()}}>LOGOUT</button>
            {view === 'home' && <button className="home__profile" onClick={handleGoToProfile}>PROFILE</button>}
            {view === 'profile' && <button className="home__profile" onClick={handleGoToHome}>HOME</button>}
            {view === 'home' && <SaveProduct onSaveProduct={handleSaveProduct} name={name} error ={error}/>}
            {view === 'profile' && <Profile name={name} />}
            {view === 'profile' && <SearchProducts onSearch={handleSearchProducts}/>}
            {success && <h2>PRODUCT SAVED 🤩 </h2>}
        </div >
    );
}
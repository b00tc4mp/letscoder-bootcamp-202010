import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveProduct, saveProductImage, findProducts } from '../logic'
import SaveProduct from './SaveProduct'
import SearchProducts from './SearchProducts'
import Profile from './Profile'
import modifyUser from '../logic/modify-user'



export default function Home({ onLogout }) {

    const [error, setError] = useState(null)

    function feedbackError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 10000)
    }

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')
    const [success, setSuccess] = useState()
    const [currentUser, setCurrentUser] = useState()
    const [products, setProducts] = useState()
    const [changes, setChanges] = useState()


    
    useEffect(() => {
        const { token } = sessionStorage
        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { name, address, contact, city, phone } = user

                setCurrentUser({ name, address, contact, city, phone })
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

            findProducts(token, queryCompany, queryProduct, price, priceMin, priceMax, (error, products) => {
                if (error) return feedbackError('could not find any product')
                setProducts(products)
            })

        } catch (error) {
            alert(error.message)
        }
    }
    const handleGoToSearchProducts = () => {
        setView('search-products')
    }

    const handleModifyUser = (name, contact, address, city, phone) => {

        try {
            const { token } = sessionStorage

            modifyUser(token, { name, contact, address, city, phone }, (error, changes) => {
                if (error) return feedbackError('could not find any changes')
                

                setCurrentUser({name, contact,address,city,phone})


            })
        } catch (error) {

        }
    }


    return (
        <div className="home">
            <button className="home__logout" onClick={() => {
                setCurrentUser(null)
                setError(null)
                onLogout()
            }}>LOGOUT</button>
            {view === 'home' && <button className="home__profile" onClick={handleGoToProfile}>PROFILE</button>}
            {view === 'profile' || 'search-products' && <button className="home__profile" onClick={handleGoToHome}>HOME</button>}
            {view === 'home' && <button className="home__profile" onClick={handleGoToSearchProducts}>SEARCH</button>}
            {view === 'home' && <SaveProduct onSaveProduct={handleSaveProduct} name={currentUser && currentUser.name} error={error} />}
            {view === 'profile' && <Profile currentUser={currentUser} onModify={handleModifyUser} />}
            {view === 'search-products' && <SearchProducts onSearch={handleSearchProducts} />}
            {success && <h2>PRODUCT SAVED 🤩 </h2>}
        </div >
    );
}
import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveProduct, saveProductImage, findProducts } from '../logic'
import SaveProduct from './SaveProduct'
import SearchProducts from './SearchProducts'
import Profile from './Profile'
import modifyUser from '../logic/modify-user'



export default function Home({ onLogout }) {

    const [feedback, setFeedback] = useState(null)

    function showFeedback(feedback) {
        setFeedback(feedback)
        setTimeout(() => {
            setFeedback(null)
        }, 10000)
    }

    const [view, setView] = useState(sessionStorage.token ? 'search-products' : 'access')
    const [currentUser, setCurrentUser] = useState()
    



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
            saveProduct(token,undefined, name, description, price, (error, productId) => {
                if (error) return showFeedback(error.message)

                saveProductImage(token,productId, image, error => {
                    if (error) return showFeedback(error.message)
                    

                })
            }
            )
        } catch (error) {
            return showFeedback(error.message)
        }
    }

    const handleGoToProfile = () => {
        setView('profile')
    }
    const handleGoToHome = () => {

        setView('home')
    }

    const handleGoToSearchProducts = () => {
        setView('search-products')
    }

    const handleModifyUser = (name, contact, address, city, phone) => {

        try {
            const { token } = sessionStorage

            modifyUser(token, { name, contact, address, city, phone }, (error, changes) => {
                if (error) return showFeedback('could not find any changes')


                setCurrentUser({ name, contact, address, city, phone })


            })
        } catch (error) {
            showFeedback(error.message)
        }
    }


    return (
        <div className="home">
            <div className="home__div">
            {<button className="home__div__btn" onClick={handleGoToSearchProducts}>SEARCH</button>}
            {<button className="home__div__btn" onClick={handleGoToProfile}>PROFILE</button>}
            {<button className="home__div__btn" onClick={handleGoToHome}>REGISTER PRODUCT</button>}
            {<button className="home__div__btn1" onClick={() => {
                setCurrentUser(null)
                setFeedback(null)
                onLogout()
            }}>LOGOUT</button>}
            </div>            
            {view === 'home' && <SaveProduct onSaveProduct={handleSaveProduct} name={currentUser && currentUser.name} error={feedback} />}
            {view === 'profile' && <Profile currentUser={currentUser} onModify={handleModifyUser} />}
            {view === 'search-products' && <SearchProducts />}
            
        </div >
    );
}
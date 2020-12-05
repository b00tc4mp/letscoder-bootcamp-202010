import sixpack from '../components/icons/sixpack.png'
import './styles/UserProfile.sass'
import {SavedFood} from '.'
import { retrieveSavedFood, toggleFoodUserDiet } from '../logic'
import { useState, useEffect } from 'react'

export default function UserProfile ({ name ,onLogout, savedArticles, savedRecipes, onGoToChosenArticle }) {

    const [userChosenFoods, setUserChosenFoods] = useState()
    const [message, setMessage] = useState()

    const { token } = sessionStorage

    useEffect(() => {
        try {
            retrieveSavedFood(token, (error, chosenFoods) => {
                if (error) return alert(error.message)

                setUserChosenFoods(chosenFoods)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleDeleteFood = foodId => {
        try{
            toggleFoodUserDiet(token, foodId, error => {
                if (error) return alert(error.message)
    
                retrieveSavedFood(token, (error, chosenFoods) => {
                    if (error) return alert(error.message)
    
                    setMessage(true)
                    setTimeout(() => setMessage(false), 4000)
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <section className="user-profile">
        <div className="user-profile__name-pic">
        <img src={sixpack} alt="logo-profile" height="100" width="100"/>
            <div className="user-profile__question-btn">
            <p>¿No eres...</p>
            <div className="user-profile__name-logout">
            <p className="user-profile__name">...{name} ?</p>
            <button className="user-profile__logout" onClick={onLogout}>Cierra sesión</button>
            </div>
            </div>
        </div>
        <h3>¡Ponte el delantal!</h3>
        {/* {savedRecipes.length === 0 && <p>No has añadido recetas a tu lista</p>} */}
        {savedRecipes && savedRecipes.length && <ul>
        {savedRecipes.map(({ _id , title, img }) => <li key={_id} className="user-profile__recipes">
        <div className="user-profile__recipes-list">
            <a href="#recipes">{title}</a>
        </div>
        </li>)}
        </ul>}
        <h3>Para leer....</h3>
        {!savedArticles.length && <p className="user-profile__no-articles">No tienes artículos por leer</p>}
        {savedArticles && savedArticles.length && <ul>
        {savedArticles.map(({ title, _id }) => <li key={_id} className="user-profile__articles">
        <div className="user-profile__articles--list">
        <a className="user-profile__articles--link" onClick={() => onGoToChosenArticle(_id)} href="#">{title}</a>
        </div>
        </li>)}
        </ul>}
        <h3>Registro de alimentos</h3>
        <SavedFood onDelete={handleDeleteFood} message={message} food={userChosenFoods}/>
    </section>
}

// TODO retrieveUserRecipes
// TODO implement retrieveSavedFoods

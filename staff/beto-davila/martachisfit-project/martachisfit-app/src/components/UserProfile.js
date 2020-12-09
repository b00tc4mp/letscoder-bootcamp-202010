import sixpack from '../components/icons/sixpack.png'
// import cancelar from '../components/icons/cancelar.png'
import './styles/UserProfile.sass'
import {SavedFood} from '.'
import { retrieveSavedFood, toggleFoodUserDiet } from '../logic'
import { useState, useEffect } from 'react'

export default function UserProfile ({ name ,onLogout, savedArticles, savedRecipes, onGoToRecipe, onGoToChosenArticle }) {

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

                setMessage(true)
                setTimeout(() => setMessage(false), 4000)
                retrieveSavedFood(token, (error, chosenFoods) => {
                    if (error) return alert(error.message)
    
                    setUserChosenFoods(chosenFoods)
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <section className="user-profile">
        <div className="user-profile-pseudo">
        <div className="user-profile__name-pic">
        {/* <img src={sixpack} alt="logo-profile" height="100" width="100"/> */}
            <div className="user-profile__question-btn">
            <p className="user-profile__question">¿Ya te marchas,</p>
            <div className="user-profile__name-logout">
            <p className="user-profile__name"> {name} ?</p>
            <button className="user-profile__logout" onClick={onLogout}>Cierra sesión</button>
            </div>
            </div>
        </div>


        <div className="user-profile__recipes-container">
        <h3>¡Ponte el delantal!</h3>
        {!savedRecipes.length && <p className="user-profile__no-recipess">No has añadido recetas a tu colección</p>}
        <div className="user-profile__recipes-carousel">
        {savedRecipes.map(({_id, urlPathImg}) => <div className="user-profile__recipes-carousel-recipe" key={_id} onClick={() => onGoToRecipe(_id)}>
        {urlPathImg && <img className="user-profile__recipes-carousel-img" src={urlPathImg} alt="recipe-img-saved"/>}
        </div>)}
        </div>
        </div>


        <div className="user-profile__articles-container">
        <h3>Para leer....</h3>
        {!savedArticles.length && <p className="user-profile__no-articles">No tienes artículos por leer</p>}
        {savedArticles && savedArticles.length && <ul className="user-profile__articles">
        {savedArticles.map(({ title, _id }) => <li key={_id} className="user-profile__articles-list">
        <div className="user-profile__articles--list">
        <a className="user-profile__articles--link" onClick={() => onGoToChosenArticle(_id)} href="#">{title}</a>
        </div>
        </li>)}
        </ul>}
        </div>


        <div className="user-profile__record-container">
        <h3>Registro de alimentos</h3>
        <SavedFood onDelete={handleDeleteFood} message={message} food={userChosenFoods}/>
        </div>
        </div>
    </section>
}

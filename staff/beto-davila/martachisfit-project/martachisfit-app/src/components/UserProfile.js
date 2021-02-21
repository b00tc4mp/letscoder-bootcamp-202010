import './styles/UserProfile.sass'
import { SavedFood, Chart } from '.'
import { retrieveSavedFood, toggleFoodUserDiet } from '../logic'
import { useState, useEffect } from 'react'
import mancuerna from './icons/mancuerna.png'
import bascula from './icons/bascula.png'


export default function UserProfile({ user, avatar, onSaved, feedbackWeight, onLogout, savedArticles, savedRecipes, onGoToRecipe, onGoToChosenArticle, onGoToMyWorkout, myWorkouts, onSavePicture, onSaveWeight, onDelete }) {
    const [userChosenFoods, setUserChosenFoods] = useState()
    const [message, setMessage] = useState()

    const API_URL = process.env.REACT_APP_API_URL

    const { token } = sessionStorage

    const { fullname, weightHistory, id } = user

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
        try {
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

    const handleSubmitPicture = event => {
        event.preventDefault()

        let { target: { image } } = event

        onSavePicture(image.files[0])
    }

    const handleSubmitWeight = event => {
        event.preventDefault()

        let { target: { weight: { value: weight } } } = event

        onSaveWeight(parseFloat(weight))
        onSaved()

    }

    return <section className="user-profile">
        <div className="user-profile-pseudo">
            <div className="user-profile__name-pic">
                <div className="user-profile__logout-container">
                    <button className="user-profile__delete" onClick={onDelete}>Borrar perfil</button>
                    <button className="user-profile__logout" onClick={onLogout}>Logout</button>
                </div>
                <div className="user-profile__name-weight-desktop">
                    <div className="user-profile__question-btn">
                        {fullname && <p className="user-profile__user">¡Hola, <span className="user-profile__user--name">{fullname}</span>!</p>}
                        {avatar ? <img className="user-profile__pic" src={`${API_URL}/users/${id}/uploads`} /> : <img className="user-profile__pic" src='https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg' width='90' />}
                        <div className="user-profile__progression">
                            <form className="user-profile__avatar-form" onSubmit={handleSubmitPicture}>
                                <input className="user-profile__progression-input" type="file" id="image" name="image" />
                                <button className="user-profile__progression-btn">Guardar</button>
                            </form>
                        </div>
                    </div>

                    {weightHistory && <Chart weightHistory={weightHistory} />}

                    <div className="user-profile__weights-container">
                        <img src={bascula} className="user-profile__scale-img" alt="bascula"></img>
                        {weightHistory.length > 1 ? <p className="user-profile__before">Previo: {weightHistory[weightHistory.length - 2].weight} Kg ({weightHistory[weightHistory.length - 2].modifiedAt})</p> : <p className="user-profile__before">Peso anterior: Sin registro</p>}
                        {weightHistory.length ? <p className="user-profile__current"><span className="bold">Actual: {weightHistory[weightHistory.length - 1].weight} Kg ({weightHistory[weightHistory.length - 1].modifiedAt}) </span></p> : <p className="user-profile__current">Peso actual: Sin registro</p>}
                        <form className="user-profile__weight-form" onSubmit={handleSubmitWeight}>
                            <input type="text" name="weight" placeholder="Tu peso actual"></input>
                            <button className="user-profile__weight-btn">Guardar</button>
                        </form>
                    </div>
                    {feedbackWeight && <p className="user-profile__feedback">Peso actualizado</p>}
                </div>

                <div className="user-profile__container">
                    <div className="user-profile__workout-container">
                        <h3>Mi Rutina</h3>
                        {!myWorkouts.length && <p className="user-profile__no-workout">No has añadido tu rutina de entrenamiento</p>}
                        {myWorkouts && !!myWorkouts.length && <ul className="user-profile__workout">
                            {myWorkouts.map(({ name, id, level }) => <li key={id} className="user-profile__workout-list">
                                <div className="user-profile__workout--list">
                                    <img src={mancuerna} alt="mancuerna"></img><a className="user-profile__workout--link" onClick={() => onGoToMyWorkout(level)} href="#">{name}</a>
                                </div>
                            </li>)}
                        </ul>}
                    </div>

                    <div className="user-profile__recipes-container">
                        <h3>¡Ponte el delantal!</h3>
                        {!savedRecipes.length && <p className="user-profile__no-recipes">No has añadido recetas a tu colección</p>}
                        <div className="user-profile__recipes-carousel">
                            {savedRecipes.map(({ _id, urlPathImg }) => <div className="user-profile__recipes-carousel-recipe" key={_id} onClick={() => onGoToRecipe(_id)}>
                                {urlPathImg && <img className="user-profile__recipes-carousel-img" src={urlPathImg} alt="recipe-img-saved" />}
                            </div>)}
                        </div>
                    </div>

                    <div className="user-profile__articles-container">
                        <h3>Para leer....</h3>
                        {!savedArticles.length && <p className="user-profile__no-articles">No tienes artículos por leer</p>}
                        {savedArticles && !!savedArticles.length && <ul className="user-profile__articles">
                            {savedArticles.map(({ title, _id }) => <li key={_id} className="user-profile__articles-list">
                                <div className="user-profile__articles--list">
                                    <a className="user-profile__articles--link" onClick={() => onGoToChosenArticle(_id)} href="#">{title}</a>
                                </div>
                            </li>)}
                        </ul>}
                    </div>

                    <div className="user-profile__record-container">
                        <h3>Registro de alimentos</h3>
                        <SavedFood onDelete={handleDeleteFood} message={message} food={userChosenFoods} />
                    </div>
                </div>
            </div>
        </div>
    </section >
}

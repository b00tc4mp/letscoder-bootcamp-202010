import { retrieveSavedFood, addFoodUserDiet } from '../logic'
import './styles/FoodResult.sass' 
import { useState } from 'react'
import { SavedFood } from '.'

export default function FoodResult ({ result, user }) {

    const { token } = sessionStorage

    const [view, setView] = useState()
    const [food, setFood] = useState()

    const { id: userId } = user
    const {_id: foodId, name, calories, serving, carbs, protein, fats} = result

    const handleSaveFood = () => {
        try {
            addFoodUserDiet(token, foodId, error => {
                if (error) return alert(error.message)

                setView('added-food')
            }) 
        } catch (error) {
            return alert(error.message)
        }
    }

    const handleRetrieveDiet = () => {
        try {
            retrieveSavedFood(token, (error, food) => {
                if (error) return alert(error.message)
    
                // const {name, calories} = food
                setFood(food)
                setView('saved-food')
            })
            
        } catch (error) {
            return alert(error.message)
        }

    }

    return <> 
    <section className="food-result">
        <h4 className="food-result__title">Resultado</h4>
        <p className="food-result__item">Alimento: {name}</p>
        <p className="food-result__item">Calorías: {calories} Kcal</p>
        <p className="food-result__item">Porción: {serving} (gramos o unidad) </p>
        <p className="food-result__item">Carbohidratos: {carbs} gr.</p>
        <p className="food-result__item">Proteínas: {protein} gr.</p>
        <p className="food-result__item">Grasas: {fats} gr.</p>
        <button onClick={handleSaveFood}className="food-result__add">Añadir</button>
    </section>
    {view === 'added-food' && <p className="food-result__added">¡Alimento añadido! Puede ir a visualizar su <a onClick={handleRetrieveDiet} href="#record">registro</a> o continuar añadiendo alimentos.</p>}
    {view === 'saved-food' && <SavedFood food={food} />}
</>
}
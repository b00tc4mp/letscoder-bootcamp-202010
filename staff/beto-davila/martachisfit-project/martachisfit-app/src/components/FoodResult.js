import { addFoodUserDiet } from '../logic'
import './styles/FoodResult.sass' 
import { useState } from 'react'
// import { SavedFood } from '.'

export default function FoodResult ({ result }) {

    const { token } = sessionStorage

    const [view, setView] = useState()
    // const [food, setFood] = useState()

    const {_id: foodId, name, calories, serving, carbs, protein, fats} = result

    const handleSaveFood = event => {

        event.preventDefault()

        try {
            addFoodUserDiet(token, foodId, error => {
                if (error) return alert(error.message)

                setView(true)
                setTimeout(() => {
                    setView(false)
                    }, 2000)
            }) 
        } catch (error) {
            return alert(error.message)
        }
    }

    // const handleRetrieveDiet = () => {
    //     try {
    //         retrieveSavedFood(token, (error, food) => {
    //             if (error) return alert(error.message)
    
    //             // const {name, calories} = food
    //             setFood(food)
    //             setView('saved-food')
    //         })
            
    //     } catch (error) {
    //         return alert(error.message)
    //     }

    // }

    return <> 
    <section className="food-result">
        <h4 className="food-result__title">Resultado</h4>
        <p className="food-result__item"><span className="food-result__category">Alimento:</span> {name}</p>
        <p className="food-result__item"><span className="food-result__category">Calorías:</span> {calories} Kcal</p>
        <p className="food-result__item"><span className="food-result__category">Porción:</span> {serving} (gramos o unidad) </p>
        <p className="food-result__item"><span className="food-result__category">Carbohidratos:</span> {carbs} gr.</p>
        <p className="food-result__item"><span className="food-result__category">Proteínas:</span> {protein} gr.</p>
        <p className="food-result__item"><span className="food-result__category">Grasas:</span> {fats} gr.</p>
        <button onClick={handleSaveFood}className="food-result__add">Añadir</button>
    {view === true && <p className="food-result__added">¡Alimento añadido!</p>}
    </section>
    {/* {view === 'saved-food' && <SavedFood food={food} />} */}
</>
}
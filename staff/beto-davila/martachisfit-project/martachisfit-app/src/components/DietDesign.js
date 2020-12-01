import { findFood, retrieveUser } from '../logic'
import { useState, useEffect } from 'react'
import './styles/DietDesign.sass'
import { FoodResult } from './index'
import lupa from './icons/lupa.png'

export default function DietDesign () {

    const [food, setFood] = useState()
    const [view, setView] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                // const { _id } = user
                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleFindFood = query => {
        try {
            findFood(query, (error, food) => {
                if (error) alert(error.message)
    
                // const {calories, serving, carbs, protein, fats} = _food
                setFood(food)
                setView('food-result')
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    return <>
            <section className="diet-design">
                <h3 className="diet-design__title">Busca un alimento</h3>

                <form onSubmit={event => {
                    event.preventDefault()

                    const { target: { query: { value: query } } } = event

                    handleFindFood(query)
                }}>
                    <input className="diet-design__input" type="text" name="query" placeholder="p.e. Arroz"/>
                    <button className="diet-design__search"><img alt="lupa" className="diet-design__lupa" src={lupa} height="12" width="12"/></button>
                </form> 
                {/* {feedback !== undefined && <p>{feedback}</p>} */}
            </section>
            {view === 'food-result' && <FoodResult result={food} user={user}/>}
    </>
}

// TODO feedback when there are no results
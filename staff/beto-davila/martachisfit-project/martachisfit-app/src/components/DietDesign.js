import { findFood, retrieveUser } from '../logic'
import { useState, useEffect } from 'react'
import './styles/DietDesign.sass'
import { Feedback, FoodResult } from './index'
import lupa from './icons/lupa.png'

export default function DietDesign () {

    const [food, setFood] = useState()
    const [view, setView] = useState()
    const [user, setUser] = useState()
    const [error, setError] = useState()

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
                if (error) return alert(error.message)
    
                if (food === undefined) return setError(error='Lo siento, no hay resultados')
                setFood(food)
                setView('food-result')
            })
        } catch (error) {
            return alert(error.message)
        }
    }

    return <>
            <div className="diet-design-pseudo">
            <section className="diet-design">
                <h3 className="diet-design__title">Busca un alimento</h3>
                    <p className="diet-design__description"> Conoce tus alimentos y añádelos a tu registro diario en tu perfil, para ser más consciente de tu consumo calórico.</p>
                    <div className="diet-design__bar-result">
                        <form className="diet-design__search-form" onSubmit={event => {
                            event.preventDefault()

                            const { target: { query: { value: query } } } = event

                            handleFindFood(query)
                        }}>
                            <input className="diet-design__input" type="text" name="query" placeholder="p.e. Arroz" required/>
                            <button className="diet-design__search"><img alt="lupa" className="diet-design__lupa" src={lupa} height="12" width="12"/></button>
                        </form>
                        {((view === 'food-result' && !error) || (view === 'food-result' && error)) && <FoodResult result={food}/>}
                        {(error && view !== 'food-result') && <Feedback error={error}></Feedback>} 
                    </div>
            </section>
        </div>
    </>
}
import './styles/CaloriesGoal.sass'
import grafico from './icons/grafico.png'
import { Link } from 'react-router-dom'

function CaloriesGoal({ macros }) {
    return <section className="goal">
        <h1 className="goal__title">
            Calorías objetivo
    </h1>
        {macros && <h1 className="goal__title">{macros.calories} Kcal</h1>}

        <div className="goal__macros">
            <img alt="grafico" src={grafico}></img>

            {macros && <p>{macros.carbs} gr Carbohidratos</p>}
            {macros && <p>{macros.protein} gr Proteínas</p>}
            {macros && <p>{macros.fats} gr Grasas</p>}
        </div>

        <h3 className="goal__subtitle">¡Estamos ready!</h3>

        <h3 className="goal__subtitle">Para conseguir el mejor resultado de tu nuevo estilo de vida, anota tus <span className="goal__calories">calorías objetivo</span> y completa tu....</h3>
        <div className="goal__register">
            <Link to="/sign-up" className="goal__register-btn">REGISTRO</Link>
        </div>

        <p className="goal__p">¿Necesitas ayuda para interpretar el resultado y un seguimiento personalizado? Tenemos el plan perfecto para ti ;)</p>

        {/* <h3 className="goal__subtitle">Acceso a los <a className="goal__plans" onClick={onGoToPlans}>planes</a></h3> */}

    </section>

}

export default CaloriesGoal
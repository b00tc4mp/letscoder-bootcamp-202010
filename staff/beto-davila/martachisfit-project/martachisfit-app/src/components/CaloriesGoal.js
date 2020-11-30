import './CaloriesGoal.sass'
import grafico from './icons/grafico.png'

function CaloriesGoal ({macros, onGoToPlans, onGoToRegister}) {
    return <section className="goal">
    <h1 className="goal__title">
        Calorías objetivo
    </h1>
    <h3 className="goal__subtitle">{macros.calories} Kcal</h3>

    <div className="goal__macros">
    <img alt="grafico" src={grafico}></img>

    <p>{macros.carbs} gr Carbohidratos</p>
    <p>{macros.protein} gr Proteínas</p>
    <p>{macros.fats} gr Grasas</p>
    </div>

    <h3 className="goal__subtitle">¡Estamos ready!</h3>

    <h3 className="goal__subtitle">Vamos a completar tu <a className="goal__register"onClick={onGoToRegister}>cuenta</a></h3>

    <p className="goal__p">¿Necesitas ayuda para interpretar el resultado y un seguimiento personalizado? Tenemos el plan perfecto para ti ;)</p>

    <h3 className="goal__subtitle">Acceso a los <a className="goal__plans" onClick={onGoToPlans}>planes</a></h3>

    </section>

}

export default CaloriesGoal
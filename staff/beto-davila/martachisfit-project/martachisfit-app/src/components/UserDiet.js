import './styles/UserDiet.sass'

export default function UserDiet({ diet, onGoToDiets }) {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return <section className="user-diet">
        <div className="user-diet-pseudo">
            <a href="#" className="user-diet__back" onClick={onGoToDiets}>Atrás</a>
            <h2 className="user-diet__title">Para hoy <span className="user-diet__time">{today.toLocaleDateString()}</span></h2>

            <p className="user-diet__description" >....una selección diaria de acuerdo a las calorías objetivo en tu caso.</p>

            {diet && <div className="user-diet__cal-type">
                <h4 className="user-diet__calories"> {diet.calories} kcal</h4>
                <h4 className="user-diet__type"> Tipo "{diet.type}" </h4>
            </div>}
            {diet && <div className="user-diet__macros">
                <p className="user-diet__carbs bold"> Carbohidratos {diet.macros.carbs} </p>
                <p className="user-diet__protein bold"> Proteína {diet.macros.protein} </p>
                <p className="user-diet__fats bold"> Grasas {diet.macros.fats} </p>
            </div>}
            <hr className="user-diet__line"></hr>
            {diet && <div className="user-diet__meals">
                <h4>Comida 1</h4>
                <p className="user-diet__meal">{diet.meals.meal1}</p>
                <h4>Comida 2</h4>
                <p className="user-diet__meal">{diet.meals.meal2}</p>
                <h4>Comida 3</h4>
                <p className="user-diet__meal">{diet.meals.meal3}</p>
                <h4>Comida 4</h4>
                {diet.meals.meal4 ?
                    <p className="user-diet__meal">{diet.meals.meal4}</p> : <p className="user-diet__meal">No disponible. Cumplimos objetivo con las comidas anteriores.</p>}
            </div>}
            <hr className="user-diet__line"></hr>
            {/* <p className="user-diet__random">¿No te gusta tu dieta de hoy? ¡No hay drama!, te ofrecemos <a href="#" onClick = {handleGoToRandomDiet} className="user-diet__other">más</a> opciones ;)</p> */}
        </div>
    </section>
}
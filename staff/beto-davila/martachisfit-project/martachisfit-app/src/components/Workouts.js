import './styles/Workouts.sass'

export default function Workouts({onChosenLevel}) {

    return <section className="workouts">
        <div className="workouts-pseudo">
        <h3 className="workouts__title"> ¿Cuál es tu nivel?</h3>
        <div onClick={() => onChosenLevel("beginner")} className="workouts__level">
            <h4 className="workouts__level-title"> Principiante </h4>
            <p className="workouts__level-description"> 
            Este es tu nivel si <span className="bold">no tienes experiencia</span> en el entrenamiento con cargas o incluso llevas <span className="bold">menos de 6 meses</span> entrenando de manera consistente. 
            Podrías considerarte también principiante si, aún llevando un año o algo más entrenando, no lo has hecho con <span className="bold">constancia</span>, 
            con lo cual no has logrado crear una adaptación notable en tu cuerpo a nivel estético ni de fuerza. 
            </p>
        </div>

        <div onClick={() => onChosenLevel("intermediate")} className="workouts__level">
            <h4 className="workouts__level-title"> Intermedio </h4>
            <p className="workouts__level-description"> 
            Estarías en un nivel intermedio si llevas como mínimo <span className="bold">entre 12-24 meses</span> entrenando
            de manera seria y regular. Empiezas a tener <span className="bold">cierto dominio de la técnica</span> en movimientos complejos multiarticulares (Sentadilla, Peso muerto...) y
            tu cuerpo ya ha generado una serie de adaptaciones a nivel muscular y de sistema sistema nervioso.
            </p>
        </div>

        <div onClick={() => onChosenLevel("advanced")} className="workouts__level">
            <h4 className="workouts__level-title"> Avanzado </h4>
            <p className="workouts__level-description"> Elige este nivel si tienes una experiencia mínima de <span className="bold">3-5 años de entrenamiento</span> serio,
            estás próximo a tu límite genético muscular y de fuerza, y <span className="bold">dominas la técnica</span> de los movimientos básicos multiarticulares. Por todo lo anterior, 
            requieres un <span className="bold">volumen de entrenamiento por sesión alto</span> para seguir generando adaptaciones en tu cuerpo (aunque ya mínimas en este punto).
            </p>
        </div>
        </div>
    </section>
}
import './styles/Workouts.sass'
import { Feedback } from '.'

export default function Workouts({ onChosenLevel, onGoToMovements, error }) {

    return <section className="workouts">
        <div className="workouts-pseudo">
            <div className="workouts__pre">
                <h3 className="workouts__pre-title">Antes de nada....</h3>
                <h3 className="workouts__pre-question">¿Conoces bien los principales movimientos de musculación?, te los ilustramos <a href='#' onClick={onGoToMovements} className="workouts__movements">aquí</a></h3>
            </div>
            {error && <Feedback error={error}></Feedback>}
            <h3 className="workouts__title"> Elige rutina según tu nivel</h3>
            <p className="workouts__warn">* Importante a tener en consideración que se debería dejar un tiempo mínimo de 3 meses a la rutina que se escoja para empezar a ver resultados objetivos.</p>
            <div className="workouts__container">
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
        </div>
        
    </section>
}
import './styles/UserInfo.sass'
import genero from './icons/genero.png'
import altura from './icons/altura.png'
import calendario from './icons/calendario.png'
import escala from './icons/escala.png'
import correr from './icons/correr.png'
import sedentario from './icons/sedentario.png'
// import atras from './icons/atras.png'
// import { Link } from 'react-router-dom'

export default function UserInfo({onGoToGoalCaloriesAndMacros}) {
  return <>
        <div className="user-info-pseudo">
        <section className="user-info">
        {/* <Link to="/landing" className="user-info__back"><img alt="back" src={atras} height="20" width="20"/></Link> */}

        <h2 className="user-info__title">
          Cuéntanos sobre ti y tus objetivos
        </h2>
            <form onSubmit={ event => {
                event.preventDefault()

                let goal = event.target.goal.value
                let age = event.target.age.value
                let height = event.target.height.value
                let weight = event.target.weight.value
                let activity = event.target.activity.value
                let gender = event.target.gender.value

                onGoToGoalCaloriesAndMacros(gender, goal, age, height, weight, activity)
                
            }}>
            <div className="user-info__gender">
              <img alt="gender" src={genero} width="25" height="25"/>
              <input type="radio" id="man" name="gender" value="man" defaultChecked></input>
              <label htmlFor="man">Hombre</label>
              <input type="radio" id="woman" name="gender" value="woman"></input>
              <label htmlFor="woman">Mujer</label>
            </div>
              <h3 className="user-info__quiero">Quiero</h3>
            <div className="user-info__goal">
                {/* <input type="radio" id="gain" name="goal" value="gain"></input>
                <label htmlFor="gain">Ganar masa muscular </label>
                <input type="radio" id="maintain" name="goal" value="maintain" defaultChecked></input>
                <label htmlFor="maintain">Mantenerme saludable</label>
                <input type="radio" id="lose" name="goal" value="lose"></input>
                <label htmlFor="lose">Perder peso</label> */}
                <select name="goal">
                  <option value="gain">Ganar masa muscular</option> 
                  <option value="maintain" defaultValue>Mantenerme saludable</option>
                  <option value="lose">Perder algo de peso</option>
                </select>
            </div>
            <div className="user-info__numbers">
                <img alt="age" src={calendario} width="25" height="25"/>
                <input type="number" name="age" min="15" max="90" placeholder="Edad" required></input>
                <img alt="height" src={altura} width="25" height="25"></img>
                <input type="number" name="height" min="120" max="220" placeholder="Altura en cm" required></input>
                <img alt="weight" src={escala} width="25" height="25"></img>
                <input type="number" name="weight" min="40" max="150" placeholder="Peso en Kg" required></input>
            </div>
            <div className="user-info__activity">
                <img alt="activity" src={sedentario} width="25" height="25"></img>
                <input type="radio" id="sedentary" name="activity" value="sedentary" defaultChecked></input>
                <label htmlFor="sedentary">Sedentario</label>
                {/* <input type="radio" id="active" name="activity" value="active" checked></input>
                <label htmlFor="active">Activo (Caminas durante el día)</label> */}
                <img alt="activity" src={correr} width="25" height="25"></img>
                <input type="radio" id="athlete" name="activity" value="athlete"></input>
                <label htmlFor="athlete">Deportista</label>
            </div>
                <button className="user-info__next">Siguiente</button>
            </form>
          <p className="user-info__p">* Asumimos que una persona sedentaria tiene poca actividad física diaria. Por otro lado, la persona deportista realiza ejercicio intenso como mínimo entre 3-5 veces por semana.</p>
        </section>
        </div>
      </>
}
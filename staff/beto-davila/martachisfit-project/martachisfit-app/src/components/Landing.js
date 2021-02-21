import './styles/Landing.sass'
import { Link } from 'react-router-dom'

export default function Landing() {
  return <>
      <div className="landing-pseudo">
      <section className="landing">
        <h1 className="landing__title">
          MartachisFIT
        </h1>
        <h4 className="landing__subtitle">Tu mejor versión, ¡aquí y ahora!</h4>
        
        <div className="landing__buttons">
          <Link to="/user-info" className="landing__reg-btn btn">Registrarse</Link>
          <p className="landing__p">¿Tienes ya una cuenta?, ¡Entra!</p>
          <Link to="/sign-in" className="landing__log-btn btn">Iniciar sesión</Link>
        </div>
      </section>
      </div>
      </>
}

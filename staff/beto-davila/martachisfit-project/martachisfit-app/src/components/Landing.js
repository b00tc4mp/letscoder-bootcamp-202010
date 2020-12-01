import './styles/Landing.sass'

export default function Landing({onGoToSignIn, onUserInfo}) {
  return <>
      <section className="landing">
        <h1 className="landing__title">
          MartachisFIT
        </h1>
        <h4 className="landing_subtitle">Tu mejor versión, ¡aquí y ahora!</h4>
        
        <div className="landing__buttons">
          <a onClick={onUserInfo} className="landing__reg-btn btn">Registrarse</a>
          <p className="landing__p">¿Tienes ya una cuenta?, ¡Entra!</p>
          <a onClick={onGoToSignIn} className="landing__log-btn btn">Iniciar sesión</a>
        </div>
      </section>
      </>
}

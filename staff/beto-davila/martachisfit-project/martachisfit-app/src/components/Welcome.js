import './styles/Welcome.sass'

export default function Welcome () {

    const martaIg = "https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_520/v1607586947/marta-ig_xgxisr.jpg"

    return ( <>
    <div className="welcome-pseudo"> 
    <div className="welcome">
    <h1 className="welcome__title"> Acomódate.... </h1>

    <div className="welcome__container">
        <div className="welcome__recipes">
        <h3 className="welcome__subtitle">Recetas saludables</h3>
        <p>¡Descubre las mejores recetas con ingredientes naturales que te permitirán disfrutar de las comidas dulces y saladas más ligeras!</p>
        </div>

        <div className="welcome__diets">
        <h3 className="welcome__subtitle">Dietas personalizadas</h3>
        <p>Ponemos a tu disposición una serie de dietas de acuerdo a tu cómputo calórico establecido. 
            Por otro lado, puedes incluso "volar sol@", crear una dieta con los alimentos que escojas y tener acceso a un registro diario que te indicará
            en qué punto calórico te encuentras en el día.</p>
        </div>

        <div className="welcome__tips">
        <h3 className="welcome__subtitle">Información y consejos</h3>
        <p>El conocimiento es la clave del éxito. Aquí podrás encontrar las nociones básicas de alimentación y deporte para conseguir tu mejor versión</p>
        </div>
    </div>
        <div className="welcome__instagram">
            <a href="https://www.instagram.com/martachis.fit/">
            <h3 className="welcome__instagram-title">¡Y también en Instagram!</h3>
            <img src={martaIg} alt="marta-instagram"/></a>
        </div>
    </div>
    </div>
    </>

    )
}
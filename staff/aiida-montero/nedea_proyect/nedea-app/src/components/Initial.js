import "./Initial.scss"
import {Link} from 'react-router-dom'

 function Initial ({onGoToHome}) {
    
    return  <div className="initial_body">
       
        
        
        <main>
            <div className="initial" >
            <h1>BIENVENIDO A NEDEA</h1>

                <img className="logo_central_initial"
                    src="imagenes/logocentral.png" alt="imagenes" />

                <button class =" flecha" onClick = {onGoToHome}><i className="far fa-arrow-alt-circle-right fa-5x"></i></button>
            </div>
            <div className = "initial_form">
                <Link className = "link" to = '/sign-up'>Registrate aqui</Link>   
                <Link className = "link" to = '/sign-in'>Entra</Link>   
                </div>
        </main>
    </div>

     
}
export default Initial
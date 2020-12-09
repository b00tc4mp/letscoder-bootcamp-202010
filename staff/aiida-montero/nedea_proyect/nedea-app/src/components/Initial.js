import "./Initial.scss"
import {Link} from 'react-router-dom'

 function Initial ({onGoToHome}) {
    
    return  <main className="initial_body">
       
        
        
        
            <div className="initial" >
            <h1>BIENVENIDO A NEDEA</h1>

                <img className="logo_central_initial"
                    src="imagenes/logocentralnedea.png" alt="imagenes" />

                <button class =" flecha" onClick = {onGoToHome}><i className="far fa-arrow-alt-circle-right fa-5x"></i></button>
            </div>
            <div className = "initial_form">
                <Link className = "link" to = '/sign-up'><img src = "imagenes/register_button.png"/></Link>   
                <Link className = "link" to = '/sign-in'><img src = "imagenes/login_button.png"/></Link>   
                </div>
    
    </main>

     
}
export default Initial
import "./Initial.scss"
import {Link} from 'react-router-dom'

 function Initial ({onGoToHome}) {
    
    return <main className="initial_body">
        
       
        
        
        
            <div className="initial" >
           {/*  <h1>BIENVENIDO A NEDEA</h1> */}

                <img className="logo_central_initial"
                    src="imagenes/logocentralnedea.png" alt="imagenes" />

               
            </div>
            <div className = "initial_form">
                <Link  to = '/sign-up'><button className = "registrate">REGISTRATE</button></Link>   
                <button className =" entra" onClick = {onGoToHome}>ENTRA</button>
                <Link  to = '/sign-in'><button className = "identificate">IDENTIFICATE</button></Link>   
                </div>
    
    </main>

     
}
export default Initial
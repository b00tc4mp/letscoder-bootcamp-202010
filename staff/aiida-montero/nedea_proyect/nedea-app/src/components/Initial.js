import "./Initial.scss"

 function Initial ({onGoToRegister}) {
    
    return  <div className="initial_body">
        
        
        <main>
            <div className="initial" >
            <h1>BIENVENIDO A NEDEA</h1>

                <img className="logo_central_initial"
                    src="imagenes/logocentral.png" alt="imagenes" />

                <button onClick = {onGoToRegister}><i className="far fa-arrow-alt-circle-right fa-5x"></i></button>
            </div>

        </main>
    </div>

     
}
export default Initial
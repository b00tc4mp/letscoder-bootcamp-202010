import React, { useEffect } from 'react'
import './Home.sass'
import { useState } from 'react'


function Home({ onHome, onGoRegister, onGoLogin }) {
    const [offers, setOffers] = useState([])
    
        

    return <sections>

        <form onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHome(product)
        }}>

            <div className="slogan">
            <h5>yo huerteo,
            </h5>
            <h4>
            tu huerteas,
            </h4>
            <h3>
            él huertea,
            </h3>
            <h2>
            nosotros huerteamos,
            </h2>
            </div>
            <button className="homebuttons" onClick={onGoRegister}>Regístrate</button>
            <button className="homebuttons" onClick={onGoLogin}>Entra</button>
        </form>
        

    </sections>

}

export default Home
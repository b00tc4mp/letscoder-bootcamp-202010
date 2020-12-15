import React from 'react'
import './Home.sass'
import {retrieveOffer} from './../logic'
import { useState } from 'react'

function Home({ onHome, onGoRegister, onGoLogin }) {
    const [offers, setOffers] = useState([])
        
/*         try {
    
          retrieveOffer(sessionStorage.token, (error, offersResult) => {
            if (error) return alert(error.message)
    
            setOffers(offersResult)

    
          })
    
    
        } catch (error) {
          alert(error.message)
        }
     */
      
  
  
          
    

    return <sections>

        <form onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHome(product)
        }}>
            <button className="homebuttons" onClick={onGoRegister}>Regístrate</button>
            <button className="homebuttons" onClick={onGoLogin}>Entra</button>
            <nav className="searcherProducts">
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
            </nav>
        </form>
        
        
        <h3>¿Qué alimento quieres hoy?</h3>


    </sections>

}

export default Home
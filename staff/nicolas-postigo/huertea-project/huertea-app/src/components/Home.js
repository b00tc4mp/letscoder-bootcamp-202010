import React, { useEffect } from 'react'
import './Home.sass'
import {retrieveOffer} from './../logic'
import { useState } from 'react'

function Home({ onHome, onGoRegister, onGoLogin }) {
    const [offers, setOffers] = useState([])
    
/*     useEffect(()=>{

      try {
  
      retrieveOffer(sessionStorage.token, (error, offersResult) => {
        if (error) return alert(error.message)
  
        setOffers(offersResult)
  
  
      })
  
  
    } catch (error) {
      alert(error.message)
    } 

    },[]) */


      
  
  
          
    

    return <sections>

        <form onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHome(product)
        }}>
            <button className="homebuttons" onClick={onGoRegister}>Regístrate</button>
            <button className="homebuttons" onClick={onGoLogin}>Entra</button>
{/*             <nav className="searcherProducts">
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
            </nav>
 */}        </form>
        
        
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


    </sections>

}

export default Home
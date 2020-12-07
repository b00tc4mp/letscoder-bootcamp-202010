import React from 'react'
import './Hub.sass'
import { useState } from 'react'
//import { retrieveUser } from '../logic'
import ListOffersRetrieve from './ListOffersRetrieve'
import SearchOffers from './SearchOffers'
import FindOffer from './FindOffer'
import Detail from './Detail'

function Hub({ fullname, onHub, onGoCreateoffer, offers }) {
    const [results, setResults] = useState()
    const [view, setView] = useState('default')

    const handleGoSearcher = (results) => {
        setResults(results)
        setView('offersfound')
      }
    const handleGoDetail = () => {
        setView('detail')
    } 

    return <sections>
        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHub(product)
        }}>
        </form>
        <h3>Bienvenid@ {fullname}!</h3>
        <h3>¿Qué alimento quieres hoy? </h3>

      <div>
            <button onClick={onGoCreateoffer} className="offer">crea tu oferta &#127806;</button>
        </div>
        <SearchOffers onGoSearcher={handleGoSearcher}/>

        {view==="offersfound"&& <FindOffer results={results} />}

        {view==="default"&&<ListOffersRetrieve offers={offers} />}
        <Detail />
    </sections>

}

export default Hub

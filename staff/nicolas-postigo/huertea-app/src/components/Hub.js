import React from 'react'
import './Hub.sass'
import { useState } from 'react'
//import { retrieveUser } from '../logic'
import ListOffersRetrieve from './ListOffersRetrieve'
import SearchOffers from './SearchOffers'
import FindOffer from './FindOffer'
import Detail from './Detail'
import { retrieveOffer } from './../logic'



function Hub({ fullname, onHub, onGoCreateoffer, offers }) {
    const [results, setResults] = useState()
    const [view, setView] = useState('default')
    const [offer, setOffer] = useState([])


    const handleGoSearcher = (results) => {
        setResults(results)
        setView('offersfound')
    }

    const handleGoDetail = (offer) => {

        try {
            setOffer(offer)
            setView("detail")


        } catch (error) {
            alert(error.message)
        }

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
    <SearchOffers onGoSearcher={handleGoSearcher} />

    {view === 'offersfound' && <FindOffer results={results} onGoDetail={handleGoDetail} />}

    {view === 'default' && <ListOffersRetrieve offers={offers} onGoDetail={handleGoDetail} />}
    {view === 'detail' && <Detail offer={offer} />}
</sections>

}

export default Hub

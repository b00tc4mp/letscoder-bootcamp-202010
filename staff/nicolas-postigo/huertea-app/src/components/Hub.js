import React from 'react'
import './Hub.sass'
import { useState } from 'react'
//import { retrieveUser } from '../logic'
import ListOffersRetrieve from './ListOffersRetrieve'
import SearchOffers from './SearchOffers'
import Detail from './Detail'

function Hub({ fullname, onHub, onGoCreateoffer, offers }) {

    const [view, setView] = useState('hub')

    const handleGoDetail = () => {
        setView('detail')
      }


    return <sections>
        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHub(product)
        }}>
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
        </form>
        <h3>Bienvenid@ {fullname}!</h3>
        <h3>¿Qué alimento quieres hoy? </h3>
{/*         <div>
        {offers}
        </div>
 */}        <div>
            <button onClick={onGoCreateoffer} className="offer">crea tu oferta &#127806;</button>
        </div>
        {<ListOffersRetrieve offers={offers} onGoDetail={handleGoDetail} />}
        {<SearchOffers />}
        {view === 'detail' && <Detail />}
    </sections>

}

export default Hub

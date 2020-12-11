import React from 'react'
import './FindOffer.sass'
const API_URL = process.env.REACT_APP_API_URL

export default function FindOffers({results, onGoDetail}){

    
    return <div className="list-offers">
        <ul className="results__ul">
        {results.map( ({id, titleoffer, offername, price }) => 
        <li key={id} className="list-offers__offer">
                <img src={`${API_URL}/offers/${id}/pics`} width="250px" />
                <h5>{titleoffer}</h5>
                <p>{offername}</p>
                <p>{price} €</p>
                <a onClick={onGoDetail} href="#" className="button_detail_offer">Detalle Oferta</a>
            
        </li>)}

        </ul>
        </div>

}

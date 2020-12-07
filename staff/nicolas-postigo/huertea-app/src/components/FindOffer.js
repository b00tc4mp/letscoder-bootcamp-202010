import React from 'react'

export default function FindOffers({results, onGoDetail}){

    
    return <div className="list-offers">
        <ul className="results__ul">
        {results.map( ({id, titleoffer, offername, price, image }) => 
        <li key={id} className="list-offers__offer">
            <span>{image}</span>
                <h5>{titleoffer}</h5>
                <p>{offername}</p>
                <p>{price} €</p>
                <a onClick={onGoDetail} href="#" className="button_detail_offer">Detalle Oferta</a>
            
        </li>)}

        </ul>
        </div>

}

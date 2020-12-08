import React from 'react'


export default function ({ offer }) {
    return <section className="list-offers">
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {offer &&  
                <li key={offer.id} className="list-offers__offer">
                <span>{offer.image}</span>
                <h5>{offer.titleoffer}</h5>
                <p>{offer.offername}</p>
                <p>{offer.price} €</p>
                {/* <a onClick={onGoDetail} href="#" className="button_detail_offer">Detalle Oferta</a> */}
                {/* hacer boton que reciba logia de hub para volver a ver la lista default */ }           
            </li>}  
        
    </section>
}
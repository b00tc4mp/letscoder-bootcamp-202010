import React from 'react'
import MapView from './MapView'
import './Detail.sass'
const API_URL = process.env.REACT_APP_API_URL

function Detail ({ offer, onGoHub }) {
    return <section className="list-offers">
        <div>
            <button onClick={onGoHub} className="log-out-button">🔙</button>
        </div>
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {offer &&  
                <li key={offer.id} className="list-offers2__offer2_">
                <img src={`${API_URL}/offers/${offer.id}/pics`} width="250px" />
                <span>{offer.image}</span>
                <h5>{offer.titleoffer}</h5>
                <p>{offer.offername}</p>
                <p>{offer.price} €</p>
                <p>Dirección: {offer.offeraddress}</p>
                <p>Tlfn. contacto: {offer.phonecontact}</p>
                <p>Email contacto: {offer.emailcontact}</p>
                {/* <a onClick={onGoDetail} href="#" className="button_detail_offer">Detalle Oferta</a> */}
                {/* hacer boton que reciba logia de hub para volver a ver la lista default */ }   
                {/* <div className="mapview_component"><MapView></MapView></div>         */}
            
            </li>}  
                </section>
}

export default Detail

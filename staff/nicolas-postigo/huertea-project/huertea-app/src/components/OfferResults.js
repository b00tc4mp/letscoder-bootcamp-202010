import React from 'react'
import './OfferResults.sass'
const API_URL = process.env.REACT_APP_API_URL

export default function offerResults({ results, onGoDetail, onGoHub }) {


        return <section className="list-offers">

                <div>
                        <button onClick={onGoHub} className="log-out-button">atrás</button>
                </div>
                {results.map(({ id, titleoffer, offername, price, offeraddress, phonecontact, emailcontact }) =>
                        <li key={id} className="list-offers__offer">
                                <img src={`${API_URL}/offers/${id}/pics`} width="85px" />
                                <p>{offername}</p>
                                <p>{price} €</p>
                                <a onClick={(event)=>{onGoDetail(event,{id,titleoffer, offername, price, offeraddress, phonecontact, emailcontact,  event})}} href="#" className="button_detail_offer">Detalle</a> 

                        </li>)}


        </section>

}

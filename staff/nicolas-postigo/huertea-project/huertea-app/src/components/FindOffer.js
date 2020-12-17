import React from 'react'
import './FindOffer.sass'
const API_URL = process.env.REACT_APP_API_URL

export default function FindOffers({ results, onGoDetail, onGoHub }) {


        return <section className="list-offers">

                <div>
                        <button onClick={onGoHub} className="log-out-button">🔙</button>
                </div>
                {results.map(({ id, titleoffer, offername, price }) =>
                        <li key={id} className="list-offers__offer">
                                <img src={`${API_URL}/offers/${id}/pics`} width="85px" />
                                <h5>{titleoffer}</h5>
                                <p>{offername}</p>
                                <p>{price} €</p>
                                <a onClick={(event) => onGoDetail(event, { id, titleoffer, offername, price })} href="#" className="button_detail_offer">Detalle Oferta</a>

                        </li>)}


        </section>

}

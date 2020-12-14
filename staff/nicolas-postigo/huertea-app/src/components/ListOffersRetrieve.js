import React from 'react'
import './ListOffersRetrieve.sass'
const API_URL = process.env.REACT_APP_API_URL

// export default function ({ offers, onGoDetail }) {
function ListOffersRetrieve ({ offers, onGoDetail }) {
    debugger
    return <section className="list-offers">
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {offers && offers.map(({ id, titleoffer, offername, price }) => 
                <li key={id} className="list-offers__offer">
                <img src={`${API_URL}/offers/${id}/pics`} width="250px" />
                <h5>{titleoffer}</h5>
                <p className="offername_width">{offername}</p>
                <p>{price} €</p>
                <a onClick={(event)=>{onGoDetail(event,{id,titleoffer,offername,price,event})}} href="#" className="button_detail_offer">Detalle Oferta</a> 
                {/* <a href="#" className="button_detail_offer">Detalle Oferta</a> */}
            </li>)}  
        



    </section>
}
export default ListOffersRetrieve
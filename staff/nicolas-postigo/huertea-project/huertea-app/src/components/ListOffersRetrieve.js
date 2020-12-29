import React from 'react'
import './ListOffersRetrieve.sass'
const API_URL = process.env.REACT_APP_API_URL

function ListOffersRetrieve ({ offers, onGoDetail }) {

return <section className="list-offers">
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {offers && offers.map(({ id, titleoffer, offername, price, offeraddress, phonecontact, emailcontact }) => 
                <li key={id} className="list-offers__offer">
                <img src={`${API_URL}/offers/${id}/pics`} width="125px" />
                <p className="offername_width">{offername}</p>
                <p>{price} €</p>
                <a onClick={(event)=>{onGoDetail(event,{id,titleoffer, offername, price, offeraddress, phonecontact, emailcontact,  event})}} href="#" className="button_detail_offer">Detalle</a> 
            </li>)}  
        



    </section>
}
export default ListOffersRetrieve
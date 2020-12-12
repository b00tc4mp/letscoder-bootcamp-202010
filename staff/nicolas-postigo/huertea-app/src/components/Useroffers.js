import React from 'react'
import './Useroffers.sass'


const API_URL = process.env.REACT_APP_API_URL

// export default function ({ offers, onGoDetail }) {
function Useroffers ({ useroffers, onGoDetail, onGoDelete }) {
    
    return <section className="list-offers">
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {useroffers && useroffers.map(({ id, titleoffer, offername, price }) => 
                <li key={id} className="list-offers__offer">
                <img src={`${API_URL}/offers/${id}/pics`} width="600px" />
                <h5>{titleoffer}</h5>
                <p>{offername}</p>
                <p>{price} €</p>
                <a onClick={(event)=>{onGoDetail(event, {id,titleoffer,offername,price})}} href="#" className="button_detail_offer">Detalle Oferta</a> 
                <button className="delete-button" onClick={()=>{onGoDelete(id)}}> borrar oferta</button>
                {/* <a href="#" className="button_detail_offer">Detalle Oferta</a> */}
            </li>)}  
        



    </section>
}
export default Useroffers
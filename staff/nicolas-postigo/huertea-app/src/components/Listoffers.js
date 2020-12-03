import './ListOffers.sass'


export default function ({ offers }) {
    console.log(offers)
    return <section className="list-offers">
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {offers && offers.map(({ id, titleoffer, offername, image }) => 
                <li key={id} className="list-offers__offer">
                <span>{image}</span>
                <h5>{titleoffer}</h5>
                <p>{offername}</p>
                <a href="#" className="button_detail_offer">Detalle Oferta</a>
            </li>)}  
        
    </section>
}

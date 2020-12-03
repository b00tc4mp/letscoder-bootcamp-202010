import './ListOffers.sass'


export default function ({ offers }) {
    console.log(offers)
    return <section className="list-notes">
{/*offers ? <p>{offers.titleoffer}</p> : <p>no definido</p>*/}
           {offers && offers.map(({ id, titleoffer, offername, image }) => 
                <li key={id}>
                <p>{titleoffer}</p>
                <p>{offername}</p>
                <span>{image}</span>
            </li>)}  
        
    </section>
}
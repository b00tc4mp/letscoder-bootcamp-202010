

export default function ({ offers }) {
    return <section className="list-offer">
        {offers && offers.length && <ul>
            {offers.map(({ id, offername, titleoffer, image }) => <li key={id} className="list-offers">
                <h1>{titleoffer}</h1>
                <p>{offername}</p>
                <span>{image}</span>
            </li>)}
        </ul>}
    </section>
}
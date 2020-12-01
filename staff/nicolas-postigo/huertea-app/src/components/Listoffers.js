import './ListOffers.sass'

export default function ({ offers }) {
    return <section className="list-offer">
        {offers && offers.length && <ul>
            {offers.map(({ id, text, tags }) => <li key={id} className="list-offers">
                <p>{text}</p>
                <span>{tags}</span>
            </li>)}
        </ul>}
    </section>
}
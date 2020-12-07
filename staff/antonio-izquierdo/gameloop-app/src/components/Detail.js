import './Detail.sass'

export default ({ itemId, color }) =>
    // TODO useEffect calling API to retrieve item for this item Id
    <section className="detail" style={{ backgroundColor: color }}>
        <h1>Detail for {itemId} with color {color}</h1>
    </section> 
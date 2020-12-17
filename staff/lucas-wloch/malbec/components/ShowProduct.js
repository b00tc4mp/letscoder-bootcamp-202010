import './ShowProduct.sass'



const ShowProduct = ({ product, onExit }) => {
    const { id, name, description, price, glutenFree, vegan, alergenos, category, available } = product
    return <div className="showProduct__background">
    <div className="showProduct"  >
    <button className="showProduct__exit" onClick={onExit}>❌</button>
        <h4 className="showProduct__name">{name}</h4>
        <p className="showProduct__description">{description}</p>
        <div className="showProduct__div">
        {glutenFree ? <div className="showProduct__glutenFree">
            <img className="showProduct__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
        </div> : ''}
        {vegan ? <img className="showProduct__vegan--img" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
        <p className="showProduct__price">{price}€</p>
        </div>
        {alergenos && alergenos.length ? <p className="showProduct__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
        {available ? '' : <p>not available</p>}
    </div>
    </div>
}
export default ShowProduct
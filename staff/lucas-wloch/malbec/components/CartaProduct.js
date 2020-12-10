const CartaProduct = ({product}) => {
    const { id, name, description, price, glutenFree, vegan, alergenos, available } = product

    return <li key={id}>
        <h4>{name}hola</h4>
        <p>{description}</p>
        <p>{price}</p>
        <p>{glutenFree}</p>
        <p>{vegan}</p>
        <p>{alergenos}</p>
        <p>{category}</p>
        <p>{available}</p>
    </li>
}
export default CartaProduct
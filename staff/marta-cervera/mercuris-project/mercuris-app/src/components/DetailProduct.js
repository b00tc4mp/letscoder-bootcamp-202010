import './DetailProduct.sass'

const API_URL = process.env.REACT_APP_API_URL

function DetailProduct({ result: {id, name, description, price, fullname, contact, city} }) {   
    


return <article className="result">
        <img className="results__li__img" src={`${API_URL}/products/${id}/images`} width="400px" />
        <p className="result__p">Product Name: {name}</p>
        <p className="result__p">Description: {description}</p>
        <p className="result__p">Price: {price} €</p>
        <p className="result__p">Company Name: {fullname}</p>
        <p className="result__p">Contact: {contact}</p>
        <p className="result__p">City: {city}</p>
        {/* <p className="result__p">contact: {contact}</p> */}
    </article> 
}


export default DetailProduct
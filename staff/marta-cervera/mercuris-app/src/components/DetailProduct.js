import './DetailProduct.sass'

const API_URL = process.env.REACT_APP_API_URL

function DetailProduct({ result: {id, name, description, price} }) {   
    


return <article className="result">
        <img className="results__li__img" src={`${API_URL}/products/${id}/images`} width="500px" />
        <p className="result__p">name: {name}</p>
        <p className="result__p">description: {description}</p>
        <p className="result__p">price: {price}</p>
    </article> 
}


export default DetailProduct
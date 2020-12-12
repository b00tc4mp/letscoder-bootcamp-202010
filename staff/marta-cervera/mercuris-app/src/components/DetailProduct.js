import './DetailProduct.sass'

const API_URL = process.env.REACT_APP_API_URL

function DetailProduct({ result: {id, name, description, price, fullname, contact} }) {   
    


return <article className="result">
        <img className="results__li__img" src={`${API_URL}/products/${id}/images`} width="500px" />
        <p className="result__p">name: {name}</p>
        <p className="result__p">description: {description}</p>
        <p className="result__p">price: {price}</p>
        <p className="result__p">fullname: {fullname}</p>
        <p className="result__p">contact: {contact}</p>
        {/* <p className="result__p">contact: {contact}</p> */}
    </article> 
}


export default DetailProduct
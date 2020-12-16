import './DetailProduct.sass'
import { deleteProduct, retrieveProduct } from '../logic'



const API_URL = process.env.REACT_APP_API_URL

function DetailProduct({ result: {id, name, email, description, price, fullname, contact, city, address,phone},doRefreshProducts }) {   
    
    const { token } = sessionStorage



    const handleDeleteProduct = productId => {

        try {
            deleteProduct(productId, (error) => {

                if (error) return alert(error.message)
                
                doRefreshProducts()
               
            })
        } catch (error) {
            alert(error.message)
        }
    }






return <article className="result">
        <img className="results__li__img" src={`${API_URL}/products/${id}/images`} width="400px" />
        <p className="result__p">Product Name: {name}</p>
        <p className="result__p">Description: {description}</p>
        <p className="result__p">Price: {price} €</p>
        {!token && <p className="result__p">Company Name: {fullname}</p>}
        {!token && <p className="result__p">Contact: {contact}</p>}
        {!token && <a className="result__p" href={`mailto:${email}`}>E-mail: {email}</a>}
        {!token && <p className="result__p">City: {city}</p>}
        {!token && <p className="result__p">Address:{address}</p>}
        {!token &&<a className="result__p" href={`tel:${phone}`}>Phone: {phone}</a>}
        {token && <button className="result__button" onClick={() => handleDeleteProduct(id)}>DELETE PRODUCT</button>}
    </article> 
}


export default DetailProduct
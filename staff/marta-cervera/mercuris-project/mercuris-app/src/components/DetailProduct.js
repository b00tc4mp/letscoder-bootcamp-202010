import './DetailProduct.sass'
import { deleteProduct, retrieveProduct } from '../logic'
import {useHistory} from 'react-router-dom'


const API_URL = process.env.REACT_APP_API_URL

function DetailProduct({ result: {id, name, email, description, price, fullname, contact, city, phone},doRefreshProducts, doGoToSearch }) {   
    const history = useHistory()
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
/* 
   const handleGoBack =() => {
        history.push('/')
    } */ 

    const handleGoBack = () => {
        doGoToSearch()
    }


return <article className="result">
        {<button onClick= {handleGoBack}>GO BACK</button>}
        <img className="results__li__img" src={`${API_URL}/products/${id}/images`} width="400px" />
        <p className="result__p">Product Name: {name}</p>
        <p className="result__p">Description: {description}</p>
        <p className="result__p">Price: {price} €</p>
        {!token && <p className="result__p">Company Name: {fullname}</p>}
        {!token && <p className="result__p">More info: {contact}</p>}
        {!token && <a className="result__p" href={`mailto:${email}`}>E-mail: {email}</a>}
        {!token && <p className="result__p">City: {city}</p>}
        {!token &&<a className="result__p" href={`tel:${phone}`}>Phone: {phone}</a>}
        {token && <button className="result__button" onClick={() => handleDeleteProduct(id)}>DELETE PRODUCT</button>}
    </article> 
}


export default DetailProduct
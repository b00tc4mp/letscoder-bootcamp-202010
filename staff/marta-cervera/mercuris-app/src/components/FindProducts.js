
import './FindProducts.sass'


const API_URL = process.env.REACT_APP_API_URL

function FindProducts({results, onDetailProduct }){
debugger
    const handleDetailProduct = (id) => {

        onDetailProduct(id)
    }
   
    return <div className="results">        
        {results.map( ({id, name, description, price }) => 
        <li key={id} className="results__list">
            <p className="results__p">Product Name:{name}</p>            
            <p className="results__p">Description: {description}</p>
            <p className="results__p">Price: {price} €</p>
            <img src={`${API_URL}/products/${id}/images`} width="180px" onClick={() => handleDetailProduct(id)}/>
            
        </li>)}

        
        </div>   

      
}

export default FindProducts
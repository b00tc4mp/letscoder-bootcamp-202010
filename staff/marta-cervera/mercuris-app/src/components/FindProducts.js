import './FindProducts.sass'


function FindProducts({results}){

    
    return <div className="results">
        <ul className="results__ul">
        {results.map( ({id, name, description, price }) => 
        <li key={id} className="results__list">
            <p className="results__p">{name}</p>            
            <p className="results__p">description: {description}</p>
            <p className="results__p">price: {price}</p>
            
        </li>)}

        </ul>
        </div>

}

export default FindProducts
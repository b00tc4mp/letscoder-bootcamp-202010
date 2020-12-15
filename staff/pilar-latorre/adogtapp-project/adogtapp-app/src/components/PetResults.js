
import './PetResults.sass'

const API_URL = process.env.REACT_APP_API_URL


function PetResults({results, onDetailPet}){

    
    const handleDetailPet = (id) => {
       
        onDetailPet(id)
    }    

    
    return <div className="results">
        <ul className="results__ul">
        {results.map( ({id, name, breed, color}) => 
        <li key={id} className="results__li">
            <img className="results__img" src={`${API_URL}/pets/${id}/images`} onClick={()=>handleDetailPet(id)}/>
            <div>
            <p className="results__p">{name}</p>
            <p className="results__p">Breed: {breed}</p>
            <p className="results__p">Color: {color}</p>
  
            </div>
        </li>)}

        </ul>
        </div>


}

export default PetResults


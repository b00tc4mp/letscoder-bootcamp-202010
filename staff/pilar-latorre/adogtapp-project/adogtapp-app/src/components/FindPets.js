
import './FindPets.sass'


function FindPets({results, onDetailPet}){

    

    const handleDetailPet = (id) => {
       
        onDetailPet(id)
    }    

    
    return <div className="results">
        <ul className="results__ul">
        {results.map( ({id, name, breed, color}) => 
        <li key={id} className="results__li">
            <img className="results__img" src="protectora.jpg" onClick={()=>handleDetailPet(id)}/>
            <div>
            <p className="results__p">{name}</p>
            <p className="results__p">breed: {breed}</p>
            <p className="results__p">color: {color}</p>
  
            </div>
        </li>)}

        </ul>
        </div>


}

export default FindPets


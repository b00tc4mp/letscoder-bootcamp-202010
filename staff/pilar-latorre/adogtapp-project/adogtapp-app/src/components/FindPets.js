
import './FindPets.sass'


function FindPets({results, onDetailPet}){

    

    const handleDetailPet = (id) => {
       
        onDetailPet(id)
    }    

    
    return <div className="results">
        <ul className="results__ul">
        {results.map( ({id, name, breed, species, color, description }) => 
        <li key={id} className="results__li">
            <img className="results__img" src="protectora.jpg" onClick={()=>handleDetailPet(id)}/>
            <div>
            <p className="results__p">{name}</p>
            <p className="results__p">breed: {breed}</p>
            <p className="results__p">species: {species}</p>
            <p className="results__p">color: {color}</p>
            <p className="results__p">description: {description}</p>
            </div>
        </li>)}

        </ul>
        </div>


}

export default FindPets


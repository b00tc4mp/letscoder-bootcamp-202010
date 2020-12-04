import './FindPets'

function FindPets({results}){

    
    return <div className="results">
        <ul className="results__ul">
        {results.map( ({id, name, breed, species, color, description }) => 
        <li key={id} className="results__li">
            <p className="results__p">{name}</p>
            <p className="results__p">tags: {breed}</p>
            <p className="results__p">owner: {species}</p>
            <p className="results__p">visibility: {color}</p>
            <p className="results__p">description: {description}</p>
            
        </li>)}

        </ul>
        </div>

}

export default FindPets


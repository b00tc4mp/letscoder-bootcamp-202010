import { deletePet } from '../logic'
import './DetailPet.sass'

const API_URL = process.env.REACT_APP_API_URL

function DetailPet({result: {id, name, breed, species, color, description, userName, email, phone, descriptionShelter } , onDeletePet}){
    const { token } = sessionStorage
    const handleDeletePet = id => {

        try {
            deletePet(  id, (error) => {

                if (error) return alert(error.message)

                onDeletePet()
            }) 
        } catch (error) {
            alert(error.message)
        }
    } 

    
    return <article className="result">
    
            <img className="result__img" src={`${API_URL}/pets/${id}/images`}/>
            <div>
            <p className="result__p">{name}</p>
            <p className="result__p">breed: {breed}</p>
            <p className="result__p">species: {species}</p>
            <p className="result__p">color: {color}</p>
            <p className="result__p">description: {description}</p>

            <p className="result__p">userName: {userName}</p>
            <p className="result__p">email: {email}</p>
            <p className="result__p">phone: {phone}</p>
            <p className="result__p">description: {descriptionShelter}</p>

            {token && <button className="result__button" onClick={()=>handleDeletePet(id) }>DELETE PET</button>}
            </div>
        </article>

}

export default DetailPet
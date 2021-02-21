import { deletePet, retrievePet } from '../logic'
import './RetrievePet.sass'
import { useState, useEffect } from 'react'
import ModifyPet from './ModifyPet'

const API_URL = process.env.REACT_APP_API_URL

function DetailPet({ petId, onDeleted, onError }) {

    const { token } = sessionStorage
    const [view, setView] = useState()
    const [pet, setPet] = useState()

    useEffect(() => {
        handleRetrievePet()

    }, [])

    const handleDeletePet = petId => {
        try {
            deletePet(token, petId, (error) => {

                if (error) return onError(error.message)

                onDeleted()
            })
        } catch (error) {
            onError(error.message)
        }
    }


    const handleGoToModify = () => {
        setView('modify-pet')
    }

    const handleModified = () => {
        setView()
        handleRetrievePet()

    }

    const handleRetrievePet = () => {
        try {
            retrievePet(petId, (error, pet) => {
                if (error) return onError(error.message)

                setPet(pet)

            })
        } catch (error) {
            onError(error.message)
        }

    }


    return pet ?
        <article className="result">

            <img className="result__img" src={`${API_URL}/pets/${pet.id}/images`} />
            {!token && <p className="result__info">PET INFO</p>}
            <p className="result__p">{pet.name}</p>
            <p className="result__p">breed: {pet.breed}</p>
            <p className="result__p">species: {pet.species}</p>
            <p className="result__p">color: {pet.color}</p>
            <p className="result__p">description: {pet.description}</p>
            {!token && <p className="result__info">SHELTER INFO</p>}
            {!token && <p className="result__p">{pet.userName}</p>}
            {!token && <a className="result__p" href={`mailto:${pet.email}`}>{pet.email}</a>}
            {!token && <a className="result__p" href={`tel:${pet.phone}`}>{pet.phone}</a>}
            {!token && <p className="result__p">{pet.address}</p>}
            {!token && <p className="result__p">{pet.city}</p>}
            {!token && <p className="result__p">{pet.descriptionShelter}</p>}
            <div>
                {token && <button className="result__button" onClick={() => handleDeletePet(petId)}>DELETE PET</button>}
                {token && <button className="result__button" onClick={handleGoToModify}>MODIFY PET</button>}
                {token && view === 'modify-pet' && <ModifyPet onModified={handleModified} petId={pet.id} onError={onError} />}
            </div>

        </article> : <></>

}

export default DetailPet
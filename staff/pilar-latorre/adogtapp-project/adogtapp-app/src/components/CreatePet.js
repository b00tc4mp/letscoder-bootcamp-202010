import './CreatePet.sass'
import {savePet, savePetImage} from '../logic'
import { useState } from 'react'

function CreatePet({onCreated, onError}){

    const [success, setSuccess] = useState()
    const { token } = sessionStorage

    const handleCreate = (name, breed, species, color, description, image) => {
        try {
            savePet( token, undefined, name, breed, species, color, description, (error, petId) => {
                if (error) return onError(error.message)
                if(image){
                savePetImage(token, petId, image, error => {
                    if (error) return onError(error.message)
                    try {
                        
                        setSuccess(true)
                        setTimeout(() => {
                            setSuccess(false)
                            onCreated()
                        }, 3000)
                        
                        
                    } catch (error) {
                        onError(error.message)
                    }
                }) 
            }
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                onCreated()
            }, 3000)
            })
        } catch (error) {
            onError(error.message)
        }
    }  



    return <div className="CreatePet">
        <h3 className="CreatePet__h1">Please fill all the information about the pet</h3> 
        {success && <h2 className="home__success">PET SAVED 🐶🐱 </h2>}
    
        <form className="CreatePet__form" onSubmit={event => {
            event.preventDefault()

            const { target: { name: { value: name }, breed: { value: breed }, species: {value: species}, color: { value: color }, description: {value: description} , image }} = event

            handleCreate(name, breed, species, color, description, image.files[0] )
        }}>
            <input type="file" id="image" name="image" />
            <label className="CreatePet__label" htmlFor="image"></label>
            <input className="CreatePet__input" type="text" name="name" placeholder="Pet name" />
            <input className="CreatePet__input" type="text" name="breed" placeholder="breed" />
            <select className="CreatePet__select" name="species" id="species">
                <option className="CreatePet__option" value="dog">Dog</option>
                <option className="CreatePet__option" value="cat">Cat</option>
            </select>
            <input className="CreatePet__input" type="text" name="color" placeholder="color" />
            <textarea className="CreatePet__descripcion" type="text" name="description" placeholder="please write a little description about the pet" ></textarea>
           
            <button className="CreatePet__button">SAVE INFO</button>
            
        </form>
            
      


    </div>

}

export default CreatePet    


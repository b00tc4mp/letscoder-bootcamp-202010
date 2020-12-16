//import './ModifyPet.sass'
import { useState, useEffect } from 'react'
import { savePet } from '../logic'
import {retrievePet} from '../logic'


function ModifyPet({petId, onModified, onError}){

    const [pet, setPet] = useState()
    const { token } = sessionStorage


    useEffect(() => {

    
        try {
            retrievePet( petId, (error, pet) => {
                if (error) return onError(error.message)

                setPet(pet)
              
               

            })
        } catch (error) {
            onError(error.message)
        }

    },[])

   
    const handleModify = (name, breed, species, color, description) => {


        try {
            savePet( token, petId, name, breed, species, color, description, (error) => {
                if (error) return onError(error.message)
                
                onModified()
               
            })
        } catch (error) {
            onError(error.message)
        }
    
    }

    
    return pet? 
    <div className="ModifyPet">
        <h3 className="ModifyPet__h1">Please update all the information about the pet</h3> 
    
        <form className="ModifyPet__form" onSubmit={event => {
            event.preventDefault()

            const { target: { name: { value: name }, breed: { value: breed }, species: {value: species}, color: { value: color }, description: {value: description} , image }} = event

            
                handleModify(name, breed, species, color, description, image.files[0] )
           
        }}>
            
            <input type="file" id="image" name="image" />
            <label className="ModifyPet__label" htmlFor="image"></label>
            <input className="ModifyPet__input" type="text" name="name" placeholder="Pet name" defaultValue={pet.name} />
            <input className="ModifyPet__input" type="text" name="breed" placeholder="breed" defaultValue={pet.breed} />
            <select className="ModifyPet__select" name="species" id="species">
                <option className="ModifyPet__option" value="dog">Dog</option>
                <option className="ModifyPet__option" value="cat">Cat</option>
            </select>
            <input className="ModifyPet__input" type="text" name="color" placeholder="color" defaultValue={pet.color}/>
            <textarea className="ModifyPet__descripcion" type="text" name="description" placeholder="please write a little description about the pet" defaultValue={pet.description}></textarea>
           
            <button className="ModifyPet__button">SAVE INFO</button>
        </form>   
    </div>: <></>
}

export default ModifyPet    
 
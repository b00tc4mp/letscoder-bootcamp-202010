import './CreatePet.sass'

function CreatePet({onCreatePet}){

    return <div className="CreatePet">
        <h1 className="CreatePet__h1">Please fill all the information about the pet</h1> 
    
        <form className="CreatePet__form" onSubmit={event => {
            event.preventDefault()

            const { target: { name: { value: name }, breed: { value: breed }, species: {value: species}, color: { value: color }, description: {value: description} }, image } = event

            onCreatePet(name, breed, species, color, description, image.files[0] )
        }}>
            <input type="file" id="image" name="image" />
            <label className="CreatePet__button" htmlFor="image">UPDATE PHOTO</label>
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


import './CreatePet.sass'

function CreatePet({onCreatePet, onGoToCreatePet}){

    return <div className="CreatePet">
        <h1 className="CreatePet__h1">Please fill all the information about the pet</h1>
        <img className='CreatePet__img' src="protectora.jpg"/>  
        <div><button className="CreatePet__button">UPDATE WITH PET PHOTO</button></div>
        

        
        <form className="CreatePet__form" onSubmit={event => {
            event.preventDefault()

            const { target: { name: { value: name }, breed: { value: breed }, species: {value: species}, color: { value: color }, description: {value: description} } } = event

            onCreatePet(name, breed, species, color, description )
        }}>
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
            
            <p className="CreatePet__p">Do you want to introduce another animal? <span className="CreatePet__span" onClick={onGoToCreatePet}>New Animal</span></p>


    </div>


}

export default CreatePet    


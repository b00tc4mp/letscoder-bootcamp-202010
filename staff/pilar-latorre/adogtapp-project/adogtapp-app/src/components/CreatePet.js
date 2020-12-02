import './CreatePet.sass'

function CreatePet({onCreatePet, onGoToCreatePet}){

    return <div className="CreatePet">
        <h1 className="CreatePet__h1">Please fill all the information about the pet</h1>
        <img className='CreatePet__img' src="protectora.jpg"/>  
        <div><button className="CreatePet__button">UPDATE WITH PET PHOTO</button></div>
        

        
        <form className="CreatePet__form" onSubmit={event => {
            event.preventDefault()

            const { target: { name: { value: name }, breed: { value: breed }, color: { value: color }, description: {value: description} } } = event

            onCreatePet(name, breed, color, description )
        }}>
            <input className="CreatePet__input" type="text" name="name" placeholder="Pet name" />
            <input className="CreatePet__input" type="text" name="breed" placeholder="breed" />
            <input className="CreatePet__input" type="text" name="color" placeholder="color" />
            <textarea className="CreatePet__textarea" type="text" name="description" placeholder="please write a little description about the pet" ></textarea>
           
            <button className="CreatePet__button">SAVE INFO</button>
        </form>
            
            <p className="CreatePet__p">Do you want to introduce another animal? <span className="CreatePet__span" onClick={onGoToCreatePet}>New Animal</span></p>


    </div>


}

export default CreatePet    


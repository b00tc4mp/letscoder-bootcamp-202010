import { Feedback } from '.'
import './Profile.sass'
function Profile ({currentUser, onModify}){

    return <section className="profile">
        <h2 className="profile__title">Hello,{currentUser.name}</h2>
        <h3>Your Profile</h3>
        <img className="profile__avatar"></img>
        <form className="profile__form" onSubmit ={(event =>{
            event.preventDefault()

            const {target: { name: {value: nameform}, city: {value: city}, contact:{ value: contact} , phone:{value: phone}, address:{value: address} } }= event
            
            try {
                onModify(nameform, contact, address, city, phone)
            } catch (error) {
                alert(error.message)
            }
        })}>
            <div>
                <input type="text" name= "name" placeholder=""defaultValue={currentUser.name}></input>
                <input type="text" name= "contact" placeholder="How do you want to be contact? Insert your phone and a description" defaultValue={currentUser.contact}></input>
                <input type="text" name= "address" placeholder="Insert your address" defaultValue={currentUser.address}></input>
                <input type="text" name= "city" placeholder="Insert your city" defaultValue={currentUser.city}></input>
                <input type="text" name= "phone" placeholder="Insert your phone" defaultValue={currentUser.phone}></input>
                <button>SAVE</button>               

            </div>


        </form>

        
    



    </section>
}
export default Profile
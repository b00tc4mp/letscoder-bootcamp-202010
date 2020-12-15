import { Feedback } from '.'

function Profile ({name, city, contact}){

    return <section className="profile">
        <h2 className="profile__title">Hello,{name}</h2>
        <h3>Your Profile</h3>
        <img className="profile__avatar"></img>
        <form className="profile__form" onSubmit ={(event =>{
            event.preventDefault()

            const {target: { name: {value: name}, city: {value: city}, contact:{ value: contact} } }= event

        })}>
            <div>
                <input type="text" name= "name" placeholder=""defaultValue={name}></input>
                <input type="text" name= "contact" placeholder="How do you want to be contact? Insert your phone and a description" defaultValue={contact}></input>
                <input type="text" name= "city" placeholder="Insert your city" defaultValue={city}></input>
                <button>SAVE</button>               

            </div>


        </form>
    



    </section>
}
export default Profile
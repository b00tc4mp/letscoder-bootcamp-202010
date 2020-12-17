import './Profile.sass'
import { deleteGame } from '../logic'

const API_URL = process.env.REACT_APP_API_URL

function Profile ({name, onRetrieveUserGames, doRefreshGames, games, onModify, currentUser}) {
const handleDeleteGame = gameId =>{
    try {
        deleteGame(gameId, error => {
            if(error) return alert(error)
            doRefreshGames()
        }) 
    } catch (error) {
        alert(error.message)
    }
}
    
return <section>
    <h2>Hello {name} </h2>
    <h3>Your Profile</h3>
    <button className="botonsinmas" onClick={onRetrieveUserGames}>MY GAMES</button>
   
    <ul className="results__ul">
            {games && games.length && games.map(({ id, name, description, gameconsole, budget }) =>
                <li key={id} className="results__li">
                    <p className="results__li__title">{name}</p>
                    <img className="results__li__img" src={`${API_URL}/games/${id}/images`} width="500px" />
                    <p className="results__li__p">description: {description}</p>
                    <p className="results__p">gameconsole: {gameconsole}</p> 
                    <p className="results__p">budget: {budget}</p>
                    <button onClick={()=>handleDeleteGame(id)}>DELETE</button> 
                </li>)}
        </ul>

        <form className="profile__form" onSubmit ={(event =>{
            event.preventDefault()
            
            const {target: { fullname: {value: fullname}, contact: {value: contact}, city:{ value: city} , phone:{value: phone} } }= event
            console.log(fullname)
            try {
                onModify(fullname, contact, city, phone)
            } catch (error) {
                alert(error.message)
            }
        })}>
            <div className="profile__form">
                <input type="text" name= "fullname" placeholder=""defaultValue={currentUser.fullname}></input>
                <input type="text" name= "contact" placeholder="How do you want to be contact? Insert your phone and a description" defaultValue={currentUser.contact}></input>
                <input type="text" name= "city" placeholder="Insert your city" defaultValue={currentUser.city}></input>
                <input type="text" name= "phone" placeholder="Insert your phone" defaultValue={currentUser.phone}></input>
                <button>SAVE</button>               

            </div>


        </form>
</section>
}

export default Profile
import './Profile.sass'
import { deleteGame } from '../logic'

const API_URL = process.env.REACT_APP_API_URL

function Profile ({name, onRetrieveUserGames, doRefreshGames, games}) {
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
</section>
}

export default Profile
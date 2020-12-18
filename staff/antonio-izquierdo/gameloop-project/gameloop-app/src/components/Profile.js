import './Profile.sass'
import { deleteGame } from '../logic'
import { BsPeopleCircle } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

const API_URL = process.env.REACT_APP_API_URL

function Profile({ name, onRetrieveUserGames, doRefreshGames, games, onModify, currentUser }) {

    const handleDeleteGame = gameId => {
        try {
            deleteGame(gameId, error => {
                if (error) return alert(error)
                doRefreshGames()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <section>
        <h2>Hello, {name}! </h2>

        <div className="profile__form">
            <input className="profile__input" type="text" name="fullname" placeholder="" defaultValue={currentUser.fullname}></input>
            <input className="profile__input" type="text" name="contact" placeholder="How do you want to be contact? Insert your phone and a description" defaultValue={currentUser.contact}></input>
            <input className="profile__input" type="text" name="city" placeholder="Insert your city" defaultValue={currentUser.city}></input>
            <input className="profile__input" type="text" name="phone" placeholder="Insert your phone" defaultValue={currentUser.phone}></input>
        </div>
        <div className="buttons-container">
        <button className="button-save">SAVE</button>
        <button className="button-my-games" onClick={onRetrieveUserGames}>MY GAMES</button>
        </div>

        <section className="profile">
            <section className="u-p-h-20">
                <ul className="u-grid">
                    {games && games.length && games.map(({ id, name, description, gameconsole, budget }) =>
                        <li
                            className="u-grid__item">
                            <article key={id} className="card2">
                                <header className="card2-header">
                                    <img
                                        className="card2-header__image"
                                        src={`${API_URL}/games/${id}/images`}
                                        height="120"
                                        alt="Api"
                                    />
                                </header>
                                <div className="card2-body">
                                    <h4 className="card2-body__title">
                                        {name}
                                    </h4>
                                    <p className="card2-body__description"> {description}</p>
                                    <p className="card2-body__gameconsole"> {gameconsole}</p>
                                    <div className="card2-body__container">
                                        <BsTrashFill className="card2-body__trash" size={39} onClick={() => handleDeleteGame(id)}></BsTrashFill>
                                        <span className="card2-body__dot"> <p className="card2-body__budget"> {budget + ' ' + '$'}</p></span>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )}
                </ul>
            </section>
        </section>

        <form className="profile__form" onSubmit={(event => {
            event.preventDefault()

            const { target: { fullname: { value: fullname }, contact: { value: contact }, city: { value: city }, phone: { value: phone } } } = event
            console.log(fullname)
            try {
                onModify(fullname, contact, city, phone)
            } catch (error) {
                alert(error.message)
            }
        })}>

        </form>
        {<BsPeopleCircle className="home__button-profile" size={40} />}

    </section>
}

export default Profile
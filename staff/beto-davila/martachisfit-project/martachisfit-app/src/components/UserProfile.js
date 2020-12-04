import sixpack from '../components/icons/sixpack.png'
import './styles/UserProfile.sass'

export default function UserProfile ({name ,onLogOut, savedArticles, savedRecipes, onGoToChosenArticle}) {
    return <section className="user-profile">
        <div className="user-profile__name-pic">
        <img src={sixpack} alt="logo-profile" height="100" width="100"/>
            <div className="user-profile__question-btn">
            <p>¿No eres...</p>
            <div className="user-profile__name-logout">
            <p className="user-profile__name">...{name} ?</p>
            <button className="user-profile__logout" onClick={onLogOut}>Cierra sesión</button>
            </div>
            </div>
        </div>
        <h3>¡Ponte el delantal!</h3>
        {/* {savedRecipes.length === 0 && <p>No has añadido recetas a tu lista</p>} */}
        {savedRecipes && savedRecipes.length && <ul>
        {savedRecipes.map(({ _id , title, img }) => <li key={_id} className="user-profile__recipes">
        <div className="user-profile__recipes-list">
            <a href="#recipes">{title}</a>
        </div>
        </li>)}
        </ul>}
        <h3>Para leer....</h3>
        {!savedArticles.length && <p>No tienes artículos por leer</p>}
        {savedArticles && savedArticles.length && <ul>
        {savedArticles.map(({ title, _id }) => <li key={_id} className="user-profile__articles">
        <div className="user-profile__articles--list">
        <a onClick={() => onGoToChosenArticle(_id)} href="#">{title}</a>
        </div>
        </li>)}
        </ul>}
        <h3>Registro de alimentos</h3>
    </section>
}

// TODO retrieveUserRecipes
// TODO implement retrieveSavedFoods

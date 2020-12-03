export default function UserProfile ({name}) {
    return <section className="user-profile">
        <div className="user-profile__name-pic">
        <img src="" alt="logo-profile"/>
        <h3>{name}</h3>
        </div>
        <h3>¡Ponte el delantal!</h3>
        <h3>Para leer....</h3>
        <h3>Registro de alimentos</h3>
    </section>
}

// TODO retrieveUserRecipes
// TODO retrieveUserArticles
// TODO implement retrieveSavedFoods

function Welcome({name, image, onProfile, onLogout}) {
    return <section className="welcome">
    <img className= "button welcome__image" src={image || "https://i.pinimg.com/originals/50/05/f5/5005f514424141acf70727360add163d.png" } onClick={onProfile} style={{"pointerEvents": "all"}} />
    <div className= "button button__logout" onClick={onLogout}>Logout</div>
    <h2 className="welcome__title">Welcome {name}, to The Bohemians!</h2>
</section>
}
function Welcome({name, image}) {
    return <section className="welcome">
    <img className= "welcome__image" src={image || "https://i.pinimg.com/originals/50/05/f5/5005f514424141acf70727360add163d.png"} />
    <h2 className="welcome__title">Welcome {name}, to The Bohemians!</h2>
</section>
}
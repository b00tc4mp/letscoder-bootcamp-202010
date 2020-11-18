function Welcome({ name, image }) {
    return <section className="welcome">
        <h2>Welcome {name}!!</h2>
        <img className="welcome__image" src={image || 'https://i.pinimg.com/originals/50/05/f5/5005f514424141acf70727360add163d.png'}/>
        <h3></h3>
    </section>
}
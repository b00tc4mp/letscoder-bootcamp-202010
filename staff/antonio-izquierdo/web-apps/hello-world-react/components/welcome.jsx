function Welcome(props) {
    return <section className="welcome">
        <h2>Welcome {props.name}!</h2>
        <img className="welcome__image" src={props.image || 'https://i.pinimg.com/originals/50/05/f5/5005f514424141acf70727360add163d.png'} />
    </section>
}
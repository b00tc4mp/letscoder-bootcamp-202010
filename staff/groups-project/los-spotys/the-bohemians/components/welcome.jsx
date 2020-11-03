function Welcome({name, image}) {
    return <section className="welcome">
    <img className= "welcome__image" src={image || "https://previews.123rf.com/images/ljupco/ljupco1711/ljupco171100141/89400762-disparo-de-perfil-de-longitud-completa-de-una-chica-punk-cantando-y-tocando-una-guitarra-el%C3%A9ctrica-ais.jpg"} />
    <h2 className="welcome__title">Welcome {name}, to The Bohemians!</h2>
</section>
}
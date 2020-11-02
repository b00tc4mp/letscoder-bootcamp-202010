function Welcome({name, image}) {
    return <section class="welcome">
    <h2>Welcome {name} to The Bohemians!</h2>
    <img className= "welcome__image" src={image || "https://previews.123rf.com/images/ljupco/ljupco1711/ljupco171100141/89400762-disparo-de-perfil-de-longitud-completa-de-una-chica-punk-cantando-y-tocando-una-guitarra-el%C3%A9ctrica-ais.jpg"} />
</section>

}
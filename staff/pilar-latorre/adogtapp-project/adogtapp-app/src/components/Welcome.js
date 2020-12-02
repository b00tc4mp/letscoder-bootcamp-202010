import './Welcome.sass'

function Welcome({userName}){

return <section className="welcome">
        
        <h1 className="welcome__welcome">Welcome {userName}!</h1>
        <div>
        <input className="welcome__input" type="search" name="search" placeholder="search pet"/>
        <button className="welcome__search">SEARCH PET</button>
        </div>
        <button className="welcome__create">CREATE NEW PET</button>
        <div>
        <img className="welcome__img"src="paw.jpg"/>
        </div>
</section>

}

export default Welcome
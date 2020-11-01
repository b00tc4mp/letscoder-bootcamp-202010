function Home (props) {
    return <section className="home">
    <h2 className="home__hello">Hello! <span className="home__hello--span">Good to see you here</span></h2>
    <div className="home__profile">
        <h5 className="home__profile-title">Current profile:</h5>
        <img className="home__profile-img" src="" alt=""/>
        <input type="text" name="fullname" id="" placeholder="fullname"/>
        <input type="url" name="url" id="" placeholder="url image"/>
        <button onClick={props.onUpdate} className="home__profile-btn btn">Save</button>
    </div>
    <div className="home__search">
        <h5 className="home__search-title">Start browsing for news!</h5>
        <input className="home__search-bar" placeholder="look it up" type="text" name="" id="" required/>
        <button onClick={props.onDelete} className="home__search-bnt">❌</button>
        <button onClick={props.onSearch} className="home__search-btn">🔍️</button>
    </div>
</section>
}
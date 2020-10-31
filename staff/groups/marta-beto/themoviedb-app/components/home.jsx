function Home (props) {
    return <section class="home">
    <h2 class="home__hello">Hello! <span class="home__hello--span">Good to see you here</span></h2>
    <div class="home__profile">
        <h5 class="home__profile-title">Current profile:</h5>
        <img class="home__profile-img" src="" alt=""/>
        <input type="text" name="fullname" id="" placeholder="fullname"/>
        <input type="url" name="url" id="" placeholder="url image"/>
        <button onclick={props.onUpdate} class="home__profile-btn btn">Save</button>
    </div>
    <div class="home__search">
        <h5 class="home__search-title">Start browsing for news!</h5>
        <input class="home__search-bar" placeholder="look it up" type="text" name="" id="" required/>
        <button onclick={props.onDelete} class="home__search-bnt">❌</button>
        <button onclick={props.onSearch} class="home__search-btn">🔍️</button>
    </div>
</section>
}
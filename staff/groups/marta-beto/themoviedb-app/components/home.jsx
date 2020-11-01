const { Component } = React;

class Home extends Component {
    constructor() {
        super()

        this.state = {user}
    }

    handleGoToProfile = () => {
        this.setState({ view: 'profile' })
    }


    render() {
        return <>
        {user && <Welcome name={user.fullname}/>}

        {this.state === 'profile' && <Profile />}

        <input className="search-title" type="text" placeholder="Search your title"/>

        {view === 'home' && <Dropdown />}

        {view === 'home' && <Carousel />}

        <div className="carousel">
            <div className="carousel__movie">
                <img src="http://placehold.it/300x150"/>
            </div>
            <div className="carousel__movie">
                <img src="http://placehold.it/300x150"/>
            </div>
            <div className="carousel__movie">
                <img src="http://placehold.it/300x150"/>
            </div>
            <div className="carousel__movie">
                <img src="http://placehold.it/300x150"/>
            </div>
            <div className="carousel__movie">
                <img src="http://placehold.it/300x150"/>
            </div>
            <div className="carousel__movie">
                <img src="http://placehold.it/300x150"/>
            </div>
        </div>

        </>
    }
}
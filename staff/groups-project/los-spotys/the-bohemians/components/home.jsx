const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }


    componentWillMount() {
        
        const {token} = sessionStorage

        token && retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)
            this.setState({ user })
        })
    }

    handleGoToProfile = () => {
        if (this.state.subview){
            this.setState({ subview : null })
        }
        
        else this.setState({ subview : 'profile'})

    }
    
    handleModifyUser = (fullname, image) => {
        const { token } = sessionStorage

        modifyUser(token, { fullname, image}, error => {
            if (error) alert(error.message)

            retrieveUser(token, (error, user) => {
                if (error) return alert (error.message)

                this.setState({ user })
            })

        })

    }

    handleSearchTracks = (type, query) => {
        const {token, spotyToken} = sessionStorage
        
        try {
            searchTracks(token, spotyToken, type, query, (error, tracks) => {
                if (error) return alert(error.message)
                 

                this.setState({ tracks, track: undefined, type, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    }

    handleGoToTrack = (id) => {

        const {token, spotyToken} = sessionStorage

        retrieveTrack(token, spotyToken, id, (error, track) => {
            if (error) return alert(error.message)
            
        this.setState({ track })
            
        })
    }
  
    handleFavourite = id => {

        const {token} = sessionStorage

        toggleFavouriteTrack(token, id, error => {
            if (error) return alert(error.message)

            const {state : { track }} = this 
            
            if(track)
            this.handleGoToTrack(id)
            else
            this.handleSearchTracks(this.state.type, this.state.query)
        })
    }


    render() {
        const { state: { subview, tracks, track, user }, handleSearchTracks, handleGoToTrack, handleFavourite, handleGoToProfile, handleModifyUser} = this

        return <>

            {user && <Welcome name={user.fullname} image={user.image} onProfile={handleGoToProfile} />}

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image}/>}

            <Search onSearch={handleSearchTracks} />

            {!track && tracks && <Results tracks={tracks} onTrack={handleGoToTrack} onFavourite = {handleFavourite} />}

            {track && <Detail song={track}  onFavourite={handleFavourite}/> }
        </>

    }
}



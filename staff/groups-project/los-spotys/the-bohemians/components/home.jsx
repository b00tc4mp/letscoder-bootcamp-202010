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

        const {spotyToken} = sessionStorage

        retrieveTrack(spotyToken, id, (error, track) => {
            if (error) return alert(error.message)
            {
            let { id, name: song, preview_url: preListening, album, artists } = track
               
            this.setState({ track: { id, song, preListening, image: album.images[1].url, releaseDate: album.release_date, artist: artists[0].name, album: album.name } })
            }
        })
    }
  
    handleFavourite = id => {

        const {token} = sessionStorage

        toggleFavouriteTrack(token, id, error => {
            if (error) return alert(error.message)

            const{type, query} = this.state 
            
            this.handleSearchTracks(type, query)

        })

    }

    render() {
        const { state: { subview, tracks, track, user }, handleSearchTracks, handleGoToTrack, handleFavourite } = this

        return <>

            {user && <Welcome name={user.fullname} image={user.image} />}


            <Search onSearch={handleSearchTracks} />

            {!track && tracks && <Results tracks={tracks} onTrack={handleGoToTrack} onFavourite = {handleFavourite} />}

            {track && <Detail song={track} /> }
        </>

    }
}



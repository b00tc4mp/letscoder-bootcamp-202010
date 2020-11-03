const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }


    componentWillMount() {
        retrieveUser(this.props.token, (error, user) => {
            if (error) return alert(error.message)
            this.setState({ user })
        })
    }

    handleSearchMusic = (type, query) => {
        try {
            searchMusic("BQCBKbH8X104utQm5b07hXZL9xAOmWYYt1Udaodv7oJCM6o9ngz_jHVBDeKsJQsKQceyE0aZ3mPELyFmiiOQjwCd04kJoY3y2AR96hKWnnSX964OtGddZys2HR6P7SmZPwE8449A2DMJeducZAZu4xjRad_UVxQ", type, query, (error, music) => {
                if (error) return alert(error.message)
                
                music = music.map(({ name: song, id, preview_url: preListening, artists, album }) => ({ song, id, preListening, artist: artists[0].name ? artists[0].name : 'this song doesn´t have an artist', image: album.images[1].url ? album.images[1].url : 'http://hem.bredband.net/b477738/not-found.jpg', releaseDate: album.release_date}))

                

                this.setState({ music, track: undefined, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    }

    handleGoToTrack = (id) => {
        retrieveTrack("BQCBKbH8X104utQm5b07hXZL9xAOmWYYt1Udaodv7oJCM6o9ngz_jHVBDeKsJQsKQceyE0aZ3mPELyFmiiOQjwCd04kJoY3y2AR96hKWnnSX964OtGddZys2HR6P7SmZPwE8449A2DMJeducZAZu4xjRad_UVxQ", id, (error, track) => {
            if (error) return alert(error.message)
            {
            let { id, name: song, preview_url: preListening, album, artists } = track
               
            this.setState({ track: { id, song, preListening, image: album.images[1].url, releaseDate: album.release_date, artist: artists[0].name, album: album.name } })
            }
        })
    }

    render() {
        const { state: { subview, music, track, user }, handleSearchMusic, handleGoToTrack } = this

        return <>

            {user && <Welcome name={user.fullname} image={user.image} />}


            <Search onSearch={handleSearchMusic} />

            {!track && music && <Results music={music} onTrack={handleGoToTrack} />}

            {track && <Detail song={track} /> }
        </>

    }
}



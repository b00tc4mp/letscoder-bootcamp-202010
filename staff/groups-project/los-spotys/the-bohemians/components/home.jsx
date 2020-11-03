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
            searchMusic("BQApkFSI8EopxxFZR8-DsoE6zkZb7XzGSNWmoP06Uj49TCxrKTsAlh25_YOze-8eZQiUYe31DesHX9ljKZQ6IjTbBN3fZPXK0OTzyQtjbnhYQrxBtfeYZq8LXQkdEspAZNrK6IZ9tKt6zo5iOL-sP7FvhMNFytI", type, query, (error, music) => {
                if (error) return alert(error.message)
                
                music = music.map(({ name: song, id, preview_url: preListening, artists, album, popularity }) => ({ song, id, preListening, artist: artists[0].name ? artists[0].name : 'this song doesn´t have an artist', image: album.images[1].url ? album.images[1].url : 'http://hem.bredband.net/b477738/not-found.jpg', releaseDate: album.release_date}))

                

                this.setState({ music, track: undefined, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    }

    handleGoToTrack = (id) => {
        retrieveTrack("BQApkFSI8EopxxFZR8-DsoE6zkZb7XzGSNWmoP06Uj49TCxrKTsAlh25_YOze-8eZQiUYe31DesHX9ljKZQ6IjTbBN3fZPXK0OTzyQtjbnhYQrxBtfeYZq8LXQkdEspAZNrK6IZ9tKt6zo5iOL-sP7FvhMNFytI", id, (error, track) => {
            if (error) return alert(error.message)
            {
            let { id, name: song, preview_url: preListening, album, popularity, artists } = track
               
            this.setState({ track: { id, song, preListening, image: album.images[1].url, popularity, releaseDate: album.release_date, artist: artists.name, album: album.name } })
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



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
            searchMusic(this.props.token, type, query, (error, music) => {
                if (error) return alert(error.message)

                music = music.map(({ name: song, id, preview_url: preListening, artists, album }) => ({ song, id, preListening, artist: artists[0].name ? artists[0].name : 'this song doesn´t have an artist', image: album.images[0].url ? album.image[0].url : 'http://hem.bredband.net/b477738/not-found.jpg' }))

                this.setState({ music, track: undefined, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    }

    render() {
        const { state: { subview, music, track, user }, handleSearchMusic } = this

        return <>

            {user && <Welcome name={user.fullname} image={user.image} />}

            <h2>Music</h2>

            <Search onSearch={handleSearchMusic} />
        </>

    }
}



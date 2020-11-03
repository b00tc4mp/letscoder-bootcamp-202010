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
            searchMusic("BQBtCHsA6dloIEh1EspRSGY8IIg-okdQJb0QqzJ2o3CrRn_4MYLXauI2oNVWBnvSqVj4sMsX-6VklweIkCCveXhyxbZrfX6UwumP99dcB3cv6ZxytbdPkGINoaAYpDK2y67oe8EsbmD0MKfEZ5wi3MvULLXaorw", type, query, (error, music) => {
                if (error) return alert(error.message)

                music = music.map(({ name: song, id, preview_url: preListening, artists, album, popularity }) => ({ song, id, preListening, artist: artists[0].name ? artists[0].name : 'this song doesn´t have an artist', image: album.images[1].url ? album.images[1].url : 'http://hem.bredband.net/b477738/not-found.jpg', popularity, releaseDate: album.release_date}))

                console.log(music)

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


            <Search onSearch={handleSearchMusic} />

            {!track && music && <Results music={music}  />}
        </>

    }
}



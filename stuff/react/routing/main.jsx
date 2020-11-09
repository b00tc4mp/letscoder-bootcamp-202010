const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentDidMount = () => {
        window.addEventListener('popstate', () => {
            const [, path] = location.href.split('#')

            this.setState({ path })
        })
    }

    handleGoTo = path => {
        const [base] = location.href.split('#')

        const href = `${base}#${path}`

        location.href = href

        //this.setState({ path })
    }

    render() {
        const { handleGoTo, state: { path } } = this

        //const [, path] = location.href.split('#')

        return <>
            <p>App</p>

            <button onClick={() => handleGoTo('/timeline')}>Timeline</button>

            <button onClick={() => handleGoTo('/messages')}>Messages</button>

            <button onClick={() => handleGoTo('/profile')}>Profile</button>

            {path === '/timeline' && <Timeline />}

            {path === '/messages' && <Messages />}

            {path === '/profile' && <Profile />}
        </>
    }
}

function Timeline() {
    return <p>TODO timeline...</p>
}

function Profile() {
    return <p>TODO profile...</p>
}

function Messages() {
    return <p>TODO messages...</p>
}

ReactDOM.render(<App />, document.getElementById('root'))
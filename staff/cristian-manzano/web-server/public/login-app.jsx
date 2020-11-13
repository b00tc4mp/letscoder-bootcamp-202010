class App extends Component {
    constructor() {
        super()

        const { cookiesAccepted } = state

        this.state = { cookiesAccepted }
    }

    handleAcceptCookies = () => {
        this.handleAcceptCookies(error => {
            if (error) return alert(error.message)

            this.setState({ cookiesAccepted: true })
        })
    }

    render() {
        const { state: { cookiesAccepted }, handleAcceptCookies } = this

        return <>
        {!cookiesAccepted && <AcceptCokies onAccept={handleAcceptCookies} />}
        </>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
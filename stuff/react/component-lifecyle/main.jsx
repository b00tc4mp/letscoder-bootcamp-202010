const { Component } = React

class App extends Component {
    //state = { name: 'App' }
    constructor() {
        super()

        this.state = { name: 'App' }

        console.log('App', 'construct')
    }

    UNSAFE_componentWillMount() { // componentWillMount() {
        console.log('App', 'will mount')

        // this.setState({ name: 'Pepito' }) // WARN avoid sync state operations here
        // setTimeout(() => this.setState({ name: 'Pepito' }), 1000)
    }

    componentDidMount() {
        console.log('App', 'did mount')

        // this.setState({ name: 'Pepito' })
        //setTimeout(() => this.setState({ name: 'Pepito' }), 1000)
    }

    handleUpdate = event => {
        event.preventDefault()

        const { target: { name: { value: name } } } = event

        this.setState({ name })
    }

    render() {
        const { state: { name }, handleUpdate } = this

        console.log('App', 'render')

        return <>
            <p>{name}</p>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" />
                <button>update</button>
            </form>

            <Hello name={name} />
        </>
    }
}

class Hello extends Component {
    constructor() {
        super()

        this.state = { name: 'World' }

        console.log('Hello', 'constructor')
    }

    componentWillMount() {
        console.log('Hello', 'will mount')
    }

    componentDidMount() {
        console.log('Hello', 'did mount')
    }

    componentWillReceiveProps({name}) {
        console.log('Hello', 'component will receive props')

        this.setState({ name })
    }

    handleUpdate = event => {
        event.preventDefault()

        const { target: { name: { value: name } } } = event

        this.setState({ name })
    }

    render() {
        const { state: { name }, handleUpdate } = this

        console.log('Hello', 'render')

        return <>
            <p>Hello, {name}!</p >

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" />
                <button>update</button>
            </form>
        </>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
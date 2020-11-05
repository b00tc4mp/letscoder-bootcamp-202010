class Component {
    constructor() { }

    setState(state) {
        this.state = { ...this.state, ...state }

        this.render()
    }
}

class App extends Component {
    constructor() {
        super()

        this.state = {}

        this.handleSalute = this.handleSalute.bind(this)
    }

    //handleSalute = name => this.setState({ name })
    handleSalute(name) {
        this.setState({ name })
    }

    render() {
        const { handleSalute, state: { name } } = this

        return `<>
                    <form onSubmit={event => {
                            event.preventDefault()
                            
                            const name = event.target.name.value

                            
                            handleSalute(name)
                        }}>
                        <input type="text" name="name">
                        <button>salute!</button>
                    </form>
                    
                    <h1>Hello, ${name}!</h1>
       </>`
    } 
}

// <App />
const app = new App()

app.handleSalute('Peter')

console.log(app.render())

app.handleSalute('Annita')

console.log(app.render())
VM1109:51 <>
                    <form onSubmit={event => {
                            event.preventDefault()
                            
                            const name = event.target.name.value

                            
                            handleSalute(name)
                        }}>
                        <input type="text" name="name">
                        <button>salute!</button>
                    </form>
                    
                    <h1>Hello, Peter!</h1>
       </>
VM1109:55 <>
                    <form onSubmit={event => {
                            event.preventDefault()
                            
                            const name = event.target.name.value

                            
                            handleSalute(name)
                        }}>
                        <input type="text" name="name">
                        <button>salute!</button>
                    </form>
                    
                    <h1>Hello, Annita!</h1>
       </>
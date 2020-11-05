function Component() {
}

Component.prototype.setState = function (state) {
    var prevState = this.state

    this.state = {}

    for (var key in prevState)
        this.state[key] = prevState[key]
    
    for (var key in state)
        this.state[key] = state[key]

    this.render()
}

function App() {
    this.state = {}

    this.handleSalute = this.handleSalute.bind(this)
}

App.prototype = Object.create(Component.prototype)
App.prototype.constructor = App

App.prototype.handleSalute = function (name) {
    this.setState({ name })
}

App.prototype.render = function () {
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

// <App />
var app = new App()

var handleSalute = app.handleSalute

handleSalute('Peter')

console.log(app.render())

handleSalute('Annita')

console.log(app.render())
VM5562:58 <>
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
VM5562:62 <>
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


app.__proto__ === App.prototype
true
app.__proto__.__proto__ === Component.prototype
true
app.__proto__.__proto__.__proto__ === Object.prototype
true
app

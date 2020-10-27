class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'access' }
    }

    render() {
        return <>
            <Title />
            
            {this.state.view === 'access' && <Access onRegister={function () {
                //this.state.view = 'register' //NO!

                this.setState({ view: 'register' })
            }.bind(this)} />}

            {this.state.view === 'register' && <Register />}
        </>
    }
}
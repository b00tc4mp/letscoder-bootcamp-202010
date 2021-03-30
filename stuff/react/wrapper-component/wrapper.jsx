// function Wrapper({ children, user }) {
//     return <section className="wrapper">
//         <h2>{user}</h2>

//         { children }
//     </section>
// }

const { Component } = React

class Wrapper extends Component {
    constructor() { super() }

    render() {
        const { props: { children, user } } = this

        return <section className="wrapper">
            <h2>{user}</h2>

            {children}
        </section>
    }
}


// import './Home.sass'
import Welcome from './Welcome'
import retrieveUser from '../logic/retrieve-user'
import React from 'react'
const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }
    componentWillMount() {
        const { token } = sessionStorage
        // try {
        retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
        // } catch (error) {
        //     if (error) return alert(error.message)
        // }

    }

    render() {
        const { state: { user } } = this

        return <>
            <h1>HOME </h1>
            {/* {user ? <h1>HOME {user.fullname} </h1> : <h1>HOME </h1>} */}
            {/* <Welcome /> */}
            {user && <Welcome user={user} />}
        </>
    }

}

export default Home
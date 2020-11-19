//import './Home.sass'
import React from 'react'
import retrieveUser from '../logic/retrieve-user'
import Welcome from './Welcome'

const { Component } = React

class Home extends Component{
    constructor(){
        super()

        this.state = {}
    }
    componentWillMount(){
        const { token } = sessionStorage
       
        retrieveUser(token, (error, user) => {
           
            if (error) return alert(error)
            this.setState({user})
        })
      
    }
        
    

    render(){

        const {state: { user }} = this

        return <>

            {user && <Welcome user = {user}/>}

            </> 
    }

}

export default Home


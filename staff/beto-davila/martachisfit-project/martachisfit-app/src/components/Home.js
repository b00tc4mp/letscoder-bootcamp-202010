import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import logo from '../../src/logo.png'
import { DropDownMenu } from './index'

export default function Home () {
    const [name, setName] = useState()
    const [view, setView] = useState()

    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { fullname } = user
                setName(fullname)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleGoToDietDesign = () => {
        setView("diet-design")
    }


    return <div className="home">
    <img className="home__logo" alt="logo" src={logo} height="100" width="100"></img>
    <h1 className="home__title">MartachisFIT</h1>
    <p className="home__user">¡Bienvenid@, <span className="home__user--name">{name}</span>!</p>
    {<DropDownMenu onGoToDietDesign={handleGoToDietDesign}/>}
    </div>
}
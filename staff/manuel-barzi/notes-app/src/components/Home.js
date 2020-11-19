import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'

export default function () {
    const [name, setName] = useState()

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

    return <section className="home">
        <h1>Hello, {name}!</h1>
    </section>
}
import React from 'react'
import './Home.sass'


function Home({ onHome, onGoRegister, onGoLogin }) {
    
    return <sections>

        <form onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHome(product)
        }}>
            <button className="homebuttons" onClick={onGoRegister}>Regístrate</button>
            <button className="homebuttons" onClick={onGoLogin}>Entra</button>
            <nav className="searcherProducts">
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
            </nav>
        </form>
        
        
        <h3>¿Qué alimento quieres hoy?</h3>

        <div>
            <button className="tags">Cebolla</button>
            <button className="tags">Tomate</button>
            <button className="tags">Lechuga</button>
            <button className="tags">Pepino</button>
            <button className="tags">Pimiento</button>
        </div>


    </sections>

}

export default Home
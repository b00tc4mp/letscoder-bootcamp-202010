// import { useEffect, useState } from 'react'
import deleteNote from '../logic/delete-note'
import './Results.sass'


function Results({ results, onDelete }) {
    
    const handleDelete = (noteId) => {
        const { token } = sessionStorage
        deleteNote(token, noteId, error =>{
            if(error) return alert(error)

            onDelete()
        })
    }

    return <>
    <div className="results">
        <ul className="results__ul">
        {results.map( ({id, text, tags, owner, visibility, date}) => 
        <li key={`${Math.random()}`} className="results__li">
            <p className="results__p">{text}</p>
            <p className="results__p">tags: {tags}</p>
            <p className="results__p">owner: {owner}</p>
            <p className="results__p">visibility: {visibility}</p>
            <p className="results__p">date: {date}</p>
            <button onClick={event => {
                event.stopPropagation()
                handleDelete(id)
            }}>❌</button>
        </li>)}

        </ul>
        </div>
    </>
}


export default Results
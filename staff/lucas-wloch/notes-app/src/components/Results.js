// import { useEffect, useState } from 'react'
import './Results.sass'


function Results({ results }) {
    // const [resultList, setResultList] = useState(results)

    // useEffect( () => {
        
    //     setResultList(results)

    // },[results] ) 

    return <>
    <div className="results">
        <ul className="results__ul">
        {results.map( ({id, text, tags, owner, visibility}) => 
        <li key={`${Math.random()}`} className="results__li">
            <p className="results__p">{text}</p>
            <p className="results__p">tags: {tags}</p>
            <p className="results__p">owner: {owner}</p>
            <p className="results__p">visibility: {visibility}</p>
        </li>)}

        </ul>
        </div>
    </>
}


export default Results
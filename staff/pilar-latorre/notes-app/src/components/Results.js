// import { useEffect, useState } from 'react'
import './Results.sass'


function Results({ results }) {
    // const [resultList, setResultList] = useState(results)

    // useEffect( () => {
        
    //     setResultList(results)

    // },[results] ) 

    return <>
        <ul>
        {results.map( ({id, text, tags, owner, visibility}) => 
        <li key={id}>
            <p>{text}</p>
            <p>tags: {tags}</p>
            <p>owner: {owner}</p>
            <p>visibility: {visibility}</p>
        </li>)}

        </ul>
    </>
}


export default Results
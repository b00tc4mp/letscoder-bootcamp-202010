// import { useEffect, useState } from 'react'


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
            <h6>owner: {owner}</h6>
            <h6>visibility: {visibility}</h6>
        </li>)}

        </ul>
    </>
}


export default Results
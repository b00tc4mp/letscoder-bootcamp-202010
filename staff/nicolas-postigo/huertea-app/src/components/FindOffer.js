import React from 'react'

export default function FindOffers({results}){

    
    return <div className="results">
        <ul className="results__ul">
        {results.map( ({id, titleoffer, offername, price }) => 
        <li key={id} className="results__li">
            <p className="results__p">{titleoffer}</p>
            <p className="results__p">offername: {offername}</p>
            <p className="results__p">price: {price}</p>

            
        </li>)}

        </ul>
        </div>

}


import React, { useEffect } from 'react'
import './Hub.sass'
import { useState } from 'react'
//import { retrieveUser } from '../logic'
import ListOffersRetrieve from './ListOffersRetrieve'
import SearchOffers from './SearchOffers'
import FindOffer from './FindOffer'
import Detail from './Detail'
import { retrieveOffer } from './../logic'
import Useroffers from './Useroffers'
import {Link} from 'react-router-dom'
import {deleteOffer} from './../logic'
import {retrieveUser} from './../logic'
import Modifyoffer from './Modifyoffer'
import modifyOffer from '../logic/modify-offer'

function Hub({ fullname, onHub, onGoCreateoffer, onRetrieveUserOffers, useroffers }) {
    const [results, setResults] = useState()
    const [view, setView] = useState('default')
    const [offer, setOffer] = useState([])
    const [offers, setOffers] = useState([])
    const [name, setName]=useState(fullname)
    // const [effectOffers, setEffectOffers]=useState(offers)
    const { token } = sessionStorage

 useEffect(()=>{
    retrieveUser(sessionStorage.token, (error, user) => {
        if (error) return alert(error.message)
        setName(user.fullname)
      })
       retrieveOffer(sessionStorage.token, (error, offersResult) => {
        if (error) return alert(error.message)

        setOffers(offersResult)

      }) 
},[]) 


    const handleGoSearcher = (results) => {
        setResults(results)
        setView('offersfound')
    }

    const handleGoUserOffers = (results) => {
        setResults(results)
        setView('user-offers')
    }
    const handleGoDetail = (event, offer) => {
        event.preventDefault()
        try {
            setOffer(offer)
            setView("detail")


        } catch (error) {
            alert(error.message)
        }

    }

    

    const handleGoDelete = (id) => {
        const { token } = sessionStorage
        try {


            deleteOffer(token, id, (error, offerId) => {
            if (error) return alert (error.message)
            setView("user-offers")

            retrieveOffer(sessionStorage.token, (error, offersResult) => {
                if (error) return alert(error.message)
        
                setOffers(offersResult)
        
              }) 

            })
        } catch (error) {
            alert(error.message)
        }
    }
    const handleGoModify = () => {
       
          
        setView("modify")


} 


    const handleModify = (offer) => {
        //offerId: offer.id, offername, titleoffer, price, pic: pic.files[0], offeraddress, phonecontact, emailcontact
const {offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact} = offer
     modifyOffer(sessionStorage.token, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact, (error, user) => {
            if (error) return alert(error.message)

          })
        setView("user-offers")


} 

return <sections>
        <div>
        {/* <button onClick={(evento)=>onRetrieveUserOffers(evento)} className="retrieve-offer">mis ofertas &#127806;</button> */}
        <button onClick={()=>{onRetrieveUserOffers(); handleGoUserOffers()}} className="retrieve-offer">mis ofertas &#127806;</button>
    </div>
    <form className="search_form" onSubmit={function (event) {
        event.preventDefault()
        var product = event.target.query.value
        onHub(product)
    }}>
    </form>
    <h3>Bienvenid@ {name}!</h3>
    <h3>¿Qué alimento quieres hoy? </h3>

    <div>
        <button onClick={onGoCreateoffer} className="offer">crea tu oferta &#127806;</button>
    </div>
    <SearchOffers onGoSearcher={handleGoSearcher} />
    {/* <Link to ='/register'>tu</Link> */}
    {view === 'offersfound' && <FindOffer results={results} onGoDetail={handleGoDetail} />}

    {view === 'default' && <ListOffersRetrieve offers={offers} onGoDetail={handleGoDetail} />}
    {view === 'user-offers' && <Useroffers useroffers={useroffers} onGoDetail={handleGoDetail} onGoDelete={handleGoDelete} onGoModify={handleGoModify}/>}
    {/* {view === 'user-offers' && <Useroffers useroffers={useroffers} onGoDetail={handleGoDetail} onGoDelete={handleGoDelete} onGoModify={handleGoModify}/>} */}
    {view === 'detail' && <Detail offer={offer} />}
    {view === 'modify' && <Modifyoffer offer={offer} onModifyoffer={handleModify}/>}
</sections>

}

export default Hub

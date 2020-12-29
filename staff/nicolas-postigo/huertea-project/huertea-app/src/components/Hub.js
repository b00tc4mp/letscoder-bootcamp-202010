import React, { useEffect } from 'react'
import './Hub.sass'
import { useState } from 'react'
import ListOffersRetrieve from './ListOffersRetrieve'
import SearchOffers from './SearchOffers'
import Detail from './Detail'
import Useroffers from './Useroffers'
import { retrieveUser, retrieveUserOffer, retrieveOffer, deleteOffer } from './../logic'
import Modifyoffer from './Modifyoffer'
import modifyOffer from '../logic/modify-offer'
import Home from './Home'
import OfferResults from './OfferResults'

function Hub({ fullname, onHub, onGoCreateoffer, onRetrieveUserOffers, useroffers, onGoHome }) {
    const [results, setResults] = useState()
    const [view, setView] = useState('default')
    const [offer, setOffer] = useState([])
    const [offers, setOffers] = useState([])
    const [offeruser, setOfferuser] = useState(useroffers || [])
    const [name, setName] = useState(fullname)
    const { token } = sessionStorage

    useEffect(() => {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) return alert(error.message)
            setName(user.fullname)
        })
        retrieveOffer(sessionStorage.token, (error, offersResult) => {
            if (error) return alert(error.message)

            setOffers(offersResult)

        })

        retrieveUserOffer(token, (error, offersResult) => {
            if (error) return alert(error.message)

            setOfferuser(offersResult)

        })
    }, [])


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

    



    const handleGoDelete = (offerId) => {
        const { token } = sessionStorage
        try {


            deleteOffer(token, offerId, (error) => {
                if (error) return alert(error.message)

                setView("user-offers")
                try {
                    retrieveUserOffer(token, (error, offersResult) => {
                        if (error) return alert(error.message)

                        setOfferuser(offersResult)

                    })
                } catch (error) {
                    alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }
    const handleGoModify = () => {


        setView("modify")


    }


    const handleModify = (offer) => {
        const { offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact } = offer
        modifyOffer(sessionStorage.token, offerId, offername, titleoffer, price, offeraddress, phonecontact, emailcontact, (error, user) => {
            if (error) return alert(error.message)

        })
        setView("user-offers")



    }

    const handleGoHub = () => {
        
        setView("default")        
    }






    return <sections className="wrap">
        <div>
            <button onClick={() => { onRetrieveUserOffers(); handleGoUserOffers() }} className="retrieve-offer">mis ofertas &#127806;</button>
        </div>
        <div>
            <button onClick={onGoCreateoffer} className="offer">crea tu oferta &#127806;</button>
        </div>
        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHub(product)
        }}>
        </form>
        <div>
            <button onClick={onGoHome} className="log-out-button">salir</button>
        </div>
        <h3>Hola {name}, ¿Qué alimento quieres hoy?</h3>


        <SearchOffers onGoSearcher={handleGoSearcher} />



        {view === 'offersfound' && <OfferResults results={results} onGoDetail={handleGoDetail} onGoHub={handleGoHub} />}
        {view === 'default' && <ListOffersRetrieve offers={offers} onGoDetail={handleGoDetail} />}
        {view === 'user-offers' && <Useroffers useroffers={offeruser} onGoDetail={handleGoDetail} onGoDelete={handleGoDelete} onGoModify={handleGoModify} onGoHub={handleGoHub} />}
        {view === 'detail' && <Detail offer={offer} useroffers={offeruser} results={results} onGoHub={handleGoHub} />}
        {view === 'modify' && <Modifyoffer offer={offer} onModifyoffer={handleModify} />}
        {view === 'home' && <Home />}
    </sections>

}

export default Hub

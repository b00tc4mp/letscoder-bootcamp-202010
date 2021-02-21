
import {offerResult} from '../logic'
import './OfferResults'
import './SearchOffers.sass'

function SearchOffers({onGoSearcher}){

    let query;
    

    const handleFindOffers = (titleoffer, offername, price) => {


        try {
            offerResult( titleoffer, offername, price, (error, offers) => {

                if (error) return alert(error.message)

                onGoSearcher(offers)

            })
        } catch (error) {
            alert(error.message)
        }
    }    
    
        return (
            <>
                <form className="searchhub" onSubmit={(event) => event.preventDefault()}>
                    <input
                        className="searcher" type="text" name="query" placeholder="Busca en huertea"
                        onChange={(event) => (query = event.target.value)}
                    />
    
                <button
                        className="searchByName__button"
                        onClick={() => handleFindOffers( undefined, query, undefined)}
                    >
                        🔍 
                </button>

     
                </form>
                
                
            </>
        );
    }


export default SearchOffers
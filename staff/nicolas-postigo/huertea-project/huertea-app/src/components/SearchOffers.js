
import {findOffer} from '../logic'
import './FindOffer'
import './SearchOffers.sass'

function SearchOffers({onGoSearcher}){

    let query;
    

    const handleFindOffers = (titleoffer, offername, price) => {


        try {
            findOffer( titleoffer, offername, price, (error, offers) => {

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
                        className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea"
                        onChange={(event) => (query = event.target.value)}
                    />
    
{/*                     <button
                        className="searchByName__button"
                        onClick={() => handleFindOffers(query, undefined, undefined)}
                    >
                        titleoffer
                </button> */}
                <button
                        className="searchByName__button"
                        onClick={() => handleFindOffers( undefined, query, undefined)}
                    >
                        Busca
                </button>
{/*                 <button
                        className="searchByName__button"
                        onClick={() => handleFindOffers( undefined, undefined, query)}
                    >
                        price
                </button> */}

     
                </form>
                
                
            </>
        );
    }


export default SearchOffers
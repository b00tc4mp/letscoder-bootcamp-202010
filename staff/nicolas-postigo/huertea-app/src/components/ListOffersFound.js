import offer from '../../../huertea-api/models/schemas/offer';
import { findOffer } from './logic'

function Search({ onSearchByOffername, onSearchByTitleoffer, onSearchPrice }) {
    let query;
    const [results, setResults] = useState()

    const findOffer = (titleoffer, offername, price) => {

        try {
            //logic
            findPets(titleoffer, offername, price, (error, results) => {
                if(error)

                if(results)
                    setResults(offer)
            })
            
        } catch (error) {
            alert(error)
        }


    }


    return (
        <>
            <form className="search" onSubmit={(event) => event.preventDefault()}>
                <input
                    className="search__input"
                    name="query"
                    type="text"
                    placeholder="Search"
                    onChange={(event) => (query = event.target.value)}
                />

                <button
                    className="searchByName__button"
                    onClick={() => onSearchByName(query), findPets(undefined, undefined, query, undefined, undefined)}
                >
                    buscar por título
        </button>
                <button
                    className="searchRandom__button"
                    onClick={() => onSearchRandom(), findPets(undefined, undefined, undefined, undefined, query)}
                >
                    buscar por descripción
        </button>

            </form>
            {results && results.length && <ListOffersFound results={results} />}
        </>
    );
}
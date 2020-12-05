import FindProducts from './FindProducts'
import { useState } from 'react'
import { findProducts } from '../logic'


function SearchProducts() {

    let query
    const [results, setResults] = useState()

    const handleSearchProduct = (queryCompany,queryProduct, price, priceMin,priceMax) => {

        const { token } = sessionStorage

        try {
            findProducts( token, queryCompany,queryProduct, price, priceMin,priceMax, (error, products) => {

                if (error) return alert(error.message)

                setResults(products)
            })
        } catch (error) {
            alert(error.message)
        }
    }
   /*  query, price, priceMin,priceMax
 */
    return (
        <>
            <form className="find" onSubmit={(event) => event.preventDefault()}>
                <input
                    className="find__input"
                    name="query"
                    type="text"
                    placeholder="Search"
                    onChange={(event) => (query = event.target.value)}

                />
                <button
                    className="searchByName__button"
                    onClick={() => handleSearchProduct(query, undefined, undefined, undefined, undefined)}
                >
                    Company
                </button>
                <button
                    className="searchByName__button"
                    onClick={() => handleSearchProduct(undefined, query, undefined, undefined, undefined)}
                >
                    Product
                </button>
                <button
                    className="searchByName__button"
                    onClick={() => handleSearchProduct(undefined, undefined, query, undefined, undefined)}
                >
                    Price
                </button>

                <button
                    className="searchByName__button"
                    onClick={() => handleSearchProduct(undefined, undefined, undefined, query, undefined)}
                >
                    PriceMin
                </button>

                <button
                    className="searchByName__button"
                    onClick={() => handleFindProduct(undefined, undefined, undefined, undefined, query)}
                >
                    PriceMax
                </button>


            </form>
            {results && results.length && <FindProducts results={results} />}
        </>
    );
}




export default SearchProducts
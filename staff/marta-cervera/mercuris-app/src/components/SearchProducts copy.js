import FindProducts from './FindProducts'
import { useState } from 'react'
import { findProducts } from '../logic'


function SearchProducts() {

    const [view, setView] = useState('find-products')

    let query
    const [results, setResults] = useState()
    

    const handleSearchProducts = (queryCompany,queryProduct, price, priceMin,priceMax) => {

        const { token } = sessionStorage

        try {
            findProducts( token, queryCompany,queryProduct, price, priceMin,priceMax, (error, products) => {

                if (error) return alert(error.message)

                setResults(products)

                setView('find-products')
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
                <input
                    name="query"
                    type="text"
                    className="searchByName__button"
                    onClick={() => handleSearchProducts(query, undefined, undefined, undefined, undefined)}
                >
                    Company
                </input>
                <input
                    name="query"
                    type="text" 
                    className="searchByName__button"
                    onClick={() => handleSearchProducts(undefined, query, undefined, undefined, undefined)}
                >
                    Product
                </input>
                <input
                    className="searchByName__button"
                    onClick={() => handleSearchProducts(undefined, undefined, query, undefined, undefined)}
                >
                    Price
                </input>

                <input
                    className="searchByName__button"
                    onClick={() => handleSearchProducts(undefined, undefined, undefined, query, undefined)}
                >
                    PriceMin
                </input>

                <input
                    className="searchByName__button"
                    onClick={() => handleSearchProducts(undefined, undefined, undefined, undefined, query)}
                >
                    PriceMax
                </input>
                <button>SEARC</button>


            </form>
            {results && results.length && <FindProducts results={results} />}
        </>
    );
}




export default SearchProducts
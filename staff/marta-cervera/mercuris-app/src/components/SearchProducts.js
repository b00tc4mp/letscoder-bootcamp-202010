import './SearchProducts.sass'
import FindProducts from './FindProducts'
import { useState, useEffect } from 'react'
import { findProducts } from '../logic'





export default function () {
    const [view, setView] = useState('find-products')

    const [results, setResults] = useState()


    const handleSearchProducts = event => {
        debugger
        

        const { token } = sessionStorage

        event.preventDefault()

        const { target: {
            queryCompany: { value: queryCompany },
            queryProduct: { value: queryProduct },
            price: { value: price },
            priceMin: { value: priceMin },
            priceMax: { value: priceMax }
        } } = event

        //onSearch(query, gameconsole, budget, priceMin, priceMax)

        try {
            findProducts(token, queryCompany, queryProduct, price, priceMin, priceMax, (error, products) => {

                if (error) return alert(error.message)

                setResults(products)


                setView('find-products')

            })
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <form onSubmit={handleSearchProducts}>
                <input type="text" name="queryCompany" placeholder="Info Company" />
                <input type="text" name="queryProduct" placeholder="Info Product" />
                <input type="text" name="price" placeholder="Introduce price" />
                <input type="text" name="priceMin" placeholder="priceMin" />
                <input type="text" name="priceMax" placeholder="priceMax" />
                <button>Search</button>
            </form>

            {results && results.length && <FindProducts results={results} />}
        </>
    );
}





/*









    //const { token } = sessionStorage

    //NO TOCAR ESTE MIERDÓN
    const handleDetailGame = id => {
        try {
            detailGame(id, (error, game) => {

                if (error) return alert(error.message)

                setResult(game)
                setResults(null)

            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>


        {!result && results && results.length && <FindGames results={results} onDetailGame={handleDetailGame} />}
        {!results && <div><img className="results__li__logo" src={logo} /></div>}
        {!results && result && <DetailGame result={result} />}
        </>
    );
} */
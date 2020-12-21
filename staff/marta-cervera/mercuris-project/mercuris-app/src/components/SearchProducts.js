import './SearchProducts.sass'
import FindProducts from './FindProducts'
import DetailProduct from './DetailProduct'
import { useState, useEffect } from 'react'
import { findProducts, retrieveProductDetail } from '../logic'
import logo from "../assets/images/logo1.jpg"
import {useHistory} from 'react-router-dom'

export default function ({ doGoToAccess }) {
    const [view, setView] = useState('find-products')
    const history = useHistory()
    const [results, setResults] = useState()
    const [result, setResult] = useState()
    const [criteria, setCriteria] = useState()

    const { token } = sessionStorage

    const handleFindProducts = event => { 
                 


        event.preventDefault()

        const { target: {
            queryProduct: { value: queryProduct },
            price: { value: price },
            priceMin: { value: priceMin },
            priceMax: { value: priceMax }
        } } = event

        

        //onSearch(queryCompany || undefined, queryProduct || undefined, price? Number(price) : undefined, priceMin? Number(priceMin) : undefined, priceMax? Number(priceMax) : undefined)
                
        if (event.target.queryCompany) {
            
            var queryCompany = event.target.queryCompany.value;}
        
                                                               
        try {
            
            findProducts(token, queryCompany, queryProduct, price, priceMin, priceMax, (error, results) => {

                if (error) return alert(error.message)

                setResults(results)
                setCriteria({ queryCompany, queryProduct, price, priceMin, priceMax})

            
                setView('find-products')

            })
        } catch (error) {
            alert(error.message)
        }
    }
  
    const handleDetailProduct = (id) => {
        try {            
            retrieveProductDetail(id, (error, result) => {
                if(error) return alert(error.message)
                
                setResult(result)
                
            })
            
        } catch (error) {
            alert(error.message)
        }
    }
    
    const handleRefreshResults = () => {
        const { queryCompany, queryProduct, price, priceMax, priceMin } = criteria;
  
        try {
            
            findProducts(token, queryCompany, queryProduct, price, priceMin, priceMax, (error, results) => {

                if (error) return alert(error.message)

                setResults(results)
                setView(null)
                setCriteria({ queryCompany, queryProduct, price, priceMin, priceMax});
                setResult(null)

            })
        } catch (error) {
            alert(error.message)
        }

        
    } 
    const handleGoToSearch =() => {
        setResult(null)
    }
    
    const handleGoToAccess =() => {
        history.push('/')
    } 
    
    return (
        <>
        {!token && <img className="search__logo" src={logo} onClick= {handleGoToAccess} className="gotoaccess"></img>}
        <main>
        <div className="search">        
        
        </div>
        <div className="searching">
                {!result && <form onSubmit={handleFindProducts} className="searching__form">                
                {!token && <input className="searching__form__input"type="text" name="queryCompany" placeholder="Info Company" />}
                <input className="searching__form__input"type="text" name="queryProduct" placeholder="Info Product" />
                <input className="searching__form__input"type="number" name="price" placeholder="Introduce price" />
                <input className="searching__form__input" type="number" name="priceMin" placeholder="priceMin" />
                <input className="searching__form__input"type="number" name="priceMax" placeholder="priceMax" />
                <button className="searching__form__btn">Search</button>
            </form>}
            {results && results.length >0 && !result && <FindProducts onSearch={handleFindProducts} results={results} onDetailProduct={handleDetailProduct}/>}
            {result && <DetailProduct result={result} doRefreshProducts={handleRefreshResults} doGoToSearch={handleGoToSearch} />}
        </div>
        </main>
        </>
    );
}






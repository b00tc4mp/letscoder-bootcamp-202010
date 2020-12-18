import './Home.scss'
import {useEffect, useState} from 'react'
import {retrieveUser} from '../logic'
import Discover from './Discover'
import Search from './Search'
import ResultList from './ResultList'
import {searchPictogram}from '../logic'


export default function({onSetUser,token,onGoToInitial}) {
    const [name, setName] = useState()
    const [likedPictograms, setLikedPictograms] = useState([])
    const [queryResults, setQueryResults] = useState()
    const [error, setError] = useState(null)
    
  function feedbackError(error) {
    setError(error)
    setTimeout(() => {
        setError(null)
    }, 6000) 
}

useEffect(() => { 
    const {token} = sessionStorage
    if (token) { try {
        retrieveUser(token, (error, user) => {
            if(error) return feedbackError(error.message)

            const {fullname, likes} = user

            setName(fullname)
            onSetUser(token)
            setLikedPictograms(likes)
        })
    }catch(error) {
        feedbackError(error.message)
    }}

}, [])

 const handleSearchPictogram = (query) => {
  try{
   searchPictogram(query, result => setQueryResults(result)) 
  }catch(error){
    feedbackError(error.message)
  }

 }
 

 return <section className = 'home'>
      <h1>Bienvenid@ {name}</h1>
      <Discover onGoToInitial = {onGoToInitial}/>
      <Search onSearchPictograms = {handleSearchPictogram} error = {error}/>
      {queryResults && <ResultList pictograms = {queryResults} likedPictograms = {likedPictograms} token = {token}/>}

 </section>
}
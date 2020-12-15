import './Home.scss'
import {useEffect, useState} from 'react'
import {retrieveUser} from '../logic'
import Discover from './Discover'
import Search from './Search'
import Slider from './Slider'
import ResultList from './ResultList'
import SearchPictogram from '../logic/search-pictogram'


export default function() {
    const [name, setName] = useState()
    const [likedPictograms, setLikedPictograms] = useState([])
    const [queryResults, setQueryResults] = useState()

useEffect(() => { 
    const {token} = sessionStorage
    if (token) { try {
        retrieveUser(token, (error, user) => {
            if(error) return alert(error.message)

            const {fullname, likes} = user

            setName(fullname)
            setLikedPictograms(likes)
        })
    }catch(error) {
        alert(error.message)
    }}

}, [])

 const handleSearchPictogram = (query) => {
  try{
   SearchPictogram(query, result => setQueryResults(result)) 
  }catch(error){
    alert(error.message)
  }

 }


 return <section className = 'home'>
      <h1>Hello, {name}</h1>
      <Discover/>
      <Search onSearchPictograms = {handleSearchPictogram}/>
      {queryResults && <ResultList pictograms = {queryResults} likedPictograms = {likedPictograms}/>}
      <Slider/>

 </section>
}
import { useEffect, useState } from 'react'
import retrieveFavouritePictogram from '../logic/retrieve-favourite-pictogram'
import './Profile.scss'
import Spinner from './Spinner'

const API_URL = process.env.REACT_APP_API_URL
export default function Profile () {
    const [favourites , setFavourite] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { token } = sessionStorage
   useEffect(() => {
    retrieveFavouritePictogram(token,(error, response)=>{
      if(error) return alert(error)
      setFavourite(response)
      setIsLoading(!isLoading)
    })
   },[]) 
    return   <section className = "profile">
    <h3>MIS PICTOGRAMAS FAVORITOS</h3>
    {isLoading ? <Spinner/> : favourites.length !== 0 ?
  

 favourites.map( ({_id, title, description}) => {
      return <article className="card">
      <div className="card-div">
        <img
          className="card-div__image"
           src= {`${API_URL}/pictograms/${_id}/images`} width = "600px" 
          height="120"
          alt="Api"
        />
      </div>
      <div className="card-body">
        <h4 className="card-body__title">
          {title}
        </h4>
        <p className="card-body__description">
        {description}
        </p>
      </div>
    </article>
    }):
  <h2>You dont have any favourite pictromas yet :/</h2> }
    
  </section>


}
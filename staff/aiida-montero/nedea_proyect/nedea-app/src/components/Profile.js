import { useEffect, useState } from 'react'
import retrieveFavouritePictogram from '../logic/retrieve-favourite-pictogram'
import './Profile.scss'

export default function Profile () {
    const [myFavourite , setMyFavourite] = useState()
    const { token } = sessionStorage;
   useEffect(() => {
     console.log("he pasado")
    retrieveFavouritePictogram(token,(error, response)=>{
      if(error) return alert(error)
      setMyFavourite(response)
      
    })
     
   },[]) 
    return   <section className = "profile">
    <h3>MIS PICTOGRAMAS FAVORITOS</h3>
    {myFavourite?
    myFavourite.map(favourite=>{
      return <article className="card">
      <div className="card-header">
        <img
          className="card-header__image"
          src="https://previews.123rf.com/images/rondale/rondale1507/rondale150700270/42792510-carta-de-vector-may%C3%BAscula-x-dibujado-a-mano-con-pincel-seco.jpg"
          height="120"
          alt="Api"
        />
      </div>
      <div className="card-body">
        <h4 className="card-body__title">
          {favourite.title}
        </h4>
        <p className="card-body__description">
        {favourite.description}
        </p>
      </div>
    </article>
    }):
    <h2>You dont have any favourite pictromas yet :/</h2>}
    
  </section>


}
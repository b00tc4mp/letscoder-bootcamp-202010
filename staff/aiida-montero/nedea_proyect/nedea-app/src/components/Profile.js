import { useEffect, useState } from 'react'
import retrieveFavouritePictogram from '../logic/retrieve-favourite-pictogram'
import './Profile.scss'
import Spinner from './Spinner'
import Feedback from './Feedback'
import Pictogram from './Pictogram'

const API_URL = process.env.REACT_APP_API_URL
export default function Profile() {
  const [favourites, setFavourite] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { token } = sessionStorage
  const [error, setError] = useState(null)
  useEffect(() => {
    retrieveFavouritePictogram(token, (error, response) => {
      if (error) return setError(error)
      setTimeout(() => {
        setError(null)
      }, 6000)
      setFavourite(response)
      setIsLoading(!isLoading)
    })
  }, [])

  const handleOnLikePictogram = ()=> {
    retrieveFavouritePictogram(token, (error, response) => {
      if (error) return setError(error)
      setTimeout(() => {
        setError(null)
      }, 6000)
      setFavourite(response)
    })
  }
  
  return <section className="profile">
    <h3>MIS PICTOGRAMAS FAVORITOS</h3>
    {error && <Feedback error={error} />}
    {isLoading ? <Spinner /> : favourites.length !== 0 ?

      favourites.map(({ _id, title, description }) => {
       return <Pictogram data = {{id : _id, title, description}} likedPictograms = {[_id]} onLikePictogram={handleOnLikePictogram}/>
      }) :
      <h2>You dont have any favourite pictromas yet :/</h2>}

  </section>


}
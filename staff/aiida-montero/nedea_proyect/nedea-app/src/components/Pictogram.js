import './Pictogram.scss'
import {useState} from 'react'
import {deletePictogram, toggleLikePictogram} from '../logic'

const API_URL = process.env.REACT_APP_API_URL
export default function ({likedPictograms = [], data:{id, title, description}, deleteOption}) {
  const [isActive, setActive] = useState(likedPictograms.includes(id)? true : false);
  const token = sessionStorage.token

  const handleLike = () => {
    setActive(!isActive);
    toggleLikePictogram (token, id , error => console.log(error))
  };

  const handleDelete = () => {
    console.log(id)
    console.log(token)
    deletePictogram (id, token, error => console.log(error))
  
  }
    return <article className="card">
          <div className="card-div">
            <img
              className="card-div__image"
              src={`${API_URL}/pictograms/${id}/images`} 
              
              alt="Api"
            />
          </div>
          <div className="card-body">

            {token && <button onClick = {handleLike} className = {isActive ? 'heart active': 'heart'} ></button>}
            {deleteOption && <button onClick  = {(event)  => {event.preventDefault() ; handleDelete()}}>BORRAR</button>}
            <h4 className="card-body__title">
              {title} 
            </h4>
            <p className="card-body__description">
             {description} 
            </p>
          </div>
        </article>
     


}

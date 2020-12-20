import './Pictogram.scss'
import {useEffect, useState} from 'react'
import {deletePictogram, toggleLikePictogram} from '../logic'

const API_URL = process.env.REACT_APP_API_URL
export default function ({likedPictograms = [], data:{id, title, description}, deleteOption, onDeletePictogram, onLikePictogram}) {
  const [isActive, setActive] = useState(false);
  const token = sessionStorage.token

  useEffect(()=> {
    debugger
    const liked = likedPictograms.includes(id) ? true : false

    setActive(liked)
  },[id])

  const handleLike = () => {
    setActive(!isActive);
    toggleLikePictogram (token, id , error =>{
      console.log(error)
      onLikePictogram()
    })
    
    /* window.location.reload(true) */
  };

  
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
            {deleteOption && <button className=  "deletebutton" onClick  = {(event)  => {event.preventDefault() ; onDeletePictogram(id)}}><img className=  "delete "  src = "https://icons555.com/images/icons-red/image_icon_trash_2_pic_512x512.png"/></button>}
            <h4 className="card-body__title">
              {title} 
            </h4>
            <p className="card-body__description">
             {description} 
            </p>
          </div>
        </article>
     


}

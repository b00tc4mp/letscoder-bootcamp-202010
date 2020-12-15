import './Pictogram.scss'
import {useState} from 'react'
import {toggleLikePictogram} from '../logic'

const API_URL = process.env.REACT_APP_API_URL
export default function ({likedPictograms = [], data:{id, title, description}}) {
  const [isActive, setActive] = useState(likedPictograms.includes(id)? true : false);
  const token = sessionStorage.token

  const handleLike = () => {
    setActive(!isActive);
    toggleLikePictogram (token, id , error => console.log(error))
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
            <h4 className="card-body__title">
              {title} 
            </h4>
            <p className="card-body__description">
             {description} 
            </p>
          </div>
        </article>
     


}

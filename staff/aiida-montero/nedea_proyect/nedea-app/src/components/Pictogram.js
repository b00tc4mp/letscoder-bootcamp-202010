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
          <header className="card-header">
            <img
              className="card-header__image"
              src={`${API_URL}/pictograms/${id}/images`} width = "600px"
              height="120"
              alt="Api"
            />
          </header>
          <div className="card-body">
            <button onClick = {handleLike} className = {isActive ? 'heart active': 'heart'} ></button>
            <h4 className="card-body__title">
              {title} 
            </h4>
            <p className="card-body__description">
             {description} 
            </p>
          </div>
        </article>
     


}

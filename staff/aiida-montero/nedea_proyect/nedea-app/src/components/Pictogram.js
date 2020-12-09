import './Pictogram.scss'
import {useState} from 'react'
const API_URL = process.env.REACT_APP_API_URL
export default function ({data:{id, title, description}}) {
  const [isActive, setActive] = useState(false);
  

  const toggleClass = () => {
    setActive(!isActive);
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
            <button onClick = {toggleClass} className = {isActive ? 'heart active': 'heart'} ></button>
            <h4 className="card-body__title">
              {title} 
            </h4>
            <p className="card-body__description">
             {description} 
            </p>
          </div>
        </article>
     


}

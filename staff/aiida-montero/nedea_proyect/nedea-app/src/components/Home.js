import './Home.scss'
import {useEffect, useState} from 'react'
import {retrieveUser} from '../logic'
export default function() {
    const [name, setName] = useState()
useEffect(() => { 
    const {token} = sessionStorage
    try {
        retrieveUser(token, (error, user) => {
            if(error) return alert(error.message)

            const {fullname} = user

            setName(fullname)
        })
    }catch(error) {
        alert(error.message)
    }

}, [])

    return <section className = "home">
        <h1>Hello, {name}</h1>
       <div class="discovere"> 
           <img className=" discovere__image" src="../imagenes/fondo_madera.jpg"></img>
      </div>
      
      <div className="search">
        <div className="search-content">
          <input
            type="text"
            className="search-content__input"
            placeholder="Encuentra tu pictograma"
          />
          <button type="submit" class="search-content__submit">
            <i className="search-content__icon fa fa-search"></i>
          </button>
        </div>
      </div>
  

       <div className="u-box">
    
        <h1> PICTOGRAMAS MAS FRECUENTES</h1>
        <div className="scrollable-carousel">
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
          <div className="scrollable-carousel__item">
            <img
              src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1707/alekseyvanin170700458/82556443-botella-con-icono-plana-de-agua-signo-de-vector-pictograma-colorido-aislado-en-blanco-s%C3%ADmbolo-de-bebid.jpg"
              alt=""
            />
          </div>
        </div>
      </div> 
     

    </section>
}
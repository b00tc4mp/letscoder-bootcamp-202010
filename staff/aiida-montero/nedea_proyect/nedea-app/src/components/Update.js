import "./Update.scss"
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import MyPictograms from "./MyPictograms";
import {searchPictogramsByUser} from '../logic'

export default function ({onSavePictogram,pictograms}) {
/*   const [pictograms, setPictograms] = useState([])
  useEffect(()=>{
    const { token } = sessionStorage;

    if (token) {
      

      searchPictogramsByUser(token, pictograms => {
          setPictograms(pictograms);
      });
  }

}, []); */

  
    const handleSubmit = event => {
       event.preventDefault()

       let {target : {
           title:{value:title},
           description : { value : description},
           image
           
        } } = event
     
        onSavePictogram(title, description, image.files[0])
    }
     

    return <section className="update-image"> 
    <h3>MIS PICTOGRAMAS</h3>
    <form onSubmit = {handleSubmit}className =  "update" > 
    <p class="login-text">
   
  </p>
  <input type="text" name= "title" class="login-title" placeholder=  "Title"/>
  <input type="text" name ="description" class="login-description" required="true" placeholder="Description" />
  <input type="file" id="image" name="image" />
  <button class="send-submit" >Sube tu pictograma</button>
  {/* <img className = "imagen_camara" src = "imagenes/love.png" />
     */}
    </form>
     <Link className = "link_profile" to = '/profile'>Mis pictogramas favoritos</Link>
     <MyPictograms myPictograms = {pictograms}/>
  
</section>


}
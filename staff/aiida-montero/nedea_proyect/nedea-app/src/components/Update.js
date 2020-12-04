import "./Update.scss"

export default function ({onSavePictogram}) {
    const handleSubmit = event => {
       event.preventDefault()

       let {target : {
           title:{value:title},
           description : { value : description}
           
        } } = event
     
        onSavePictogram(title, description)
    }
     
    

    return <section className="update-image"> 
    <form onSubmit = {handleSubmit}className =  "update" > 
    <p class="login-text">
    <span class="fas fa-camera fa-5x">

     
    </span>
  </p>
  <input type="text" name= "title" class="login-title" placeholder=  "Title"/>
  <input type="text" name ="description" class="login-description" required="true" placeholder="Description" />
  <button class="send-submit" >Update Pictogram</button>
  <img className = "imagen_camara" src = "imagenes/love.png" />
    
    </form>
</section>


}
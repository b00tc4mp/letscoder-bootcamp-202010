import "./Update.scss"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MyPictograms from "./MyPictograms";


export default function ({ onSavePictogram, pictograms,onDeletePictogram }) {

  const [showForm, setShowForm] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    let { target: {
      title: { value: title },
      description: { value: description },
      image

    } } = event

    onSavePictogram(title, description, image.files[0])
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }
  return <section className="update-image">
    <h1>MIS PICTOGRAMAS</h1>
    <Link className="link_profile" to='/profile'><button class ="form_favorite">Mis pictogramas favoritos</button></Link>
    {!showForm && <button className = "form_update" onClick = {handleShowForm}>Crea tu pictograma</button>}
    {showForm && <> <form onSubmit={handleSubmit} className="update" >
      <p class="login-text"></p>
      <input type="text" name="title" class="login-title" placeholder="Title" />
      <input type="text" name="description" class="login-description" required="true" placeholder="Description" />
      <input type="file" id="image" name="image" />
      <button class="send-submit" >Crea tu pictograma</button>
    </form>
    <button className = "form" onClick = {handleShowForm}>Ocultar formulario</button>
    </>}
    
    <MyPictograms myPictograms={pictograms} onDeletePictogram={onDeletePictogram} />


  </section>


}
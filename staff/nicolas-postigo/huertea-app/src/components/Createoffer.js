import React from 'react'
import './Createoffer.sass'
function Createoffer({ backHub, offername, titleoffer, onCreateoffer, price }) {
    return <sections>
        <form className="offer__form" onSubmit={function (event) {
            event.preventDefault()

            const { target: { offername: { value: offername }, titleoffer: { value: titleoffer }, price: { value: price }, pic } } = event


            onCreateoffer({offername, titleoffer, price, pic: pic.files[0]})
        }}>
            <button className="backhub" onclick={backHub}>&#128072;</button>

            <input type="text" name="titleoffer" placeholder="Título producto(s)" defaultValue={titleoffer} />
            <input type="text" name="offername" placeholder="Descripción de la oferta" defaultValue={offername} />
            <input type="text" name="price" placeholder="precio" defaultValue={price} />
            <input type="file" id= "pic" name="pic" />
            <label htmlFor="image"></label>
{/*             <input type="text" name="image" placeholder="imagen oferta" defaultValue={image} />
            <input type="url" name="location" placeholder="localización huerto" defaultValue={location} /> */}

            <button className="saveOffer">guardar oferta &#128077;</button>
        </form>
    </sections>
}
export default Createoffer
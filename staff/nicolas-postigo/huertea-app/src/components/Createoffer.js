import React from 'react'
import './Createoffer.sass'


function Createoffer({ backHub, offername, image, location, onCreateoffer }) {
    return <sections>


        <form className="offer__form" onSubmit={function (event) {
            event.preventDefault()

            const { target: { offername: { value: offername }, image: { value: image }, location: { value: location } } } = event

            onCreateoffer(offername, image, location)
        }}>
            <button className="backhub" onclick={backHub}>&#128072;</button>

            <input type="text" name="offername" placeholder="Título producto(s)" defaultValue={offername} />
            <input type="text" name="image" placeholder="imagen oferta" defaultValue={image} />
            <input type="url" name="location" placeholder="localización huerto" defaultValue={location} />

            <button className="saveOffer">guardar oferta &#128077;</button>
        </form>

    </sections>

}

export default Createoffer
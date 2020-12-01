import React from 'react'
import './Createoffer.sass'


function Createoffer({ backHub, offername, titleoffer, onCreateoffer }) {
    return <sections>


        <form className="offer__form" onSubmit={function (event) {
            event.preventDefault()

            const { target: { offername: { value: offername } ,  titleoffer: { value: titleoffer } } } = event

            onCreateoffer(offername, titleoffer)
        }}>
            <button className="backhub" onclick={backHub}>&#128072;</button>

            <input type="text" name="titleoffer" placeholder="Título producto(s)" defaultValue={titleoffer} />
            <input type="text" name="offername" placeholder="Descripción de la oferta" defaultValue={offername} />
{/*             <input type="text" name="image" placeholder="imagen oferta" defaultValue={image} />
            <input type="url" name="location" placeholder="localización huerto" defaultValue={location} /> */}

            <button className="saveOffer">guardar oferta &#128077;</button>
        </form>

    </sections>

}

export default Createoffer
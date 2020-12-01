import React from 'react'
import './Createoffer.sass'


function Createoffer({ backHub, offername, onCreateoffer }) {
    return <sections>


        <form className="offer__form" onSubmit={function (event) {
            event.preventDefault()

            const { target: { offername: { value: offername } } } = event

            onCreateoffer(offername)
        }}>
            <button className="backhub" onclick={backHub}>&#128072;</button>

            <input type="text" name="offername" placeholder="Título producto(s)" defaultValue={offername} />
{/*             <input type="text" name="image" placeholder="imagen oferta" defaultValue={image} />
            <input type="url" name="location" placeholder="localización huerto" defaultValue={location} /> */}

            <button className="saveOffer">guardar oferta &#128077;</button>
        </form>

    </sections>

}

export default Createoffer
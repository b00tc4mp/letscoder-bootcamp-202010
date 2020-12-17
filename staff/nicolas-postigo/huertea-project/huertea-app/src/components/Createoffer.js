import React from 'react'
import './Createoffer.sass'
function Createoffer({ offername, titleoffer, onCreateoffer, price, offeraddress, phonecontact, emailcontact, onGoHub }) {
    return <sections>
        <div>
            <button onClick={onGoHub} className="log-out-button">🔙</button>
        </div>
        <form className="offer__form" onSubmit={function (event) {
            event.preventDefault()

            const { target: { offername: { value: offername }, titleoffer: { value: titleoffer }, price: { value: price }, offeraddress: { value: offeraddress }, phonecontact: { value: phonecontact }, emailcontact: { value: emailcontact }, pic } } = event


            onCreateoffer({ offername, titleoffer, price, pic: pic.files[0], offeraddress, phonecontact, emailcontact })
        }}>
            {/* <button className="backhub" onclick={backHub}>&#128072;</button> */}

            <input type="text" name="titleoffer" placeholder="Título producto(s)" defaultValue={titleoffer} />
            <input type="text" name="offername" placeholder="Descripción de la oferta" defaultValue={offername} />
            <input type="text" name="offeraddress" placeholder="Dirección de huerta" defaultValue={offeraddress} />
            <input type="text" name="phonecontact" placeholder="Número de contacto" defaultValue={phonecontact} />
            <input type="text" name="emailcontact" placeholder="Email contacto" defaultValue={emailcontact} />
            <input type="text" name="price" placeholder="precio" defaultValue={price} />
            <input type="file" id="pic" name="pic" />
            <label htmlFor="image"></label>
            {/*             <input type="text" name="image" placeholder="imagen oferta" defaultValue={image} />
            <input type="url" name="location" placeholder="localización huerto" defaultValue={location} /> */}

            <button className="saveOffer">guardar oferta &#128077;</button>
        </form>
    </sections>
}
export default Createoffer
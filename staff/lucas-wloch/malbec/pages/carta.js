import { Footer, Layout, ShowProduct, Feedback } from '../components'
import '../components/Carta.sass'
// import { retrieveProducts } from '../api/logic'
import { useEffect, useState } from 'react'
import { findMenu } from '../logic'


const Carta = () => {
    const [menu, setMenu] = useState()
    const [error, setError] = useState()
    const [detail, setDetail] = useState()


    const API_URL = process.env.NEXT_APP_API_URL

    useEffect(() => {

        Promise.all([findMenu()
            .then(menu => {
                console.dir(menu)
                setMenu(menu)
            })
            .catch(error => setError(error))
            // .then(() => { debugger })
        ])

    }, [])

    return <><Layout>

        <div className="carta">
            <h2 className="carta__title">Nuestra Carta</h2>
            {error && <Feedback error={error} onExit={setError()} />}
            {detail && <ShowProduct product={detail} onExit={() => setDetail()} />}
            {menu && <div className="carta__container">
                <div className="carta__references">
                    <div className="carta__reference">
                        <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                        <p> Gluten Free </p>
                    </div>
                    <div className="carta__reference">
                        <img className="carta__vegan" src="/images/100-vegan.png" height="20px" />
                        <p> Vegan </p>
                    </div>
                </div>
                <h2 className="carta__h2">Entrantes</h2>
                {/* <h3 className="carta__h3">Parrilla</h3> */}
                <ul className="carta__ul">
                    {menu.entrantes.parrilla.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
                {/* <h3 className="carta__h3">Empanadas</h3> */}
                <ul className="carta__ul">
                    {menu.entrantes.empanadas.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
                {/* <h3 className="carta__h3">Ensaladas</h3> */}
                <ul className="carta__ul">
                    {menu.entrantes.ensaladas.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}

                </ul>
                {/* Principales */}
                <h2 className="carta__h2">Principales</h2>
                {/* <h3 className="carta__h3">Parrilla</h3> */}
                <ul className="carta__ul">
                    {menu.principales.parrilla.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
                {/* <h3 className="carta__h3">Pescados</h3> */}
                <ul className="carta__ul">
                    {menu.principales.pescados.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
                {/* <h3 className="carta__h3">Otras Sugerencias</h3> */}
                <ul className="carta__ul">
                    {menu.principales.otrasSugerencias.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}

                </ul>
                {/* Bebidas */}
                <h2 className="carta__h2">Bebidas</h2>
                <h3 className="carta__h3">Aguas y Refrescos</h3>
                <ul className="carta__ul">
                    {menu.bebidas.aguasRefrescos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
                <h3 className="carta__h3">Vinos</h3>
                <ul className="carta__ul">
                    {menu.bebidas.vinos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
                <h3 className="carta__h3">Cervezas</h3>
                <ul className="carta__ul">
                    {menu.bebidas.cervezas.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}

                </ul>
                <h3 className="carta__h3">Tragos</h3>
                <ul className="carta__ul">
                    {menu.bebidas.tragos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}

                </ul>
                {/* Postres */}
                <h2 className="carta__h2">Postres</h2>
                <ul className="carta__ul">
                    {menu.postres.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) =>
                        <li onClick={() => setDetail({ id, name, description, price, glutenFree, vegan, alergenos, category, available })} className="carta__li" key={id}>
                            <h4 className="carta__name">{name}</h4>
                            <div className="carta__div" >
                                <p className="carta__price">{price}€</p>
                                {glutenFree ? <div className="carta__glutenFree">
                                    <img className="carta__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                                    {/* <p> Gluten Free </p> */}
                                </div> : ''}
                                {vegan ? <img className="carta__vegan" src="/images/100-vegan.png" height="20px" /> : ''}
                            </div>
                            {alergenos && alergenos.length ? <p className="carta__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
                            {available ? '' : <p>not available</p>}
                        </li>)}
                </ul>
            </div>}
        </div>
    </Layout>
        <footer className="cartaFooter">
            <div className="cartaFooter__contact">
                {/* <a className="cartaFooter__p" href="mailto:reservas@malbecasadorargentino.es"><p className="cartaFooter__p">reservas@malbecasadorargentino.es</p></a>
                <a className="cartaFooter__p" href="tel:+34 622706676"><p className="cartaFooter__p">reservas: 622706676</p></a> */}
                <p className="cartaFooter__p">Carretera de Sant Cugat 63, Rubí, España</p>
                <p className="cartaFooter__p">Horarios:  Lunes a Domingo</p>
                <p className="cartaFooter__p"> de 10hs a 14hs y de 16hs a 21hs</p>
            </div>
            <div className="cartaFooter__social">
                <a className="cartaFooter__ig" href="https://www.instagram.com/malbecasadorargentino/">
                    <span className="screen-reader-text">Instagram</span>
                    <svg className="svgicon social-icon-instagram" aria-hidden="true" role="img">
                        <use href="#social-icon-instagram" xlinkHref="#social-icon-instagram">
                            #shadow-root (closed)
                    <svg id="social-icon-instagram" viewBox="0 0 27 32">
                                <path d="M18.286 16q0-1.893-1.339-3.232t-3.232-1.339-3.232 1.339-1.339 3.232 1.339 3.232 3.232 1.339 3.232-1.339 1.339-3.232zM20.75 16q0 2.929-2.054 4.982t-4.982 2.054-4.982-2.054-2.054-4.982 2.054-4.982 4.982-2.054 4.982 2.054 2.054 4.982zM22.679 8.679q0 0.679-0.482 1.161t-1.161 0.482-1.161-0.482-0.482-1.161 0.482-1.161 1.161-0.482 1.161 0.482 0.482 1.161zM13.714 4.75q-0.125 0-1.366-0.009t-1.884 0-1.723 0.054-1.839 0.179-1.277 0.33q-0.893 0.357-1.571 1.036t-1.036 1.571q-0.196 0.518-0.33 1.277t-0.179 1.839-0.054 1.723 0 1.884 0.009 1.366-0.009 1.366 0 1.884 0.054 1.723 0.179 1.839 0.33 1.277q0.357 0.893 1.036 1.571t1.571 1.036q0.518 0.196 1.277 0.33t1.839 0.179 1.723 0.054 1.884 0 1.366-0.009 1.366 0.009 1.884 0 1.723-0.054 1.839-0.179 1.277-0.33q0.893-0.357 1.571-1.036t1.036-1.571q0.196-0.518 0.33-1.277t0.179-1.839 0.054-1.723 0-1.884-0.009-1.366 0.009-1.366 0-1.884-0.054-1.723-0.179-1.839-0.33-1.277q-0.357-0.893-1.036-1.571t-1.571-1.036q-0.518-0.196-1.277-0.33t-1.839-0.179-1.723-0.054-1.884 0-1.366 0.009zM27.429 16q0 4.089-0.089 5.661-0.179 3.714-2.214 5.75t-5.75 2.214q-1.571 0.089-5.661 0.089t-5.661-0.089q-3.714-0.179-5.75-2.214t-2.214-5.75q-0.089-1.571-0.089-5.661t0.089-5.661q0.179-3.714 2.214-5.75t5.75-2.214q1.571-0.089 5.661-0.089t5.661 0.089q3.714 0.179 5.75 2.214t2.214 5.75q0.089 1.571 0.089 5.661z"></path>
                            </svg>
                        </use>
                    </svg>
                </a>
            </div>
        </footer>
    </>
}


export default Carta
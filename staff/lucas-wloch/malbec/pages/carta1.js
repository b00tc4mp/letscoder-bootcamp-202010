import { Footer, Layout } from '../components'
import '../components/Carta1.sass'
// import { retrieveProducts } from '../api/logic'
import { useEffect, useState } from 'react'
import { findMenu } from '../logic'


const Carta = () => {
    const [menu, setMenu] = useState()
    const [error, setError] = useState()


    const API_URL = process.env.NEXT_APP_API_URL

    useEffect(() => {

        findMenu().then(menu => setMenu(menu))
            .catch(error => setError(error))

    }, [])

    return <><Layout>

        <div className="carta1">
            <h2 className="carta1__title">Nuestra Carta</h2>
            {error && <Feedback error={error} onExit={setError()}/>}
            {menu && <div className="carta1__container">
                <h2 className="carta1__h2">Entrantes</h2>
                {/* <h3 className="carta1__h3">Parrilla</h3> */}
                <ul className="carta1__ul">
                    {menu.entrantes.parrilla.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                {/* <h3 className="carta1__h3">Empanadas</h3> */}
                <ul className="carta1__ul">
                    {menu.entrantes.empanadas.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                {/* <h3 className="carta1__h3">Ensaladas</h3> */}
                <ul className="carta1__ul">
                    {menu.entrantes.ensaladas.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                {/* Principales */}
                <h2 className="carta1__h2">Principales</h2>
                {/* <h3 className="carta1__h3">Parrilla</h3> */}
                <ul className="carta1__ul">
                    {menu.principales.parrilla.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                {/* <h3 className="carta1__h3">Pescados</h3> */}
                <ul className="carta1__ul">
                    {menu.principales.pescados.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                {/* <h3 className="carta1__h3">Otras Sugerencias</h3> */}
                <ul className="carta1__ul">
                    {menu.principales.otrasSugerencias.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                {/* Bebidas */}
                <h2 className="carta1__h2">Bebidas</h2>
                <h3 className="carta1__h3">Aguas y Refrescos</h3>
                <ul className="carta1__ul">
                    {menu.bebidas.aguasRefrescos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta1__h3">Vinos</h3>
                <ul className="carta1__ul">
                    {menu.bebidas.vinos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta1__h3">Cervezas</h3>
                <ul className="carta1__ul">
                    {menu.bebidas.cervezas.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                <h3 className="carta1__h3">Tragos</h3>
                <ul className="carta1__ul">
                    {menu.bebidas.tragos.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                {/* Postres */}
                <h2 className="carta1__h2">Postres</h2>
                <ul className="carta1__ul">
                    {menu.postres.map(({ _id: id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta1__li" key={id}>
                        <img className="carta1__image" src={`${API_URL}/products/${id.toString()}/images`} />
                        <h4 className="carta1__name">{name}</h4>
                        <p className="carta1__description">{description}</p>
                        <div className="carta1__div" >
                            {glutenFree ? <div className="carta1__glutenFree">
                                <img className="carta1__glutenFree--img" src="/images/gluten-free.jpg" height="20px" />
                                <p> Gluten Free </p>
                            </div> : ''}
                            {vegan ? <img className="carta1__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : ''}
                            <p className="carta1__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta1__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
            </div>}
        </div>
    </Layout>
    <footer className="carta1Footer">
    <div className="carta1Footer__contact">
        {/* <a className="carta1Footer__p" href="mailto:reservas@malbecasadorargentino.es"><p className="carta1Footer__p">reservas@malbecasadorargentino.es</p></a>
        <a className="carta1Footer__p" href="tel:+34 622706676"><p className="carta1Footer__p">reservas: 622706676</p></a> */}
        <p className="carta1Footer__p">Carretera de Sant Cugat 63, Rubí, España</p>
        <p className="carta1Footer__p">Horarios:  Lunes a Domingo</p>
        <p className="carta1Footer__p"> de 10hs a 14hs y de 16hs a 21hs</p>
    </div>
    <div className="carta1Footer__social">
        <a className="carta1Footer__ig" href="https://www.instagram.com/malbecasadorargentino/">
        <span className="screen-reader-text">Instagram</span>
        <svg className="svgicon social-icon-instagram" aria-hidden="true" role="img">
            <use href="#social-icon-instagram" xlinkHref="#social-icon-instagram">
                #shadow-root (closed)
                    <svg id="social-icon-instagram"  viewBox="0 0 27 32">
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
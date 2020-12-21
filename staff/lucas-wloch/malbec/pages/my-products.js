import { EditProduct, SaveProducts, Layout, Feedback, Footer } from '../components'
import '../components/MyProducts.sass'
import { useEffect, useState } from 'react'
import { retrieveUser, retrieveProductCategory, saveMenu } from '../logic'

import { useRouter } from 'next/router'

const MyProducts = () => {
    const router = useRouter()
    const [error, setError] = useState()
    var winX, winY
    function enableWindowScroll() {
        winX = null;
        winY = null;
    };
    useEffect(() => {
        const { token } = sessionStorage
        if (token)
            Promise.all([retrieveUser(token)
                .then(user => setUser(user))
                .catch(error => setError(error))
            ])

        if (!token) return router.push('/')

        enableWindowScroll()
    }, [])
    const [parrilla, setProductsParrilla] = useState()
    const [pescados, setProductsPescados] = useState()
    const [empanadas, setProductsEmpanadas] = useState()
    const [ensaladas, setProductsEnsaladas] = useState()
    const [entrantesParrilla, setProductsEntrantesParrilla] = useState()
    const [acompañamientosGuarniciones, setProductsAcompañamientosGuarniciones] = useState()
    const [otrasSugerencias, setProductsOtrasSugerencias] = useState()
    const [postres, setProductsPostres] = useState()
    const [aguasRefrescos, setProductsAguasRefrescos] = useState()
    const [vinos, setProductsVinos] = useState()
    const [cervezas, setProductsCervezas] = useState()
    const [tragos, setProductsTragos] = useState()


    const [add, setAdd] = useState()
    const [savedMenu, setSavedMenu] = useState()

    const toggleView = (event) => {
        const { target } = event

        if (!target.classList.contains("active"))
            switch (target.name) {
                case "parrilla":
                    try {
                        retrieveProductCategory("parrilla")
                            .then(results => setProductsParrilla(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "pescados":
                    try {
                        retrieveProductCategory("pescados")
                            .then(results => setProductsPescados(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "empanadas":
                    try {
                        retrieveProductCategory("empanadas")
                            .then(results => setProductsEmpanadas(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "ensaladas":
                    try {
                        retrieveProductCategory("ensaladas")
                            .then(results => setProductsEnsaladas(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "entrantes-parrilla":
                    try {
                        retrieveProductCategory("entrantes-parrilla")
                            .then(results => setProductsEntrantesParrilla(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "acompañamientos-guarniciones":
                    try {
                        retrieveProductCategory("acompañamientos-guarniciones")
                            .then(results => setProductsAcompañamientosGuarniciones(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "otras-sugerencias":
                    try {
                        retrieveProductCategory("otras-sugerencias")
                            .then(results => setProductsOtrasSugerencias(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "postres":
                    try {
                        retrieveProductCategory("postres")
                            .then(results => setProductsPostres(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "aguas-refrescos":
                    try {
                        retrieveProductCategory("aguas-refrescos")
                            .then(results => setProductsAguasRefrescos(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "vinos":
                    try {
                        retrieveProductCategory("vinos")
                            .then(results => setProductsVinos(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "cervezas":
                    try {
                        retrieveProductCategory("cervezas")
                            .then(results => setProductsCervezas(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;
                case "tragos":
                    try {
                        retrieveProductCategory("tragos")
                            .then(results => setProductsTragos(results))
                            .catch(error => setError(error))
                    } catch (error) {
                        setError(error)
                    }
                    break;

            }


        target.classList.toggle("active")

        var panel = target.nextElementSibling

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    const handleAdd = (event) => {
        const category = event.target.parentElement.parentElement.previousElementSibling.name

        setAdd(category)
    }

    const handleSaveMenu = () => {
        const { token } = sessionStorage
        try {
            saveMenu(token)
                .then((menuId) => setSavedMenu(menuId))
                .catch(error => setError(error))
        } catch (error) {
            setError(error)
        }
    }

    return <><Layout>
        {error && <Feedback error={error} onExit={setError()} />}

        <section className="myProducts" >
            <h3 className="myProducts__h3">My Products</h3>
            {savedMenu && <h3 className="myProducts__h3">Ok Menu Saved !</h3>}
            {savedMenu || <button className="myProducts__saveMenu" onClick={() => handleSaveMenu()}>Save Menu</button>}
            {error && <Feedback error={error} onExit={setError()} />}

            <button className="myProducts__acordion" onClick={toggleView} name="parrilla">Parrilla</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {parrilla && parrilla.length > 0 && parrilla.map(product => <EditProduct product={product} />)}
                    {/* <AddOrRemove/> */}
                    {/* <div className="myProducts__addOrRemove"> */}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}

                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="pescados">Pescados</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {pescados && pescados.length > 0 && pescados.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="empanadas" >Empanadas</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {empanadas && empanadas.length > 0 && empanadas.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="ensaladas">Ensaladas</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {ensaladas && ensaladas.length > 0 && ensaladas.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>
            {error && <Feedback error={error} onExit={setError()} />}

            <button className="myProducts__acordion" onClick={toggleView} name="entrantes-parrilla">Entrantes Parrilla</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {entrantesParrilla && entrantesParrilla.length > 0 && entrantesParrilla.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="acompañamientos-guarniciones">Acompañamientos y Guarniciones</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {acompañamientosGuarniciones && acompañamientosGuarniciones.length > 0 && acompañamientosGuarniciones.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="otras-sugerencias">Otras Sugerencias</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {otrasSugerencias && otrasSugerencias.length > 0 && otrasSugerencias.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="postres">Postres</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {postres && postres.length > 0 && postres.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>
            {error && <Feedback error={error} onExit={setError()} />}

            <button className="myProducts__acordion" onClick={toggleView} name="aguas-refrescos"> Aguas y Refrescos</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {aguasRefrescos && aguasRefrescos.length > 0 && aguasRefrescos.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="vinos">Vinos</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {vinos && vinos.length > 0 && vinos.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>



            {/* <button className="myProducts__acordion" onClick={toggleView} name="vinos">Vinos</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {vinos && vinos.length > 0 && vinos.map(({ name, description, category, price }) => <li className="myProducts__li">
                        <h4 className="myProducts__h4">{name}</h4>
                        <p className="myProducts__p">{category}</p>
                        <p className="myProducts__p">{description}</p>
                        <span className="myProducts__price">{price}€</span>
                    </li>)}
                </ul>
            </div> */}

            <button className="myProducts__acordion" onClick={toggleView} name="cervezas">Cervezas</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {cervezas && cervezas.length > 0 && cervezas.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>

            <button className="myProducts__acordion" onClick={toggleView} name="tragos">Tragos</button>
            <div className="myProducts__panel">
                <ul className="myProducts__ul">
                    {tragos && tragos.length > 0 && tragos.map(product => <EditProduct product={product} />)}
                    <button className="myProducts__add" onClick={handleAdd} >Add</button>
                    {add && <SaveProducts category={add} onExit={() => setAdd()} />}
                </ul>
            </div>
            {error && <Feedback error={error} onExit={setError()} />}

        </section>


    </Layout>
        <footer className="myProductsFooter">
            <div className="myProductsFooter__contact">
                {/* <a className="myProductsFooter__p" href="mailto:reservas@malbecasadorargentino.es"><p className="myProductsFooter__p">reservas@malbecasadorargentino.es</p></a>
        <a className="myProductsFooter__p" href="tel:+34 622706676"><p className="myProductsFooter__p">reservas: 622706676</p></a> */}
                <p className="myProductsFooter__p">Carretera de Sant Cugat 63, Rubí, España</p>
                <p className="myProductsFooter__p">Horarios:  Lunes a Domingo</p>
                <p className="myProductsFooter__p"> de 10hs a 14hs y de 16hs a 21hs</p>
            </div>
            <div className="myProductsFooter__social">
                <a className="myProductsFooter__ig" href="https://www.instagram.com/malbecasadorargentino/">
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


export default MyProducts
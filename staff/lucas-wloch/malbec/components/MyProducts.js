import './MyProducts.sass'
import { useState, useEffect } from 'react'
import { retrieveProductCategory, saveMenu } from '../logic'
import { EditProduct, Feedback, SaveProducts } from '.'

function MyProducts() {
    // const [products, setProducts] = useState()
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

    const [error, setError] = useState()

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
            return Promise.all([
                saveMenu(token)
                    .then(() => setSavedMenu(true))
                    .catch(error => setError(error))
            ])
        } catch (error) {
            setError(error)
        }
    }

    return <>
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

    </>

}

export default MyProducts


import { Layout } from '../components'
import '../components/Carta.sass'
// import { retrieveProducts } from '../api/logic'
import { useEffect, useState } from 'react'
import { findMenu } from '../logic'


const Carta = () => {
    const [menu, setMenu] = useState()

    useEffect(() => {

        findMenu().then(menu => setMenu(menu))

    }, [])

    return <Layout>
        <div className="carta">
            <h2 className="carta__title">Nuestra Carta</h2>
            {menu && <div className="carta__container">
                <h2 className="carta__h2">Entrantes</h2>
                <h3 className="carta__h3">Parrilla</h3>
                <ul className="carta__ul">
                    {menu.entrantes.parrilla.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px" /> : '' }
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta__h3">Empanadas</h3>
                <ul className="carta__ul">
                    {menu.entrantes.empanadas.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta__h3">Ensaladas</h3>
                <ul className="carta__ul">
                    {menu.entrantes.ensaladas.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                {/* Principales */}
                <h2 className="carta__h2">Principales</h2>
                <h3 className="carta__h3">Parrilla</h3>
                <ul className="carta__ul">
                    {menu.principales.parrilla.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta__h3">Pescados</h3>
                <ul className="carta__ul">
                    {menu.principales.pescados.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta__h3">Otras Sugerencias</h3>
                <ul className="carta__ul">
                    {menu.principales.otrasSugerencias.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                {/* Bebidas */}
                <h2 className="carta__h2">Bebidas</h2>
                <h3 className="carta__h3">Aguas y Refrescos</h3>
                <ul className="carta__ul">
                    {menu.bebidas.aguasRefrescos.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta__h3">Vinos</h3>
                <ul className="carta__ul">
                    {menu.bebidas.vinos.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
                <h3 className="carta__h3">Cervezas</h3>
                <ul className="carta__ul">
                    {menu.bebidas.cervezas.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                <h3 className="carta__h3">Tragos</h3>
                <ul className="carta__ul">
                    {menu.bebidas.tragos.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}

                </ul>
                {/* Postres */}
                <h2 className="carta__h2">Postres</h2>
                <ul className="carta__ul">
                    {menu.postres.map(({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                        <h4 className="carta__name">{name}</h4>
                        <p className="carta__description">{description}</p>
                        <div className="carta__div" >
                            {glutenFree ? <div className="carta__glutenFree"> 
                            <img className="carta__glutenFree--img"  src="/images/gluten-free.jpg" height="20px" /> 
                            <p> Gluten Free </p> 
                            </div> : ''}
                            {vegan ? <img className="carta__vegan" src="/images/vegan-friendly-icon.png" height="20px"/> : ''}
                            <p className="carta__price">{price}€</p>
                        </div>
                        {alergenos ? <p className="carta__alergenos">{alergenos}</p> : ''}
                        {available ? '' : <p>not available</p>}
                    </li>)}
                </ul>
            </div>}
        </div>
    </Layout>
}




// const [carta, setCarta] = useState([])

//     useEffect(() => {

//         Promise.all([
//             retrieveProductCategory('parrilla')
//                 .then(products => {
//                     products.splice(0, 0, 'Parrilla')
//                     return products
//                 }).catch(alert)
//             ,
//             retrieveProductCategory('empanadas')
//                 .then(products => {
//                     products.splice(0, 0, 'Empanadas')
//                     return products
//                 }).catch(alert)
//         ]).then(carta => {
//             setCarta(carta)
//         }).catch(alert)

//     }, [])



{/* useEffect(() => {
        var platosPrincipales = ["5fd086f66cf72549d007e495", "5fd09854e85f215b78c5bae4"]
        var platosSecundarios = ["5fd086f66cf72549d007e495", "5fd09854e85f215b78c5bae4"]
        var cartaTitles_ = ["Platos Principales", "Empanadas"]
        var cartaProductIds = [platosPrincipales, platosSecundarios]
    
        var cartaProducts_ = []
        cartaProductIds.forEach(arr => {
            var section = []
            arr.map(id => {
                retrieveProductById(id)
                    .then(product => section.push(product))
                    .catch(alert)
            })
            cartaProducts_.push(section)
        })
        setCartaTitles(cartaTitles_)
        setCartaProducts(cartaProducts_)
    
        //map en vez de forEach ,  promise all 
    }, []) */}
{/* <div className="carta__item carta__item--1">
                    <div className="carta__description">
                    <h4 className="carta__h4">hamburguesa de salmon</h4>
                    </div>
                    <img className="carta__img carta__img--1" src="/images/hamburguesa-de-salmon-960x540.jpg" />
                    <Image className="carta__img-1" src="/images/hamburguesa-de-salmon-960x540.jpg" width="180px" height="100px" />
                    <Image className="carta__img carta__img--1" src="/images/hamburguesa-de-salmon-960x540.jpg" layout="fill"/>
                    </div>
                    <div className="carta__item carta__item--2">
                    <div className="carta__description">
                    <h4 className="carta__h4">hamburguesa-huevo</h4>
                    </div>
                    <img className="carta__img carta__img--2" src="/images/hamburguesa-huevo-960x540.jpg" />
                    </div>
                    <div className="carta__item carta__item--3">
                    <div className="carta__description">
                    <h4 className="carta__h4">hamburguesa tofu</h4>
                    </div>
                    <img className="carta__img carta__img--3" src="/images/hamburguesa-tofu-960x540.jpg" />
                    </div>
                    <div className="carta__item carta__item--4">
                    <div className="carta__description">
                    <h4 className="carta__h4">mini pizzas salchichon</h4>
                    </div>
                    <img className="carta__img carta__img--4" src="/images/minipizzassalchichon.jpg"  />
                    </div>
                <div className="carta__item carta__item--5">
                <div className="carta__description">
                <h4 className="carta__h4">pizza margarita</h4>
                </div>
                <img className="carta__img carta__img--5" src="/images/pizza-margarita-960x540.jpg" />
                </div>
                <div className="carta__item carta__item--6">
                    <div className="carta__description">
                        <h4 className="carta__h4">tortitas</h4>
                    </div>
                    <img className="carta__img carta__img--6" src="/images/tortitas.jpg" />
                </div>
                <div className="carta__item carta__item--7">
                    <div className="carta__description">
                        <h4 className="carta__h4">wok de verduras </h4>
                    </div>
                    <img className="carta__img carta__img--7" src="/images/wokverduras.jpg"  />
                </div> */}
// return <Layout>
//     <div className="carta">
//         <h2 className="carta__title">Nuestra Carta</h2>
//         <div className="carta__container">
//             <div className="carta__item carta__item--1">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">hamburguesa de salmon</h4>
//                 </div>
//                 <img className="carta__img carta__img--1" src="/images/hamburguesa-de-salmon-960x540.jpg" />
//                 {/* <Image className="carta__img-1" src="/images/hamburguesa-de-salmon-960x540.jpg" width="180px" height="100px" /> */}
//                 {/* <Image className="carta__img carta__img--1" src="/images/hamburguesa-de-salmon-960x540.jpg" layout="fill"/> */}
//             </div>
//             <div className="carta__item carta__item--2">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">hamburguesa-huevo</h4>
//                 </div>
//                 <img className="carta__img carta__img--2" src="/images/hamburguesa-huevo-960x540.jpg" />
//             </div>
//             <div className="carta__item carta__item--3">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">hamburguesa tofu</h4>
//                 </div>
//                 <img className="carta__img carta__img--3" src="/images/hamburguesa-tofu-960x540.jpg" />
//             </div>
//             <div className="carta__item carta__item--4">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">mini pizzas salchichon</h4>
//                 </div>
//                 <img className="carta__img carta__img--4" src="/images/minipizzassalchichon.jpg"  />
//             </div>
//             <div className="carta__item carta__item--5">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">pizza margarita</h4>
//                 </div>
//                 <img className="carta__img carta__img--5" src="/images/pizza-margarita-960x540.jpg" />
//             </div>
//             <div className="carta__item carta__item--6">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">tortitas</h4>
//                 </div>
//                 <img className="carta__img carta__img--6" src="/images/tortitas.jpg" />
//             </div>
//             <div className="carta__item carta__item--7">
//                 <div className="carta__description">
//                     <h4 className="carta__h4">wok de verduras </h4>
//                 </div>
//                 <img className="carta__img carta__img--7" src="/images/wokverduras.jpg"  />
//             </div>
//         </div>
//     </div>
// </Layout>

export default Carta
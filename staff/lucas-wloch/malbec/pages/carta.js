import { Layout, CartaProduct } from '../components'
import '../components/Carta.sass'
import Image from 'next/image'
// import { retrieveProducts } from '../api/logic'
import { useEffect, useState } from 'react'
import { retrieveProductById } from '../logic'


const Carta = () => {
    const [cartaProducts, setCartaProducts] = useState()
    const [cartaTitles, setCartaTitles] = useState()
    // carta = {
    //     'Platos-Principales': ["5fd086f66cf72549d007e495","5fd09854e85f215b78c5bae4"]
    // }

    useEffect(() => {
        var ProductIds = ["5fd086f66cf72549d007e495", "5fd09854e85f215b78c5bae4", "5fd086f66cf72549d007e495", "5fd09854e85f215b78c5bae4"]

        const retrievals = ProductIds.map(id => retrieveProductById(id))

        Promise.all(retrievals)
            .then(products => setCartaProducts(products))
            .catch(alert)
    }, [])

    return <Layout>
        <div className="carta">
            <h2 className="carta__title">Nuestra Carta</h2>
            <div className="carta__container">
                <style jsx>{`
                    background-color: white;
                `}
                </style>
                <button onClick={() => { debugger }}>hola</button>
                {cartaProducts && cartaProducts.length > 0 && <ul className="carta__ul">
                {/* <ul> */}
                    {cartaProducts.map(
                        ({ id, name, description, price, glutenFree, vegan, alergenos, category, available }) => <li className="carta__li" key={id}>
                            <h4 className="carta__name">{name}hola</h4>
                            <p className="carta__description">{description}</p>
                            <p className="carta__price">{price}</p>
                            <p className="carta__glutenFree">{glutenFree? "glutenFree" : "not glutenFree"}</p>
                            <p className="carta__vegan">{vegan? "vegan" : "not vegan"}</p>
                            <p className="carta__alergenos">{alergenos}</p>
                            <p className="carta__category">{category}</p>
                            <p className="carta__available">{available? "available" : "not available"}</p>
                        </li>)}
                {/* </ul> */}
                </ul>}
            </div>
        </div>
    </Layout>
}


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
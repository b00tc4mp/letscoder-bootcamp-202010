import { Layout } from '../components'
import '../components/Carta.sass'
import Image from 'next/image'

const Carta = () =>
    <Layout>
        <div className="carta">
            <h2 className="carta__title">Nuestra Carta</h2>
            <div className="carta__container">
                <div className="carta__item carta__item--1">
                    <div className="carta__description">
                        <h4 className="carta__h4">hamburguesa de salmon</h4>
                    </div>
                    <img className="carta__img carta__img--1" src="/images/hamburguesa-de-salmon-960x540.jpg" />
                    {/* <Image className="carta__img-1" src="/images/hamburguesa-de-salmon-960x540.jpg" width="180px" height="100px" /> */}
                    {/* <Image className="carta__img carta__img--1" src="/images/hamburguesa-de-salmon-960x540.jpg" layout="fill"/> */}
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
                </div>
            </div>
        </div>
    </Layout>


export default Carta
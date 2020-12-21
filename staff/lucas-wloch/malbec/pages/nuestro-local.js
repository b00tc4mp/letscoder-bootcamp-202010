import {  Layout  } from '../components'
import '../components/NuestroLocal.sass'




const NuestroLocal = () => {

    return <><Layout>
        <div className="nuestroLocal">

            <div className="nuestroLocal__images">
                {/* <img className="nuestroLocal__img" src="/local/local-1.jpeg" /> */}
                {/* <div className="nuestroLocal__lineasContainer">
            <div className="nuestroLocal__lineas" />
        </div> */}
                <img className="nuestroLocal__img" src="/local/local-2.jpeg" />
        <div className="nuestroLocal__lineasContainer">
            <div className="nuestroLocal__lineas" />
        </div>
                <img className="nuestroLocal__img" src="/local/local-4.jpeg" />
        <div className="nuestroLocal__lineasContainer">
            <div className="nuestroLocal__lineas" />
        </div>
                <img className="nuestroLocal__img" src="/local/local-6.jpeg" />
        <div className="nuestroLocal__lineasContainer">
            <div className="nuestroLocal__lineas" />
        </div>
                <img className="nuestroLocal__img" src="/local/local-3.jpeg" />
        <div className="nuestroLocal__lineasContainer">
            <div className="nuestroLocal__lineas" />
        </div>
                <img className="nuestroLocal__img" src="/local/local-5.jpeg" />
        <div className="nuestroLocal__lineasContainer">
            <div className="nuestroLocal__lineas" />
        </div>
                <img className="nuestroLocal__img" src="/local/local-7.jpeg" />
            </div>
        </div>
        </Layout>
        <footer className="nuestroLocalFooter">
            <div className="nuestroLocalFooter__contact">
                {/* <a className="nuestroLocalFooter__p" href="mailto:reservas@malbecasadorargentino.es"><p className="nuestroLocalFooter__p">reservas@malbecasadorargentino.es</p></a>
                <a className="nuestroLocalFooter__p" href="tel:+34 622706676"><p className="nuestroLocalFooter__p">reservas: 622706676</p></a> */}
                <p className="nuestroLocalFooter__p">Carretera de Sant Cugat 63, Rubí, España</p>
                <p className="nuestroLocalFooter__p">Horarios:  Lunes a Domingo</p>
                <p className="nuestroLocalFooter__p"> de 10hs a 14hs y de 16hs a 21hs</p>
            </div>
            <div className="nuestroLocalFooter__social">
                <a className="nuestroLocalFooter__ig" href="https://www.instagram.com/malbecasadorargentino/">
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



export default NuestroLocal


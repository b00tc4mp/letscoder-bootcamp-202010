// import salida from '../components/icons/salida.png'
import './styles/Logout.sass'

export default function Logout({ onRefresh, name }) {

    return (<>
        <div className="logout-pseudo">
            <section className="logout">
                {/* <img className="logout__img" alt="salida" src={salida}></img> */}
                <div className="logout__text">
                    <h1 className="logout__bye">¡Nos vemos pronto, {name}!</h1>
                    <a className="logout__signin" href='#' onClick={onRefresh}>Salir</a>
                </div>
            </section>
        </div>
    </>)
}
import './ShowProduct.sass'

import { useEffect } from 'react'


const ShowProduct = ({ product, onExit }) => {
    const { id, name, description, price, glutenFree, vegan, alergenos, category, available } = product

    // const disableScrolling = () => {
    //     var x = window.scrollX
    //     var y = window.scrollY
    //     window.onscroll = function () { window.scrollTo(x, y); }


    // }
    // const handleExit = () => {

    //     window.onscroll = function () { }
    //     onExit()
    // }

    var winX = null, winY = null;
    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (winX !== null && winY !== null) {
                window.scrollTo(winX, winY);
            }
        });
        disableWindowScroll()

    })
    function disableWindowScroll() {
        winX = window.scrollX;
        winY = window.scrollY;
    };
    function enableWindowScroll() {
        winX = null;
        winY = null;
    };
    const handleExit = () => {
        enableWindowScroll()
        onExit()
    }
    return <div  onClick={handleExit} className="showProduct__background">
        <div className="showProduct"  >
            <button className="showProduct__exit" onClick={handleExit}>❌</button>
            <h4 className="showProduct__name">{name}</h4>
            <p className="showProduct__description">{description}</p>
            <div className="showProduct__div">
                {glutenFree ? <div className="showProduct__glutenFree">
                    <img className="showProduct__glutenFree--img" src="/images/gluten-free.png" height="20px" />
                </div> : ''}
                {vegan ? <img className="showProduct__vegan--img" src="/images/100-vegan.png" height="20px" /> : ''}
                <p className="showProduct__price">{price}€</p>
            </div>
            {alergenos && alergenos.length ? <p className="showProduct__alergenos">alergenos: {alergenos.length > 1 ? alergenos.join(' ') : alergenos}</p> : ''}
            {available ? '' : <p>not available</p>}
        </div>
    </div>
}
export default ShowProduct
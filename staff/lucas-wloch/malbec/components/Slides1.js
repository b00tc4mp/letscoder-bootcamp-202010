import './Slides.sass'
import { useState, useEffect } from 'react'

const Slides1 = () => {
    // const [_document, set_document] = useState(null)
    const [mounted, setMounted] = useState()


    var img1 = '/slides/img1.jpeg'
    var img2 = '/slides/img2.jpeg'
    var img3 = '/slides/img3.jpeg'
    var img4 = '/slides/img4.jpeg'
    var img5 = '/slides/img5.jpeg'
    var img6 = '/slides/img6.jpeg'
    var img7 = '/slides/img7.jpeg'
    var img8 = '/slides/img8.jpeg'
    var img9 = '/slides/img9.jpeg'
    var img10 = '/slides/img10.jpeg'
    var img11 = '/slides/img11.jpeg'
    var img12 = '/slides/img12.jpeg'
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]


    var slideIndex = 1

    useEffect(() => {
        // set_document(document)
        setMounted(true)
        // showSlides(slideIndex)
        // if(mounted) showSlides(slideIndex)
        var i;
        var slides = document.getElementsByClassName("slides__mySlides");
        for (i = 0; i < slides.length; i++) {
            // slides[i].style.display = "none";
            slides[i].classList.add('slides--off')
            slides[i].classList.remove('slides--block')
        }
        // debugger
        // slides[slideIndex - 1].style.display = "block";
        // slides[slideIndex - 1].classList.toggle('slides--off')
        slides[slideIndex - 1].classList.toggle('slides--block')
    }, [])

    const showSlides = (n) => {
        // debugger
        if (mounted) {
            var i;
            var slides = document.getElementsByClassName("slides__mySlides");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                // slides[i].style.display = "none";
                slides[i].classList.add('slides--off')
                slides[i].classList.remove('slides--block')
            }
            // debugger
            // slides[slideIndex - 1].style.display = "block";
            // slides[slideIndex - 1].classList.toggle('slides--off')
            slides[slideIndex - 1].classList.toggle('slides--block')
        }
    }
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }


    return <div className="slides">
        <div className="slides__container">
            <div className="slides__mySlides">
                <img className="slides__mySlides__img" src={img1} />
            </div>
            <div className="slides__mySlides">
                <img className="slides__mySlides__img" src={img2} />
            </div>
            <div className="slides__mySlides">
                <img className="slides__mySlides__img" src={img3} />
            </div>
            <div className="slides__mySlides">
                <img className="slides__mySlides__img" src={img4} />
            </div>
            <div className="slides__mySlides">
                <img className="slides__mySlides__img" src={img5} />
            </div>
            <div className="slides__mySlides">
                <img className="slides__mySlides__img" src={img6} />
            </div>
            <a className="slides__prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="slides__next" onClick={() => plusSlides(1)}>❯</a>
        </div>
    </div>
}

export default Slides1

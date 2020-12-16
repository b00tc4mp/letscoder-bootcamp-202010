import './Slides.sass'
import { Component } from 'react'

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

class Slides extends Component {
    constructor() {
        super()
        this.state = { img : images[0] }
    }
    // componentDidMount() {
    //     this.handleShowSlides()
    // }

    handleShowSlides = (n) => {
        if (n >= images.length) { this.setState({ img : images[0] }) }
        if (n < 0) { this.setState({ img: images[images.length-1] }) }
    }

    handlePlusSlides = (n) => {
        const {state: { img } } = this
        var index = images.indexOf(img)
        this.handleShowSlides(index += n);
    }

    render() {
        const { state: { img }, handlePlusSlides } = this
        return <div className="slides">
            <div className="slides__container">
                <div className="slides__mySlides">
                    <img className="slides__mySlides__img" src={img} />
                </div>
                <a className="slides__prev" onClick={handlePlusSlides(-1)}>❮</a>
                <a className="slides__next" onClick={handlePlusSlides(1)}>❯</a>
            </div>
        </div>
    }
}

export default Slides

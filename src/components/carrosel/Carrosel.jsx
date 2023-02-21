import './Carrosel.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgCarrosel1 from '../../assets/img-carrosel-1.jpg'
import imgCarrosel2 from '../../assets/img-carrosel-2.jpg'
import imgCarrosel3 from '../../assets/img-carrosel-3.jpg'
import imgCarrosel4 from '../../assets/img-carrosel-4.jpg'

const Carrosel = () => {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 slide-carousel" src={imgCarrosel1} alt="First slide"/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100 slide-carousel" src={imgCarrosel2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100 slide-carousel" src={imgCarrosel3} alt="Third slide" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100 slide-carousel" src={imgCarrosel4} alt="Fourth slide" />
            </Carousel.Item>            
        </Carousel>
    </div>
  )
}

export default Carrosel
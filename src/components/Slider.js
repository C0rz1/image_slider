import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import Image4 from "../images/image4.jpg"
import Image5 from "../images/image5.jpg"
import Image6 from "../images/image6.jpg"
import Image7 from "../images/image7.jpg"

export default function Slider() {
  return (
    <div>
        <Carousel infiniteLoop autoPlay>
            <div className='image'>
                <img src={Image1} alt="" />
            </div>
            <div className='image'>
                <img src={Image2} alt="" />
            </div>
            <div className='image'>
                <img src={Image3} alt="" />
            </div>
            <div className='image'>
                <img src={Image4} alt="" />
            </div>
            <div className='image'>
                <img src={Image5} alt="" />
            </div>
            <div className='image'>
                <img src={Image6} alt="" />
            </div>
            <div className='image'>
                <img src={Image7} alt="" />
            </div>

        </Carousel>
    </div>
  )
}

import React from "react"
import Slider from 'react-slick'

import cut from "../../assets/cut.jpg";
import barberther from "../../assets/barberther.jpg";
import foot from "../../assets/foot.jpg";
import barber from "../../assets/barber.jpg";
import fade from "../../assets/fade.jpg";
import print from "../../assets/print.jpg";


const SliderComp = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <img src={cut} />
            <img src={barberther} />
            <img src={foot} />
            <img src={barber} />
            <img src={fade} />
            <img src={print} />
        </Slider>
    )
}

export default SliderComp;
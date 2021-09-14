// Slider import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slidercap.css';

export const Slidercap= () => {
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: "slides",
    };
    return (
        <div>
          <Slider {...settings}>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/Capstone.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone2.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone3.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone4.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone5.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone6.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone7.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone8.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/capstone9.JPG").default } alt="" />
                </div>
            </div>
          </Slider>
        </div>
    );
}
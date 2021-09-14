// Slider import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Sliderpokemon.css';

export const Sliderpokemon = () => {
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
                    <img className="imagepoke" src={ require("../assets/images/pokemonJS.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/Pokemon2.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/Pokemon3.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/Pokemon4.JPG").default } alt="" />
                </div>
            </div>
            <div className="row g-0">
                <div>
                    <img className="imagepoke" src={ require("../assets/images/Pokemon5.JPG").default } alt="" />
                </div>
            </div>
          </Slider>
        </div>
    );
}
// Slider import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slider.css';

export const SimpleSlider = () => {
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
        <div className="background">
          <Slider {...settings}>
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="trialW">
                            <img className="image" src={ require("../assets/images/william.jpg").default } alt="" />
                            <div className="name">
                                WILLIAM LEE
                            </div>
                            <div className="change">
                                Cuny Tech Prep Full Stack Web Development Participate at CUNY Tech Prep
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="trial">
                            Eric is an exemplary learner. He is curious, passionate, and determined when it comes to problem solving. 
                            I have worked with him on several projects that involve in-depth research utilizing different frameworks. 
                            He is well organized and focuses on the tasks at hand. I would highly recommend Eric to be part of any 
                            team seeing that he is a great team player.
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="trialW">
                            <img className="image" src={ require("../assets/images/Adam.jpg").default } alt="" />
                            <div className="name">
                                ADAM KOCHER
                            </div>
                            <div className="change">
                                Full Stack Developer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="trial">
                            Eric excels at finding efficient solutions to a wide range of problems. I've worked with him on multiple projects, 
                            across various technologies, and his ability to simplify what others overcomplicate provided essential perspective. 
                            He has an excellent grasp of line-by-line coding, evident in his great attention to detail, but beyond that, he adds 
                            value to any team by remaining focused on how that fits into the broader objective. His attitude and personality welcomes 
                            and motivates the rest of the team. Without a doubt, I would recommend Eric to be a part of your team. 
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="trialW">
                            <img className="image" src={ require("../assets/images/Hong.jpg").default } alt="" />
                            <div className="name">
                                HONG GAO
                            </div>
                            <div className="change">
                                Analyst/Developer/UX Designer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="trial">
                            Eric is an exemplary team-player. He is diligent, patient, and a great problem-solver. I highly recommend Eric to be part 
                            of any team in any role, as he is very generous with his time, wants everyone to succeed, and always does the job right. 
                            this is a great co-worker/employee and Eric will add high values for your company.
                        </div>
                    </div>
                </div>
            </div>
          </Slider>
        </div>
    );
}
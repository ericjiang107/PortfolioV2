// Slider import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Sliderprog.css';
import ProgressBar from "@ramonak/react-progress-bar";

export const Sliderprog= () => {
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
            <div className="row centerize">
                <div className="col-md-6 offset-md-3 tester2">
                    <div className="font bot"> 
                            Language Skills:
                    </div>
                    <div className="newFont">
                        Python 
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={95} />
                        </div>
                    </div>
                    <div className="newFont">
                        JavaScript
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={85} />
                        </div>
                    </div>
                    <div className="newFont">
                        Java
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={75} />
                        </div>
                    </div>
                    <div className="newFont">
                        TypeScript 
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={85} />
                        </div>
                    </div>
                    <div className="newFont">
                        C#
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={75} />
                        </div>
                    </div>
                    <div className="newFont">
                        SQL 
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={98} />
                        </div>
                    </div>
                    <div className="newFont">
                        Apache Kafka
                        <div className="newWidth" id="spacingX"> 
                            <ProgressBar completed={55} />
                        </div>
                    </div>
                </div>
            </div>
                <div className="row centerize">
                    <div className="col-md-6 offset-md-3 tester2">
                        <div className="font bot"> 
                                Frameworks:
                        </div>
                        <div className="newFont">
                            React 
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={85} />
                            </div>
                        </div>
                        <div className="newFont">
                            Flask
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={85} />
                            </div>
                        </div>
                        <div className="newFont">
                            Express
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={75} />
                            </div>
                        </div>
                        <div className="newFont">
                            Selenium 
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={70} />
                            </div>
                        </div>
                        <div className="newFont">
                            Kubernetes
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={65} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centerize">
                    <div className="col-md-6 offset-md-3 tester2">
                        <div className="font bot"> 
                                Methodologies:
                            </div>
                        <div className="newFont">
                            Waterfall 
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={90} />
                            </div>
                        </div>
                        <div className="newFont">
                            Iterative
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={85} />
                            </div>
                        </div>
                        <div className="newFont">
                            Agile/Scrum
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={95} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centerize">
                    <div className="col-md-6 offset-md-3 tester3">
                        <div className="font bot"> 
                                Other:  
                        </div>
                        <div className="newFont">
                            Matlab 
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={85} />
                            </div>
                        </div>
                        <div className="newFont">
                            Github
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={90} />
                            </div>
                        </div>
                        <div className="newFont">
                            HTML
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={95} />
                            </div>
                        </div>
                        <div className="newFont">
                            CSS
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={95} />
                            </div>
                        </div>
                        <div className="newFont">
                            Bootstrap
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={95} />
                            </div>
                        </div>
                        <div className="newFont">
                            ANSYS
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={85} />
                            </div>
                        </div>
                        <div className="newFont">
                            Solidworks
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={95} />
                            </div>
                        </div>
                        <div className="newFont">
                            JSON
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={95} />
                            </div>
                        </div>
                        <div className="newFont">
                            Nodejs
                            <div className="newWidth" id="spacingX"> 
                                <ProgressBar completed={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
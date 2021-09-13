import React, { useState, useEffect } from 'react';
import './Home.css';
import Container from '@material-ui/core/Container';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { DiPython } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { SiFlask } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaLanguage } from 'react-icons/fa';
import { SiMathworks } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { DiBootstrap } from 'react-icons/di';
import { SiJson } from 'react-icons/si';
import { FcCollaboration } from 'react-icons/fc';
import { FcViewDetails } from 'react-icons/fc';
import { DiGoogleAnalytics } from 'react-icons/di';
import { GiMuscleUp } from 'react-icons/gi';
import { GiMissileMech } from 'react-icons/gi';
// Slider import
import { SimpleSlider } from '../Slider';

interface Props {
    title: string;
}

const useStyles = makeStyles((theme) => ({

}))


export const Home = (props: Props) => {

    const classes = useStyles()

    return (
        <div>

            <div className="backgroundImage">
                <div className="pads">
                    <div className="me"></div>
                </div>
                <div className="text">
                    Hi, I'm Eric
                </div>
                <Container maxWidth="md">
                    <div className="text2">
                        I'm a full stack engineer with a mechanical engineering background and a passion for food, gaming, design, and programming. 
                    </div>
                </Container>
            </div>
            
            <div className="colors centerize">
                <div className="centerize font sizeUp sizeDown">
                    Who am I? 
                </div>
                <div className="centerize">
                    <div className="font2 width2">
                        <p className="padding"> 
                            I'm currently a full-stack software engineer at Coding Temple. Previously, I was a Sales and Applications Engineer for the
                            Pressure and Temperature team at Omega Engineering where I was responsible for assisting customers with their inquieries about 
                            products as well as providing technical support. 
                        </p>
                        <p className="padding">
                            In my spare time, I enjoy creating impactful applications not just for myself but for society. For instance, my first full-stack 
                            application was geared toward those who are card sellers and card buyers in the TCG card industry. This is because whenever I want to
                            look up the prices of a card, there are many steps that I have to take to search for it. Instead, I thought to myself, "why can't I just
                            bookmark this so I can always keep an eye for when the price changes?" I'm also currently working on a 2d rpg game with my friends as a
                            personal side project. 
                        </p>
                        <p className="padding">
                            I believe in companies that encourage their employees by having a good work culture. That is because, a good work culture means the company
                            trusts their employees which leads to everyone understanding, supporting, and inspiring each other which would allow for a more creative and 
                            diverse mindset. 
                        </p>
                        <p className="padding">
                            I’m driven by engaging with others and providing a safe space as a sounding board to develop meaningful work. My mantra 
                            is that a company is only as good as the teams behind it. 
                        </p>
                        <div className="centerButton">
                            <Button className="styleButton" onClick={() => window.open("https://ericjiang107.github.io/ResumeTest/", "_blank")}>
                                CHECK OUT MY RESUME
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Container maxWidth="lg" id="padding">
                <div className="row centerize">
                    <div className="col-md width2">
                        <div className="font bot"> 
                            Language Skills
                        </div>
                        <div className="morefont morepadding">
                            <DiPython size={45}/> 
                            <DiJavascript1 size={45} />
                            <br></br>
                            Python and JavaScript
                        </div>
                        <div className="morefont morepadding">
                            <SiFlask size={45} />
                            <DiReact size={45} />
                            <br></br>
                            Flask and React
                        </div>
                        <div className="morefont morepadding">
                            <SiPostgresql size={45} />
                            <br></br>
                            Postgre SQL
                        </div>
                        <div className="morefont morepadding">
                            <SiTypescript size={40} />
                            <br></br>
                            Typescript
                        </div>
                        <div className="morefont morepadding">
                            <FaLanguage size={49} />
                            <br></br>
                            Chinese
                        </div>
                    </div>
                    <div className="col-md width2">
                        <div className="font bot"> 
                            Other Skills
                        </div>
                        <div className="morefont morepadding">
                            <SiMathworks size={45}/> 
                            <br></br>
                            Matlab
                        </div>
                        <div className="morefont morepadding">
                            <AiFillHtml5 size={45} />
                            <FaCss3Alt size={45} />
                            <DiBootstrap size={45} />
                            <br></br>
                            HTML, CSS, Bootstrap
                        </div>
                        <div className="morefont morepadding">
                            <AiFillGithub size={45} />
                            <br></br>
                            Github
                        </div>
                        <div className="morefont morepadding">
                            <SiJson size={35} />
                            <br></br>
                            JSON
                        </div>
                        <div className="morefont morepadding">
                            <GiMissileMech size={50} />
                            <br></br>
                            SolidWorks and ANSYS
                        </div>
                    </div>
                    <div className="col-md width2">
                        <div className="font bot"> 
                            Behavior Skills
                        </div>
                        <div className="morefont morepadding">
                            <FcCollaboration size={45}/> 
                            <br></br>
                            Collaboration
                        </div>
                        <div className="morefont morepadding">
                            <FcViewDetails size={45} />
                            <br></br>
                            Detail Oriented
                        </div>
                        <div className="morefont morepadding">
                            <DiGoogleAnalytics size={45} />
                            <br></br>
                            Analytical
                        </div>
                        <div className="morefont morepadding">
                            <GiMuscleUp size={45} />
                            <br></br>
                            Work Ethic
                        </div>
                        <div className="morefont morepadding">
                            <GiSkills size={45} />
                            <br></br>
                            Problem Solver
                        </div>
                    </div>
                </div>
            </Container>

            <div>
                <div className="row">
                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/Capstone.JPG").default } />
                            <p className="img__description test">
                                TCG CARD GAME PRICE BOOKMARKER
                                <p className="font"> Single Card Price Checker </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/portfolio.JPG").default } />
                            <p className="img__description test">
                                REACT
                                <p className="font"> Portfolio </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/pokemonJS.JPG").default } />
                            <p className="img__description test">
                                JAVASCRIPT, POKEMON API
                                <p className="font"> Pokemon Searcher </p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/weatherapi.JPG").default } />
                            <p className="img__description test">
                                JAVASCRIPT, OPENWEATHER API
                                <p className="font"> Weather Forecast </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/gundam3.JPG").default } />
                            <p className="img__description test">
                                REACT, REDUX, FLASK, POSTGRE SQL
                                <p className="font"> Gundam Gallery </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/catproject2.JPG").default } />
                            <p className="img__description test">
                                UNITY, C#
                                <p className="font"> Cat Game </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <SimpleSlider />

            <div className="colors centerize">
                <div className="top">
                    <Button className="icontest"> <AiFillGithub size={50} onClick={() => window.open('https://github.com/ericjiang107', "_blank")} /> </Button>
                    <Button className="icontest"> <AiFillLinkedin size={50} onClick={() => window.open('https://www.linkedin.com/in/eric-jiang-855a16107/', "_blank")} /> </Button>
                </div>
                <div className="font3">
                    <div>
                        ericjiang107@gmail.com
                    </div>
                </div>
            </div>

            <div>
                contact me section
            </div>
            test

        </div>
    )
}
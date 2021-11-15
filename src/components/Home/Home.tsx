/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Container from '@material-ui/core/Container';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
// Slider import
import { SimpleSlider } from '../Slider';
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import { Sliderprog } from '../Sliderprog';


interface Props {
    title: string;
}

const useStyles = makeStyles((theme) => ({

}))

export const Home = (props: Props) => {

    const classes = useStyles();

    const history = useHistory();
    const handleClick = () => {
        history.push("/SCPC");
    }

    const history2 = useHistory();
    const handleClick2 = () => {
        history2.push("/Pokemon");
    }

    const history3 = useHistory();
    const handleClick3 = () => {
        history3.push("/Weather");
    }

    const history4 = useHistory();
    const handleClick4 = () => {
        history4.push("/Gundam");
    }

    const history5 = useHistory();
    const handleClick5 = () => {
        history5.push("/Cat");
    }

    const history6 = useHistory();
    const handleClick6 = () => {
        history6.push("/Portfolio");
    }

    return (
        <div className="scroll-container" id="home">

                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Home</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link active" href="#Who am I?">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#links">Links</a>
                        </li>
                    </ul>
                </nav>

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
                <div className="finalScroll" onClick={() => window.location.replace("/#Who am I?")}>
                    <Button className="whoI">LEARN MORE</Button>
                </div>
            </div>
            <div className="colors centerize" id="Who am I?">
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
                            application was geared toward those who are card sellers and card buyers in the TCG card industry. I built this application to 
                            simplify the research for the value of a card. My intent is to provide a space where consumers can understand the change in cost 
                            and price range for each collected item. I'm currently programming a 2D RPG game in Unity using C#.
                        </p>
                        <p className="padding">
                            What I want to do next: I look forward to working with others who encourage career growth, internal mobility, and provide a great
                            work culture. I am driven by strong leadership that trusts, supports, and inspires a creative and diverse environment.
                        </p>
                        <p className="padding italic">
                            A a company is only as good as the teams behind it. 
                        </p>
                        <div className="centerButton">
                            <Button className="styleButton" onClick={() => window.open("https://ericjiang107.github.io/ResumeTest/", "_blank")}>
                                CHECK OUT MY RESUME
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Sliderprog />

            <div className="ups" id="projects">
                <div className="row g-0">
                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/Capstone.JPG").default } />
                            <p className="img__description test" onClick={handleClick}>
                                TCG CARD GAME PRICE BOOKMARKER
                                <p className="font" onClick={handleClick} > Single Card Price Checker </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/portfoliov2.JPG").default } />
                            <p className="img__description test" onClick={handleClick6}>
                                REACT
                                <p className="font" onClick={handleClick6}> Portfolio </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/pokemonJS.JPG").default } />
                            <p className="img__description test" onClick={handleClick2}>
                                JAVASCRIPT, POKEMON API
                                <p className="font" onClick={handleClick2}> Pokemon Searcher </p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-0">
                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/weatherapi.JPG").default } />
                            <p className="img__description test" onClick={handleClick3}>
                                JAVASCRIPT, OPENWEATHER API
                                <p className="font" onClick={handleClick3}> Weather Forecast </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/gundam3.JPG").default } />
                            <p className="img__description test" onClick={handleClick4}>
                                REACT, REDUX, FLASK, POSTGRE SQL, FIREBASE
                                <p className="font" onClick={handleClick4}> Gundam Gallery </p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="img__wrap images" onClick={() => {console.log("clicked")}}>
                            <img className="img__img" src={ require("../assets/images/catproject2.JPG").default } />
                            <p className="img__description test" onClick={handleClick5}>
                                UNITY, C#
                                <p className="font" onClick={handleClick5}> Cat Game </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <SimpleSlider />

            <div className="colors centerize" id="links">
                <div className="top">
                    <Button className="icontest"> <AiFillGithub size={50} onClick={() => window.open('https://github.com/ericjiang107', "_blank")} /> </Button>
                    <Button className="icontest"> <AiFillLinkedin size={50} onClick={() => window.open('https://www.linkedin.com/in/eric-jiang-855a16107/', "_blank")} /> </Button>
                </div>
                <div className="font3">
                    <div>
                        ericjiang107@gmail.com
                    </div>
                </div>
                <div className="number">
                    Phone: +1 (718) 877-6881
                </div>
            </div>
        </div>
    )
}
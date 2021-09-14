import React from 'react';
import './Cat.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Cat = () => {
    return (
        <div className="colors2">
            <div className="row justify-content-center" id="top">
                <div>
                    <Link className="links" to="/">Home</Link>
                </div>
                <div className="title">
                    Cat Game
                </div>
                <div className="col-md-5">
                    <img className="img" src={ require("../assets/images/catproject2.JPG").default } />
                </div>
                <div className="col-md-5">
                    <p className="text3">
                        This was one of my very first projects and what got me interested in coding. I utlizied C# in Unity as well as some images drawn by my friends
                        to create a start, load, save menu as well as zones for the main protagonist (the cat) to explore. I also had the opportunity to create my own 
                        music for the opening which was an absolute fantastic experience. Not only was did this passion project introduce me into coding, it taught me
                        a lot about the dos and don'ts of coding. I learned a lot about syntax, commenting, as well as the basics. I will definitely be returning in the
                        future to continue adding more things for this project. 
                    </p>
                </div>
                <div className="tech2">
                    Technologies: Unity, C#
                </div>
            </div>

        </div>
    )
}
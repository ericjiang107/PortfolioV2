import React from 'react';
import './Gundam.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Gundam = () => {
    return (
        <div className="colors2">
            <div className="row justify-content-center" id="top">
                <div>
                    <Link className="links" to="/">Home</Link>
                </div>
                <div className="title">
                    Gundam Gallery
                </div>
                <div className="col-md-5">
                    <img className="img" src={ require("../assets/images/gundam3.JPG").default } />
                </div>
                <div className="col-md-5">
                    <p className="text3">
                        This was my first ever full stack application where I utilized flask as the back-end framework which is connected to my Postgre SQL database and
                        React as the front-end framework. The purpose was to create something that encoporated a little bit of everything. For me, I chose to work on
                        something similar to Instagram/blog where the users would sign in via Google authentication or sign up which would provide them a token from our 
                        back-end. Once signed in, they can browse through the collections of Gundam images that are avialable in either the front page or gallery. They 
                        also have the option to visit the Bandai's official website to purchase the kits or create their own Gundams in the Redux store and post it. 
                        From working on this project, I learned a lot about how connecting to back-end and front-end works, setting up authentication via Firebase, 
                        and linking components to one another. 
                    </p>
                </div>
                <div className="tech">
                    Technologies: React, Redux, Flask, Postgre SQL, Firebase
                </div>
                <div className="github">
                    <form target="_blank" action="https://github.com/ericjiang107/Flask-Assignment-1">
                        <input type="submit" value="Github Link" />
                    </form>
                </div>
            </div>

        </div>
    )
}
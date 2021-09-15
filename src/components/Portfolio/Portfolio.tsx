import React from 'react';
import './portfolio.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Portfolio = () => {
    return (
        <div className="colors2">
            <div className="row justify-content-center" id="top">
                <div>
                    <Link className="links" to="/">Home</Link>
                </div>
                <div className="title">
                    Portfolio
                </div>
                <div className="col-md-5">
                    <img className="img" src={ require("../assets/images/portfoliov2.JPG").default } />
                </div>
                <div className="col-md-5">
                    <p className="text3">
                        This is my react portfolio project where I introduce myself, skillset, projects, links, as well as recommendations. 
                        There were some issues that came up but after inspecting the page and debugging, it came down to be styling and css 
                        that impacted the page. From working on this, I gained a lot of knowledge on how to create sliders, routes, and scrollbars. 
                    </p>
                </div>
                <div className="tech">
                    Technologies: React, HTML, CSS, Bootstrap, Typescript
                </div>
                <div className="github">
                    <form target="_blank" action="https://github.com/ericjiang107/PortfolioV2">
                        <input type="submit" value="Github Link" />
                    </form>
                </div>
            </div>

        </div>
    )
}
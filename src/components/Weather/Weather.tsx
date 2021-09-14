import React from 'react';
import './Weather.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Weather = () => {
    return (
        <div className="colors2">
            <div className="row justify-content-center" id="top">
                <div>
                    <Link className="links" to="/">Home</Link>
                </div>
                <div className="title">
                    Weather Forecast
                </div>
                <div className="col-md-5">
                    <img className="img" src={ require("../assets/images/weatherapi.JPG").default } />
                </div>
                <div className="col-md-5">
                    <p className="text3">
                        One of the projects that allowed me to fully grasp the fundamentals of how JavaScript works, HTML DOM, as well as how to access
                        APIs to parse for specific information. With this project, I was able to learn how to create buttons that interact with one another. 
                        For instance, because this project was weather forecasts related, I wanted the user to be able to convert from Kelvin to Fahrenheit and Celsius
                        and vice versa. This way, the information displayed can be understood by anyone. I kept the design very minialistic because I wanted the user's
                        attention to be on the functionality of conversion. Although, adding changing images based on the weather forecast would be something I can 
                        implement in the future. 
                    </p>
                </div>
                <div className="tech">
                    Technologies: JavaScript HTML DOM, Openweather API
                </div>
                <div className="github">
                    <form target="_blank" action="https://github.com/ericjiang107/Weather-App-Project">
                        <input type="submit" value="Github Link" />
                    </form>
                </div>
            </div>

        </div>
    )
}
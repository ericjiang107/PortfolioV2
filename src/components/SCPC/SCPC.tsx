import React from 'react';
import './SCPC.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slidercap } from '../Slidercap';


export const SCPC = () => {
    return (
        <div className="colors2">
            <div className="row justify-content-center" id="top">
                <div>
                    <Link className="links" to="/">Home</Link>
                </div>
                <div className="title">
                    Single Card Price Checker 
                </div>
                <div className="col-md-5">
                    <Slidercap />
                </div>
                <div className="col-md-5">
                    <p className="text3">
                        This project served as my Capstone project. The goal was to design and create a website that keeps track of specific cards that 
                        one may be interested in. Being someone who's invovled in the card market industry, I understand that as a buyer, I would want to see
                        the prices of certain cards drop whereas as a seller, I would want to see that the prices are increasing so I can make a profit. However, 
                        the sites that I use to keep track of the market prices of cards doesn't quite satisfy what I wanted to do. Hence, I went ahead and created this.
                    </p>
                    <p className="text3">
                        In order to accomplish the task, I accessed the TCG player API which is where market prices are often trusted and where you can buy and 
                        sell cards. Knowing this, I focused mainly on the card game of the specific cards I wanted to keep track in order to keep things simple. 
                        By fetching and parsing the data by using GET and POST requests, I was able to showcase all the cards from each release set by adding a map 
                        function while adding a filter system through JavaScript which assisted in card tracking. The final goal was to design and create a graph that 
                        showcases the changes in the prices which was done using Recharts and the data acquired from the API. Once completed, I was able to bookmark 
                        specific cards to my account and view them whenever I want through utilizing Google Cloud linking Firestore and Firebase to one another.
                    </p>
                </div>
                <div className="tech">
                    Technologies: HTML, CSS, JavaScript, Insomnia, React, Bootstrap, Firebase, Firestore
                </div>
                <div className="github">
                    <form target="_blank" action="https://github.com/ericjiang107/Capstone-Project">
                        <input type="submit" value="Github Link" />
                    </form>
                </div>
            </div>

        </div>
    )
}
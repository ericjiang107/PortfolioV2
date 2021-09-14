import React from 'react';
import './Pokemon.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Sliderpokemon } from '../Sliderpokemon';


export const Pokemon = () => {

    

    return (
        <div className="colors2">
            <div className="row justify-content-center" id="top">
                <div>
                    <Link className="links" to="/">Home</Link>
                </div>
                <div className="title">
                     Pokemon Searcher
                </div>
                <div className="col-md-5">
                    <Sliderpokemon />
                </div>
                <div className="col-md-5">
                    <p className="text3">
                        This project served as a side project. I was curious about what else JavaScript DOM can do so I wounded up experimenting with other APIs. Because 
                        Pokemon was a fond memory of mine, I wanted to create something that allows me to search the API's database to parse specific information
                        for that pokemon. It was a fun and informative project and I learned a lot about how to navigate APIs as well as how to manipulate that data.
                    </p>
                </div>
                <div className="tech">
                    Technologies: JavaScript HTML DOM, Pokemon API
                </div>
                <div className="github">
                    <form target="_blank" action="https://github.com/ericjiang107/Pokemon-Database">
                        <input type="submit" value="Github Link" />
                    </form>
                </div>
            </div>

        </div>
    )
}
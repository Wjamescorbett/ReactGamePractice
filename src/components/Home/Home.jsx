import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = (props) => {


    function handleSubmit(health, attack) {
        props.pickClass(health, attack)
    }

        return(
            <div>
                <nav>
                    <h1>This is the homepage</h1>
                    <h1>Intro ans story go here.</h1>
                    <h5>Pick Your Class</h5>
                    <h5>playerHealth is {props.playerHealth} </h5>
                    <button className="pickClass" onClick={() => handleSubmit(100, 4)}>Warrior</button>
                    <button className="pickClass" onClick={() => handleSubmit(150, 2)}>Tank</button>
                    <button className="pickClass" onClick={() => handleSubmit(25, 10)}>Glass Cannon</button>
                    <ul>
                        <li>
                            <Link to="/GameBoard">Go To Room One</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Home;






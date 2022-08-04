import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = (props) => {


    function handleSubmit(health, attack, speed) {
        props.pickClass(health, attack, speed)
    }

        return(
            <div>
                <nav>
                    <h1>This is the homepage</h1>
                    <h1>Intro ans story go here.</h1>
                    <h5>Pick Your Class</h5>
                    <h5>playerHealth is {props.playerHealth} </h5>
                    <button className="pickClass" onClick={() => handleSubmit(100, 4, 2)}>Warrior</button>
                    <button className="pickClass" onClick={() => handleSubmit(150, 2, 1)}>Tank</button>
                    <button className="pickClass" onClick={() => handleSubmit(25, 10, 3)}>Glass Cannon</button>
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






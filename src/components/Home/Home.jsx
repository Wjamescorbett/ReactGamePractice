import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = (props) => {
        return(
            <div>
                <h5>Your Heath is {props.playerHealth} </h5>
                <nav>
                    <h1>This is the homepage</h1>
                    <h5>Your Heath is {props.playerHealth} </h5>
                    <ul>
                        <li>
                            <Link to="/GameBoard">Return to room one</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Home;






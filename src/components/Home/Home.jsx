import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = (props) => {
        return(
            <div>
                <nav>
                    <h1>This is the homepage</h1>
                    <h1>Intro ans story go here.</h1>
                    <h5>button for picking class one.</h5>
                    <h5>button for picking class two.</h5>
                    <h5>button for picking class three.</h5>
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






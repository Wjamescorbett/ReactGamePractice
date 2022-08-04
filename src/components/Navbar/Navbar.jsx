import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = (props) => {
        return(
            <div>
                <h5>Your Heath is {props.playerHealth}. </h5>
                <h5>Your Attack is {props.playerAttack}. </h5>
                <h5>Your Speed is {props.playerSpeed}. </h5>
                <h5>Your Armor is {props.playerArmor}. </h5>
                <nav>
                    <ul>
                        <li>
                            <Link to="/GameBoard">Go To Room One</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Navbar;
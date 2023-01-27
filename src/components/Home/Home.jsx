import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {


    function handleSubmit(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion) {
        props.pickClass(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion)
    }

    const showToastMessage = () => {
        toast.success('TEST Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

        return(
            <div>
                <nav>
                    <h1>This is the homepage</h1>
                    <h1>Intro and story go here.</h1>
                    <h5>Pick Your Class</h5>
                    <h5>playerHealth is {props.playerHealth} </h5>
                    <div>
                        <button onClick={showToastMessage}>Notify</button>
                        <ToastContainer />
                    </div>
                    <button className="pickClass" onClick={() => handleSubmit(100, 100, 3, 5, 5, 5, 1, 2, 1, 1)}>Warrior</button>
                    <button className="pickClass" onClick={() => handleSubmit(150, 150, 2, 4, 4, 4, 3, 2, 2, 1)}>Tank</button>
                    <button className="pickClass" onClick={() => handleSubmit(25, 25, 8, 12, 4, 4, 1, 2, 1 ,1)}>Glass Cannon</button>
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






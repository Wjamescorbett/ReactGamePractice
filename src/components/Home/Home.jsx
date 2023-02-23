import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {


    function handleSubmit(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion, attackTimer, attackCloseEnemyTimer) {
        props.pickClass(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion, attackTimer, attackCloseEnemyTimer)
    }

        return(
                <div>
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-6">
                                <h1>This is the homepage</h1>
                            </div>
                        </div>
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-6">
                                <h1>Intro and story go here.</h1>
                            </div>
                        </div>
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-4">
                                <h5>Pick Your Class</h5>
                            </div>
                        </div>
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-4">
                                <button className="pickClass" onClick={() => handleSubmit(100, 100, 3, 5, 5, 5, 1, 2, 1, 1, 4, 10)}>Warrior</button>
                                <button className="pickClass" onClick={() => handleSubmit(150, 150, 2, 4, 4, 4, 3, 2, 2, 1, 2, 10)}>Tank</button>
                                <button className="pickClass" onClick={() => handleSubmit(25, 25, 8, 12, 4, 4, 1, 2, 1 , 1, 2, 5)}>Glass Cannon</button>
                            </div>
                        </div>
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-4">
                            <Link to="/GameBoard" >
                                <button className="gameBoardButton">Go to room One</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default Home;






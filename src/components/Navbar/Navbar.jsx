import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Navbar = (props) => {
        return(
            <div>
                <h5>Your Heath is {props.playerHealth}. Your max health is {props.maxHealth}.</h5>
                <h5>Your Attack is {props.playerAttackLow} - {props.playerAttackHigh}. </h5> 
                <h5>Your Speed is {props.playerSpeed}. !!CAP AT TEN!!</h5>
                <h5>Your Armor is {props.playerArmor}. </h5>
                <h5>You have {props.playerCoins} coins. </h5>
                <h5>You have {props.playerHealthPotion} health potions. {props.healthPotionEffect} healing per. </h5>
                <h5>You have {props.playerStaminaPotion} stamina potions. </h5>
                <ProgressBar variant="danger" min={0} max={props.maxHealth} now={props.playerHealth} label={`Health ${props.playerHealth}/${props.maxHealth}`}/>;
                <ProgressBar variant="warning" min={0} max={props.maxPlayerSpeed} now={props.playerSpeed} label={`Speed ${props.playerSpeed}/${props.maxPlayerSpeed}`}/>;
                <nav>
                    <ul>
                        <li>
                        <Link to="/GameBoard" >
                            <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Go to room One</button>
                        </Link>
                        </li>
                        <li>
                            <button className="healthPotion" onClick={() => props.useHealthPotion()}>Use health potion</button>
                        </li>
                        <li>
                            <button className="staminaPotion" onClick={() => props.useStaminaPotion()}>Use stamina potion</button>
                        </li>
                        <li>
                            <button className="devButton" onClick={() => props.devButton()}>DEV BUTTON</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Navbar;
import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = (props) => {
        return(
            <div>
                <h5>Your Heath is {props.playerHealth}. Your max health is {props.maxHealth}.</h5>
                <h5>Your Attack is {props.playerAttack}. </h5> 
                <h5>Your Speed is {props.playerSpeed}. </h5>
                <h5>Your Armor is {props.playerArmor}. </h5>
                <h5>You have {props.playerCoins} coins. </h5>
                <h5>You have {props.playerHealthPotion} health potions. {props.healthPotionEffect} healing per. </h5>
                <h5>You have {props.playerStaminaPotion} stamina potions. </h5>
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
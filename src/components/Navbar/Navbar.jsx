import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Navbar = (props) => {
        return(
            <div>
                <h5>Here is the time {props.gameTick}</h5>
                <h5>Your Heath is {props.player.playerHealth}. Your max health is {props.player.playerMaxHealth}.</h5>
                <h5>Your Attack is {props.player.playerAttackLow} - {props.player.playerAttackHigh}. </h5> 
                <h5>Your Speed is {props.player.playerSpeed}. !!CAP AT TEN!!</h5>
                <h5>Your Armor is {props.player.playerArmor}. </h5>
                <h5>You have {props.player.playerCoins} coins. </h5>
                <h5>You have {props.player.playerHealthPotion} health potions. {props.player.healthPotionEffect} healing per. </h5>
                <h5>You have {props.player.playerStaminaPotion} stamina potions. </h5>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.player.playerMaxHealth} now={props.player.playerHealth} label={`Health ${props.player.playerHealth}/${props.player.playerMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.player.playerMaxSpeed} now={props.player.playerSpeed} label={`Speed ${props.player.playerSpeed}/${props.player.playerMaxSpeed}`}/>
                </div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/GameBoard" >
                            <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Return Home</button>
                        </Link>
                        </li>
                        {/* <li>
                            <button className="healthPotion" onClick={() => props.useHealthPotion()}>Use health potion</button>
                        </li> */}
                        {/* <li>
                            <button className="staminaPotion" onClick={() => props.useStaminaPotion()}>Use stamina potion</button>
                        </li> */}
                        <li>
                            <button className="devButton" onClick={() => props.devButtonUpgrade()}>DEV BUTTON Upgrade + 5 dmg</button>
                        </li>
                        <li>
                            <button className="devButton" onClick={() => props.devButtonDowngrade()}>DEV BUTTON Downgrade - 5 dmg</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}

export default Navbar;
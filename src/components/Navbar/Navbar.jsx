import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = (props) => {
        return(
            <div>
                <h5>Here is the time {props.gameTick}</h5>
                <div className="w-25 p-3, bg-success bg-opacity-75">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5>Attack: {props.player.playerAttackLow} - {props.player.playerAttackHigh} </h5> 
                            </div>
                            <div class="col">
                                <h5>Armor: {props.player.playerArmor} </h5>
                            </div>
                        </div>
                        <h5>{props.player.playerCoins} Coins. </h5>
                        <h5>You have {props.player.playerHealthPotion} health potions. {props.player.healthPotionEffect} healing per. </h5>
                        <h5>You have {props.player.playerStaminaPotion} stamina potions. </h5>
                            <ProgressBar variant="danger" min={0} max={props.player.playerMaxHealth} now={props.player.playerHealth} label={`Health ${props.player.playerHealth}/${props.player.playerMaxHealth}`}/>
                            <ProgressBar variant="warning" min={0} max={props.player.playerMaxSpeed} now={props.player.playerSpeed} label={`Speed ${props.player.playerSpeed}/${props.player.playerMaxSpeed}`}/>
                        <div class="row">
                            <div class="col">
                                <h5>Health Potions: {props.player.playerHealthPotion}</h5> 
                            </div>
                            <div class="col">
                                <h5>Stamina Potions: {props.player.playerStaminaPotion} </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul>
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
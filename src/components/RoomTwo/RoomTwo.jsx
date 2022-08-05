import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTwoPNG from './GameRoomTwoPNG.png';

const RoomTwo = (props) => {

    function handleSubmit(health, attack, speed, armor) {
        props.circleEnemy(health, attack, speed, armor)
    }

    function makeCircleEnemy(health, attack, speed, armor) {
        console.log(health, attack, speed, armor)
        props.createCircleEnemy(health, attack, speed, armor)
    }

        return (

            <nav>
            <div>
                <h2>This Is The GameBoard Room Two</h2>
                <h2>You are encountering a dangerous circle. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, and {props.enemyArmor} armor. </h2>
                <button className="circle" onClick={() => makeCircleEnemy(20, 2, 0, 1)}>EncounterCircleEnemy</button>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove()}>Attack</button>
                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
            </div>
            <ul>
                <li>
                    <Link to="/GameBoard">Link to RoomOne</Link>
                </li>
                <li>
                    <Link to="/RoomThree">Link to RoomThree</Link>
                </li>
                <li>
                    <Link to="/RoomSix">Link to RoomSix</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTwoPNG} alt="GameRoomOnePNG" />
            </div>
            </nav>
        )
}

export default RoomTwo;
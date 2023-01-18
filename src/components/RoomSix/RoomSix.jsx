import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomSixPNG from './GameRoomSixPNG.png';

const RoomSix = (props) => {
    if(props.roomSixStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Six</h2>
                </div>
            <div>
                <h2>You are encountering two dangerous circles. </h2>
                <h2>The first circle It has {props.enemyHealth} health, {props.enemyAttackLow} attackLow, {props.enemyAttackHigh} attackHigh, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second dangerous circle has {props.enemy2Health} health, {props.enemy2AttackLow} attackLow, {props.enemy2AttackHigh} attackHigh, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge</button>
                <button className="healMove">Heal</button>
            </div>
            <div>
                <img src={GameRoomSixPNG} alt="GameRoomSixPNG" />
            </div>
            </nav>
        )
    }

    if (props.roomSixStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Six</h2>
                </div>
            <div>
                <h2>You killed both dangerous circles. They rewarded you with {props.enemyReward} coins each. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomTwo" >
                        <button className="gameBoardButton" onClick={() => props.roomMovement(2)}>Go to room Two</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomSeven" >
                    <button className="square" onClick={() => props.roomMovement(7)}>Go to room Seven</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomEight">
                        <button className="circle" onClick={() => props.roomMovement(8)}>Go to room Eight</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomNine">
                        <button className="circle" onClick={() => props.roomMovement(9)}>Go to room Nine</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomSixPNG} alt="GameRoomSixPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomSix;
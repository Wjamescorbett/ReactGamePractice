import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomFivePNG from './GameRoomFivePNG.png';

const RoomFive = (props) => {
    if(props.roomFiveStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Five</h2>
                </div>
            <div>
                <h2>You are encountering two dangerous circles. </h2>
                <h2>The first circle has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second dangerous circle has {props.enemy2Health} health, {props.enemy2Attack} attack, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
            </div>
            <div>
                <img src={GameRoomFivePNG} alt="GameRoomFivePNG" />
            </div>
            </nav>
        )
    }

    if (props.roomFiveStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Five</h2>
                </div>
            <div>
                <h2>You killed both dangerous circles. They rewarded you with {props.enemyReward} coins each. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomThree" >
                        <button className="gameBoardButton" onClick={() => props.roomMovement(3)}>Go to room Three</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomSeven" >
                    <button className="square" onClick={() => props.roomMovement(7)}>Go to room Seven</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomEleven">
                        <button className="circle" onClick={() => props.roomMovement(11)}>Go to room Eleven</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomFivePNG} alt="GameRoomFivePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomFive;
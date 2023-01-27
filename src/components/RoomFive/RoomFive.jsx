import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomFivePNG from './GameRoomFivePNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";

const RoomFive = (props) => {
    if(props.roomFiveStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Five</h2>
                </div>
            <div>
                <h2>You are encountering a parallelogram and a trapezium. </h2>
                <h2>The parallelogram has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coins. </h2>
                <h2>The trapezium has {props.enemy2Health} health, {props.enemy2Attack} attack, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coins. </h2>
            </div>
            <div>
                <DamageEffects playerAttackMove={props.playerAttackMove} playerDodgeMove={props.playerDodgeMove} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />
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
                <h2>You killed both enemies. They rewarded you with 15 (Hard coded) coins total. </h2>
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
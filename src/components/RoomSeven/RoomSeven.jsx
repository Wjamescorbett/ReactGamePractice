import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomSevenPNG from './GameRoomSevenPNG.png';

const RoomSeven = (props) => {
    if(props.roomSevenStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Seven</h2>
                </div>
            <div>
                <h2>You are encountering two dangerous Squares. </h2>
                <h2>The first square has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second dangerous square has {props.enemy2Health} health, {props.enemy2Attack} attack, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
                <button className="healMove">Heal</button>
            </div>
            <div>
                <img src={GameRoomSevenPNG} alt="GameRoomSevenPNG" />
            </div>
            </nav>
        )
    }

    if (props.roomSevenStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Seven</h2>
                </div>
            <div>
                <h2>You killed both dangerous squares. They rewarded you with {props.enemyReward} coins each. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomFive" >
                        <button className="roomButton" onClick={() => props.roomMovement(5)}>Go to room Five</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomSix" >
                    <button className="square" onClick={() => props.roomMovement(6)}>Go to room Six</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomNine">
                        <button className="circle" onClick={() => props.roomMovement(9)}>Go to room Nine</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomTen">
                        <button className="circle" onClick={() => props.roomMovement(10)}>Go to room Ten</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomSevenPNG} alt="GameRoomSevenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomSeven;
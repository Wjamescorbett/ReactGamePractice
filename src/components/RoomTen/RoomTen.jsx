import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTenPNG from './GameRoomTenPNG.png';

const RoomTen = (props) => {
    if(props.roomTenStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Ten</h2>
                </div>
            <div>
                <h2>You are encountering two very dangerous hexagons. </h2>
                <h2>The first hexagon has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second dangerous hexagon has {props.enemy2Health} health, {props.enemy2Attack} attack, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
                <button className="healMove">Heal</button>
            </div>
            <div>
                <img src={GameRoomTenPNG} alt="GameRoomTenPNG" />
            </div>
            </nav>
        )
    }

    if (props.roomTenStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Ten</h2>
                </div>
            <div>
                <h2>You killed both dangerous hexagons. They rewarded you with {props.enemyReward} coins each. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomSeven" >
                        <button className="gameBoardButton" onClick={() => props.roomMovement(7)}>Go to room Seven</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomTwelve" >
                    <button className="square" onClick={() => props.roomMovement(12)}>Go to room Twelve</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTenPNG} alt="GameRoomTenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomTen;
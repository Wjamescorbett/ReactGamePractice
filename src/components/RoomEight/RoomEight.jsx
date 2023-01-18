import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomEightPNG from './GameRoomEightPNG.png';

const RoomEight = (props) => {
    if(props.roomEightStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Eight</h2>
                </div>
            <div>
                <h2>You are encountering a BOSS pentagon. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coins. You can only kill this enemy one time and is keeping a chest full of goodies. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack</button>
                <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
                <button className="healMove">Heal</button>
            </div>
            <div>
                <img src={GameRoomEightPNG} alt="GameRoomEightPNG" />
            </div>
            </nav>
        )
    }

    if (props.roomEightStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Eight</h2>
                </div>
            <div>
                <h2>You killed the boss pentagon. It rewarded you with {props.enemyReward} coins and left a chest. </h2>
                <button className="openChest" onClick={() => props.openChest()}>Open Chest</button>
            </div>
            <ul>
                <li>
                    <Link to="/RoomSix" >
                    <button className="square" onClick={() => props.roomMovement(6)}>Go to room Six</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomEightPNG} alt="GameRoomEightPNG" />
            </div>
            </nav>
        )
    }
    if (props.roomEightStatus === 2) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Eight</h2>
                </div>
                <div>
                    <h2>You killed the boss pentagon. It rewarded you with {props.enemyReward} coins and left a chest. </h2>
                    <h2>You opened the chest in this room. It rewarded you with +15 health per health potion.</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/RoomSix" >
                        <button className="square" onClick={() => props.roomMovement(6)}>Go to room Six</button>
                        </Link>
                    </li>
                </ul>
                <div>
                    <img src={GameRoomEightPNG} alt="GameRoomEightPNG" />
                </div>
            </nav>
        )
    }
}

export default RoomEight;
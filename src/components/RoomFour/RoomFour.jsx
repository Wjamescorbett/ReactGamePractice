import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomFourPNG from './GameRoomFourPNG.png';

const RoomFour = (props) => {
    if(props.roomFourStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Four</h2>
                </div>
            <div>
                <h2>You are encountering a BOSS triangle. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coins. You can only kill this enemy one time and is keeping a chest full of goodies. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack</button>
                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
            </div>
            <div>
                <img src={GameRoomFourPNG} alt="GameRoomFourPNG" />
            </div>
            </nav>
        )
    }

    if (props.roomFourStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Four</h2>
                </div>
            <div>
                <h2>You killed the boss triangle. It rewarded you with {props.enemyReward} coins and left a chest. </h2>
                <button className="openChest" onClick={() => props.openChest()}>Open Chest</button>
            </div>
            <ul>
                <li>
                    <Link to="/RoomThree" >
                    <button className="square" onClick={() => props.roomMovement(3)}>Go to room Three</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomFourPNG} alt="GameRoomFourPNG" />
            </div>
            </nav>
        )
    }
    if (props.roomFourStatus === 2) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Four</h2>
                </div>
                <div>
                    <h2>You killed the boss triangle. It rewarded you with {props.enemyReward} and left a chest. </h2>
                    <h2>You opened the chest in this room. It rewarded you with +15 health per health potion.</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/RoomThree" >
                        <button className="square" onClick={() => props.roomMovement(3)}>Go to room Three</button>
                        </Link>
                    </li>
                </ul>
                <div>
                    <img src={GameRoomFourPNG} alt="GameRoomFourPNG" />
                </div>
            </nav>
        )
    }
}

export default RoomFour;
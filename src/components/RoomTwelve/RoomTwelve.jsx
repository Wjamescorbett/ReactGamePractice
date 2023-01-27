import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTwelvePNG from './GameRoomTwelvePNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";

const RoomTwelve = (props) => {
    if(props.roomTwelveStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Twelve</h2>
                </div>
            <div>
                <h2>You are encountering a BOSS Heptagon. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coins. You can only kill this enemy one time and is keeping a chest full of goodies. </h2>
            </div>
            <div>
                <DamageEffects playerAttackMove={props.playerAttackMove} playerDodgeMove={props.playerDodgeMove} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />
            </div>
            <div>
                <img src={GameRoomTwelvePNG} alt="GameRoomTwelvePNG" />
            </div>
            </nav>
        )
    }

    if (props.roomTwelveStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Twelve</h2>
                </div>
            <div>
                <h2>You killed the boss Heptagon. It rewarded you with {props.enemyReward} coins and left a chest. </h2>
                <button className="openChest" onClick={() => props.openChest()}>Open Chest</button>
            </div>
            <ul>
                <li>
                    <Link to="/RoomTen" >
                        <button className="square" onClick={() => props.roomMovement(10)}>Go to room Ten</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomEleven" >
                        <button className="square" onClick={() => props.roomMovement(11)}>Go to room Eleven</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTwelvePNG} alt="GameRoomTwelvePNG" />
            </div>
            </nav>
        )
    }
    if (props.roomTwelveStatus === 2) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Twelve</h2>
                </div>
                <div>
                    <h2>You killed the boss Heptagon. It rewarded you with {props.enemyReward} coins and left a chest. </h2>
                    <h2>You opened the chest in this room. It rewarded you with +15 health per health potion.</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/RoomTen" >
                            <button className="square" onClick={() => props.roomMovement(10)}>Go to room Ten</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/RoomEleven" >
                            <button className="square" onClick={() => props.roomMovement(11)}>Go to room Eleven</button>
                        </Link>
                    </li>
                </ul>
                <div>
                    <img src={GameRoomTwelvePNG} alt="GameRoomTwelvePNG" />
                </div>
            </nav>
        )
    }
}

export default RoomTwelve;
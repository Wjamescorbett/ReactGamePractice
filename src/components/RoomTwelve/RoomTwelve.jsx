import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTwelvePNG from './GameRoomTwelvePNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";


const RoomTwelve = (props) => {
    if(props.roomTwelveStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Twelve</h2>
                </div>
                <div>
                    <EnemyVisuals currentRoom={props.currentRoom}  enemyOne={props.enemyOne} enemyTwo={props.enemyTwo} enemyThree={props.enemyThree} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />
                </div>
                <div>
                    <DamageEffects useHealthPotion={props.useHealthPotion} resetRoomStatus={props.resetRoomStatus} startCombat={props.startCombat} startCombatCheck={props.startCombatCheck}  numberOfEnemiesInRoom={props.numberOfEnemiesInRoom}
                    playerAttacked={props.playerAttacked} playerAttackTimerState={props.playerAttackTimerState} playerAttackTimerStateMax={props.playerAttackTimerStateMax} playerAttackMove={props.playerAttackMove} 
                    playerAttackedCloseEnemy={props.playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={props.playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={props.playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove= {props.playerAttackCloseEnemyMove}
                    enemyOne={props.enemyOne} enemyTwo={props.enemyTwo} enemyThree={props.enemyThree} />
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
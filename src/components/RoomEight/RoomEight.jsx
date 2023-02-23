import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomEightPNG from './GameRoomEightPNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";


const RoomEight = (props) => {
    if(props.roomEightStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Eight</h2>
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
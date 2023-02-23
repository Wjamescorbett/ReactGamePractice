import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomElevenPNG from './GameRoomElevenPNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";


const RoomEleven = (props) => {
    
    if(props.roomElevenStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Eleven</h2>
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
                    <img src={GameRoomElevenPNG} alt="GameRoomElevenPNG" />
                </div>
            </nav>
        )
    }

    if (props.roomElevenStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Eleven</h2>
                </div>
            <div>
                <h2>You killed both dangerous hexagons. They rewarded you with {props.enemyReward} coins each. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomFive" >
                        <button className="gameBoardButton" onClick={() => props.roomMovement(5)}>Go to room Five</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomTwelve" >
                        <button className="square" onClick={() => props.roomMovement(12)}>Go to room Twelve</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomElevenPNG} alt="GameRoomElevenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomEleven;
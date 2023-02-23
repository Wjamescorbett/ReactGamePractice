import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomFivePNG from './GameRoomFivePNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";


const RoomFive = (props) => {
    if(props.roomFiveStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Five</h2>
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
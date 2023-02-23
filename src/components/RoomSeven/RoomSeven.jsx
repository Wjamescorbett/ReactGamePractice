import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomSevenPNG from './GameRoomSevenPNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";


const RoomSeven = (props) => {
    if(props.roomSevenStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Seven</h2>
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
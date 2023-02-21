import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomThreePNG from './GameRoomThreePNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";


const RoomThree = (props) => {
    if(props.roomThreeStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Three</h2>
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
                    <img src={GameRoomThreePNG} alt="GameRoomTwoPNG" />
                </div>
            </nav>
        )
    }

    if(props.roomThreeStatus === 1){
        return (
            <nav>
                <div>
                    <h2>This is Room Three</h2>
                </div>
                <div>
                    <h2>You killed the dangerous Square! It rewarded you with {props.enemyReward} coins.</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/RoomTwo" >
                            <button className="circle" onClick={() => props.roomMovement(2)}>Go to room Two</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/RoomFour" >
                            <button className="circle" onClick={() => props.roomMovement(4)}>Go to room Four</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/RoomFive" >
                            <button className="circle" onClick={() => props.roomMovement(5)}>Go to room Five</button>
                        </Link>
                    </li>
                </ul>
            <div>
                <img src={GameRoomThreePNG} alt="GameRoomOnePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomThree;
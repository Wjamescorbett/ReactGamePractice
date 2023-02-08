import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomSixPNG from './GameRoomSixPNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";

const RoomSix = (props) => {
    
    if(props.roomSixStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Six</h2>
                </div>
                <div>
                    <EnemyVisuals currentRoom={props.currentRoom} enemyOne={props.enemyOne} enemyTwo={props.enemyTwo} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />            
                </div>
                <div>
                    <DamageEffects resetRoomStatus={props.resetRoomStatus} useHealthPotion={props.useHealthPotion} playerAttacked={props.playerAttacked} playerAttackTimerState={props.playerAttackTimerState} playerAttackTimerStateMax={props.playerAttackTimerStateMax} startCombat={props.startCombat} startCombatCheck={props.startCombatCheck} playerAttackMove={props.playerAttackMove} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />
                </div>
                <div>
                    <img src={GameRoomSixPNG} alt="GameRoomSixPNG" />
                </div>
            </nav>
        )
    }

    if (props.roomSixStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Six</h2>
                </div>
            <div>
                <h2>You killed both dangerous circles. They rewarded you with {props.enemyReward} coins each. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomTwo" >
                        <button className="gameBoardButton" onClick={() => props.roomMovement(2)}>Go to room Two</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomSeven" >
                    <button className="square" onClick={() => props.roomMovement(7)}>Go to room Seven</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomEight">
                        <button className="circle" onClick={() => props.roomMovement(8)}>Go to room Eight</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomNine">
                        <button className="circle" onClick={() => props.roomMovement(9)}>Go to room Nine</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomSixPNG} alt="GameRoomSixPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomSix;
import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomNinePNG from './GameRoomNinePNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";

const RoomNine = (props) => {
    if(props.roomNineStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Nine</h2>
                </div>
                <div>
                    <EnemyVisuals currentRoom={props.currentRoom} enemyOne={props.enemyOne} enemyTwo={props.enemyTwo} enemyThree={props.enemyThree} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />            
                </div>
                <div>
                    <DamageEffects resetRoomStatus={props.resetRoomStatus} useHealthPotion={props.useHealthPotion} playerAttacked={props.playerAttacked} playerAttackTimerState={props.playerAttackTimerState} playerAttackTimerStateMax={props.playerAttackTimerStateMax} startCombat={props.startCombat} startCombatCheck={props.startCombatCheck} playerAttackMove={props.playerAttackMove} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />
                </div>
                <div>
                    <img src={GameRoomNinePNG} alt="GameRoomNinePNG" />
                </div>
            </nav>
        )
    }

    if (props.roomNineStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Nine</h2>
                </div>
            <div>
                <h2>You killed all the shapes. They rewarded you with 25 (Hard Coded number, might need to change after balancing) coins total. </h2>
            </div>
            <ul>
                <li>
                    <Link to="/RoomSix" >
                        <button className="roomButton" onClick={() => props.roomMovement(6)}>Go to room Six</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomSeven" >
                        <button className="roomButton" onClick={() => props.roomMovement(7)}>Go to room Seven</button>
                    </Link>
                </li>
            </ul>
            <div>=
                <img src={GameRoomNinePNG} alt="GameRoomNinePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomNine;

{/* <div>
                <h2>You are encountering three different shapes! Be careful and think about what you should attack first. </h2>
                <h2>Enemy one is a Semi-Circle, it has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second enemy is a Parallelogram, it has {props.enemy2Health} health, {props.enemy2Attack} attack, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
                <h2>The third enemy is a Trapezium, it has {props.enemy3Health} health, {props.enemy3Attack} attack, {props.enemy3Speed} speed, {props.enemy3Armor} armor, and will reward you with {props.enemy3Reward} coin. </h2>
            </div> */}
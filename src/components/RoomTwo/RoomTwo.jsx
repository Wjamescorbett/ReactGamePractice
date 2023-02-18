import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import GameRoomTwoPNG from './GameRoomTwoPNG.png';
import DamageEffects from "../DamageEffects/DamageEffects";
import EnemyVisuals from "../EnemyVisuals/EnemyVisuals";
import { Container } from "react-bootstrap";
// import { motion } from "framer-motion"
// import { motion } from 'framer-motion/dist/framer-motion'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RoomTwo = (props) => {

    if(props.roomTwoStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Two</h2>
                </div>
                <div>
                    <EnemyVisuals currentRoom={props.currentRoom}  enemyOne={props.enemyOne} enemyTwo={props.enemyTwo} enemyThree={props.enemyThree} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} />
                </div>
                <div>
                    <DamageEffects useHealthPotion={props.useHealthPotion} resetRoomStatus={props.resetRoomStatus} playerAttacked={props.playerAttacked} playerAttackTimerState={props.playerAttackTimerState} playerAttackTimerStateMax={props.playerAttackTimerStateMax} startCombat={props.startCombat} startCombatCheck={props.startCombatCheck} playerAttackMove={props.playerAttackMove} playerAttackClosestEnemyMove= {props.playerAttackClosestEnemyMove} numberOfEnemiesInRoom={props.numberOfEnemiesInRoom} playerAttackedCloseEnemy={props.playerAttackedCloseEnemy} />
                </div>
                <div>
                    <img src={GameRoomTwoPNG} alt="GameRoomTwoPNG" />
                </div>
            </nav>
        )
    }

    if (props.roomTwoStatus === 1 ) {
        return(
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Two</h2>
                </div>
            <div>
                <h2>You killed a dangerous circle. It rewarded you with {props.enemyOne.enemyReward} coin. </h2>
            </div>
                <Link to="/GameBoard" >
                    <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Go to room One</button>
                </Link>
                <Link to="/RoomThree" >
                <button className="square" onClick={() => props.roomMovement(3)}>Go to room Three</button>
                </Link>
                <Link to="/RoomSix">
                    <button className="circle" onClick={() => props.roomMovement(6)}>Go to room Six</button>
                </Link>
            <div>
                <img src={GameRoomTwoPNG} alt="GameRoomTwoPNG" />
            </div>
            </nav>
        )
    }
    else{
        return(
            <h1>Room Two Status</h1>
        )
    }
}

export default RoomTwo;

// enemyHealth={props.enemyHealth} enemyMaxHealth={props.enemyMaxHealth} enemyAttackLow={props.enemyAttackLow} enemyAttackHigh={props.enemyAttackHigh} enemySpeed={props.enemySpeed} enemyMaxSpeed={props.enemyMaxSpeed} enemyArmor={props.enemyArmor} enemyReward={props.enemyReward}
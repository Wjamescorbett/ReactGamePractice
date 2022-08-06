import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTwoPNG from './GameRoomTwoPNG.png';

const RoomTwo = (props) => {
    if(props.roomTwoStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Two</h2>
                </div>
            <div>
                <h2>You are encountering a dangerous circle. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove()}>Attack</button>
                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
            </div>
            <ul>
                    <Link to="/GameBoard" >
                        <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Go to room One</button>
                    </Link>
                <li>
                    <Link to="/RoomThree" >
                        <button className="square" onClick={() => props.createEnemy(15, 4, 1, 2, 2)}>Go to room Three</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomSix">Link to RoomSix</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTwoPNG} alt="GameRoomOnePNG" />
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
                <h2>You killed a dangerous circle. It rewarded you with {props.enemyReward} coin. </h2>
                {/* <button className="circle" onClick={() => makeCircleEnemy(20, 2, 0, 1)}>EncounterCircleEnemy</button> */}
            </div>
            <ul>
                <li>
                    <Link to="/GameBoard" >
                        <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Go to room One</button>
                    </Link>
                </li>
                <li>
                    <Link to="/RoomThree">Link to RoomThree</Link>
                </li>
                <li>
                    <Link to="/RoomSix">Link to RoomSix</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTwoPNG} alt="GameRoomOnePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomTwo;
import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomThreePNG from './GameRoomThreePNG.png';

const RoomThree = (props) => {
    if(props.roomThreeStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Three</h2>
                </div>
            <div>
                <h2>You are encountering a dangerous Square. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coins. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove()}>Attack</button>
                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
            </div>

            <div>
                <img src={GameRoomThreePNG} alt="GameRoomOnePNG" />
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
                <Link to="/RoomFour" >
                        <button className="circle" onClick={() => props.roomMovement(4)}>Go to room Four</button>
                    </Link>
                <li>
                    <Link to="/RoomFive">Link to RoomFive</Link>
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
import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomThreePNG from './GameRoomThreePNG.png';

const RoomThree = (props) => {
    if(props.roomThreeStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is The GameBoard Room Three</h2>
                </div>
            <div>
                <h2>You are encountering a dangerous Square. It has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coins. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove()}>Attack</button>
                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
            </div>
            <ul>
                    <Link to="/RoomTwo" >
                        <button className="roomButton">Go to room Two</button>
                    </Link>
                <li>
                    <Link to="/RoomFour">Link to RoomFour</Link>
                </li>
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
        // return (
        //     <nav>
        //     <div>
        //         <h2>This Is The GameBoard Room Three</h2>
        //         <h2>Change-----------Here</h2>
        //     </div>
        //     <h1>filler</h1>
        //     <ul>
        //         <li>
        //             <Link to="/RoomTwo" >
        //                 <button className="circle" onClick={() => props.createCircleEnemy(20, 2, 0, 1, 1)}>Go to room Two</button>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/RoomFour">Link to RoomFour</Link>
        //         </li>
        //         <li>
        //             <Link to="/RoomFive">Link to RoomFive</Link>
        //         </li>
        //     </ul>
        //     <div>
        //         <img src={GameRoomThreePNG} alt="GameRoomThreePNG" />
        //     </div>
        //     </nav>
        // )
}

export default RoomThree;
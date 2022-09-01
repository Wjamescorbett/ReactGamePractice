import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomNinePNG from './GameRoomNinePNG.png';

const RoomNine = (props) => {
    if(props.roomNineStatus === 0){
        return (
            <nav>
                <div>
                    <h2>This Is Room Nine</h2>
                </div>
            <div>
                <h2>You are encountering two dangerous Squares. </h2>
                <h2>The first square has {props.enemyHealth} health, {props.enemyAttack} attack, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second dangerous square has {props.enemy2Health} health, {props.enemy2Attack} attack, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
            </div>
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                <button className="attackMove" onClick={() => props.playerAttackMove(3)}>Attack enemy 3</button>

                <button className="dodgeMove">Dodge</button>
                <button className="healMove">Heal</button>
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
                <h2>You killed both dangerous squares. They rewarded you with {props.enemyReward} coins each. </h2>
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
            <div>
                <img src={GameRoomNinePNG} alt="GameRoomNinePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomNine;
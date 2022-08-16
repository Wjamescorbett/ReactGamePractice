import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomOnePNG from './GameRoomOnePNG.png';

const GameBoard = (props) => {

        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room One</h2>
                <h5>It is the first "bonfire"</h5>
                <h2>Here is the store! Spend coins to upgrade yourself.</h2>
            </div>
            <ul>
                <h3>Health is 5 coins. (Gives you +10 max health) </h3>
                <li>
                    <button className="storeButton" onClick={() => props.buyFromStore("health")}> Buy 10 Health </button>
                </li>
                <h3>Attack is 3 coins. (Upgrades your attack by 1) </h3>
                <li>
                    <button className="storeButton" onClick={() => props.buyFromStore("attack")}> Buy 1 Attack </button>
                </li>
                <h3>Speed is 2 coins. (Upgrades your speed by 1) </h3>
                <li>
                    <button className="storeButton" onClick={() => props.buyFromStore("speed")}> Buy 1 Speed </button>
                </li>
                <h3>Armor is 3 coins. (Upgrades your armor by 1) </h3>
                <li>
                    <button className="storeButton" onClick={() => props.buyFromStore("armor")}> Buy 1 Armor </button>
                </li>
                <h3>Health Potion is 2 coins. (Gives you another health potion, max 10) </h3>
                <li>
                    <button className="storeButton" onClick={() => props.buyFromStore("healthPotion")}> Buy 1 Health Potion </button>
                </li>
                <h3>Stamina Potion is 1 coin. (Gives you another stamina potion, max 8) </h3>
                <li>
                    <button className="storeButton" onClick={() => props.buyFromStore("staminaPotion")}> Buy 1 Stamina Potion </button>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/RoomTwo" >
                        <button className="circle" onClick={() => props.roomMovement(2)}>Go to room Two</button>
                    </Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomOnePNG} alt="GameRoomOnePNG" />
            </div>
            </nav>
        )
    }

export default GameBoard;
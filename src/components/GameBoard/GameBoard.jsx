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
                <h3>Health is 5 coins.</h3>
                <li>
                    <button className="storeButton"> Buy 10 Health </button>
                </li>
                <h3>Attack is 3 coins.</h3>
                <li>
                    <button className="storeButton"> Buy 1 Attack </button>
                </li>
                <h3>Speed is 2 coins.</h3>
                <li>
                    <button className="storeButton"> Buy 1 Speed </button>
                </li>
                <h3>Armor is 3 coins.</h3>
                <li>
                    <button className="storeButton"> Buy 1 Armor </button>
                </li>
                <h3>Health Potion is 2 coins.</h3>
                <li>
                    <button className="storeButton"> Buy 1 Health Potion </button>
                </li>
                <h3>Stamina Potion is 1 coin.</h3>
                <li>
                    <button className="storeButton"> Buy 1 Stamina Potion </button>
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
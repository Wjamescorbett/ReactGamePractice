import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomOnePNG from './GameRoomOnePNG.png';

const GameBoard = (props) => {

        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room One</h2>
                <h5>It is the first "bonfire"</h5>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomTwo" >
                        <button className="circle" onClick={() => {
                            props.createEnemy(20, 2, 0, 1, 1)
                            props.roomMovement()
                            }}>Go to room Two</button>
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
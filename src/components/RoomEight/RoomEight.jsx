import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomEightPNG from './GameRoomEightPNG.png';

class RoomEight extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Eight</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomSix">Link to RoomSix</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomEightPNG} alt="GameRoomEightPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomEight;
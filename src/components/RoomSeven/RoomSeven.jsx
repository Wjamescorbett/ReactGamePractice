import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomSevenPNG from './GameRoomSevenPNG.png';

class RoomSeven extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Seven</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomFive">Link to RoomFive</Link>
                </li>
                <li>
                    <Link to="/RoomSix">Link to RoomSix</Link>
                </li>
                <li>
                    <Link to="/RoomNine">Link to RoomNine</Link>
                </li>
                <li>
                    <Link to="/RoomTen">Link to RoomTen</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomSevenPNG} alt="GameRoomSevenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomSeven;
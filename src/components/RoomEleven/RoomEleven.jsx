import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomElevenPNG from './GameRoomElevenPNG.png';

class RoomEleven extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Eleven</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomFive">Link to RoomFive</Link>
                </li>
                <li>
                    <Link to="/RoomTwelve">Link to RoomTwelve</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomElevenPNG} alt="GameRoomElevenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomEleven;
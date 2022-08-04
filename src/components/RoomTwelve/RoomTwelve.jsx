import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTwelvePNG from './GameRoomTwelvePNG.png';

class RoomTwelve extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Twelve</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomTen">Link to RoomTen</Link>
                </li>
                <li>
                    <Link to="/RoomEleven">Link to RoomEleven</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTwelvePNG} alt="GameRoomTenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomTwelve;
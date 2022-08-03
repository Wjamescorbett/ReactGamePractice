import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTenPNG from './GameRoomTenPNG.png';

class RoomTen extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Ten</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomSeven">Link to RoomSeven</Link>
                </li>
                <li>
                    <Link to="/RoomTwelve">Link to RoomTwelve</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTenPNG} alt="GameRoomTenPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomTen;
import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomFivePNG from './GameRoomFivePNG.png';

class RoomFive extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Five</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomThree">Link to RoomThree</Link>
                </li>
                <li>
                    <Link to="/RoomSeven">Link to RoomSeven</Link>
                </li>
                <li>
                    <Link to="/RoomEleven">Link to RoomEleven</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomFivePNG} alt="GameRoomFivePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomFive;
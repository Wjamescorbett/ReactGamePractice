import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomThreePNG from './GameRoomThreePNG.png';

class RoomThree extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Three</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomTwo">Link to RoomTwo</Link>
                </li>
                <li>
                    <Link to="/RoomFour">Link to RoomFour</Link>
                </li>
                <li>
                    <Link to="/RoomFive">Link to RoomFive</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomThreePNG} alt="GameRoomThreePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomThree;
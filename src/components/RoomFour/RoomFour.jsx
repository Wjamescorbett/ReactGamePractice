import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomFourPNG from './GameRoomFourPNG.png';

class RoomFour extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Four</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomThree">Link to RoomThree</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomFourPNG} alt="GameRoomFourPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomFour;
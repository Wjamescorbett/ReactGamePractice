import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomNinePNG from './GameRoomNinePNG.png';

class RoomNine extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Nine</h2>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomSix">Link to RoomSix</Link>
                </li>
                <li>
                    <Link to="/RoomSeven">Link to RoomSeven</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomNinePNG} alt="GameRoomNinePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomNine;
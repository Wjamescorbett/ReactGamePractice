import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomSixPNG from './GameRoomSixPNG.png';

class RoomSix extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Six</h2>
                <h5>It is the first "bonfire"</h5>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomTwo">Link to RoomTwo</Link>
                </li>
                <li>
                    <Link to="/RoomSeven">Link to RoomSeven</Link>
                </li>
                <li>
                    <Link to="/RoomEight">Link to RoomEight</Link>
                </li>
                <li>
                    <Link to="/RoomNine">Link to RoomNine</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomSixPNG} alt="GameRoomSixPNG" />
            </div>
            </nav>
        )
    }
}

export default RoomSix;
import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomTwoPNG from './GameRoomTwoPNG.png';

class RoomTwo extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room Two</h2>
                <h5>It is the first "bonfire"</h5>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomThree">Link to RoomThree</Link>
                </li>
            </ul>
            <div>
                <img src={GameRoomTwoPNG} alt="GameRoomOnePNG" />
            </div>
            </nav>
        )
    }
}

export default RoomTwo;
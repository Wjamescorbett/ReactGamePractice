import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GameRoomThreePNG from './GameRoomThreePNG.png'

class RoomThree extends Component {

    render() {
        return (
            <div>
                <h2>This Is The GameBoard Room Three</h2>
                <h5>This will be connected to RoomTwo.</h5>
                <h2>Change-----------Here</h2>
                <div>
                    <img src={GameRoomThreePNG} alt="GameRoomOnePNG" />
                </div>
            </div>
            
        )
    }
}

export default RoomThree;
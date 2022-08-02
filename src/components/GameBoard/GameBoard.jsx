import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class GameBoard extends Component {

    render() {
        return (
            <nav>
            <div>
                <h2>This Is The GameBoard Room One</h2>
                <h5>It is the first "bonfire"</h5>
                <h2>Change-----------Here</h2>
            </div>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/RoomTwo">Link to RoomTwo</Link>
                </li>
            </ul>
            </nav>
        )
    }
}

export default GameBoard;
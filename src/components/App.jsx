import React, { Component } from 'react';
import TopBar from './TopBar/TopBar';
import GameBoard from './GameBoard/GameBoard';
import axios from 'axios';
import './App.css'



class App extends Component {
    render(){

    return(
        <div>
            <div className="header">
                <TopBar/>
            </div>
            <ul className="satrtLocation">
                <li><a href='/roomOne'> This goes to room one.</a></li>
                <li><a href='/roomTwo'> This goes to room two.</a></li>
            </ul>
            <div className="gameboard">
                <GameBoard/>
            </div>
        </div>
        )
    }
}

export default App;
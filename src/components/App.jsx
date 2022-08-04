import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar'
import Layout from './Layout/Layout';
import GameBoard from './GameBoard/GameBoard';
import RoomTwo from './RoomTwo/RoomTwo';
import RoomThree from './RoomThree/RoomThree';
import RoomFour from './RoomFour/RoomFour';
import RoomFive from './RoomFive/RoomFive';
import RoomSix from './RoomSix/RoomSix';
import RoomSeven from './RoomSeven/RoomSeven';
import RoomEight from './RoomEight/RoomEight';
import RoomNine from './RoomNine/RoomNine';
import RoomTen from './RoomTen/RoomTen';
import RoomEleven from './RoomEleven/RoomEleven';
import RoomTwelve from './RoomTwelve/RoomTwelve';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerHealth: 0,
            playerAttack: 0,
            playerSpeed: 0,
            enemyHealth: 0,
            enemyAttack: 0,
            enemySpeed: 0,
        }
    }

    pickClass = (health, attack, speed) => {
        console.log(health, attack, speed)
        this.setState({
            playerHealth: health,
            playerAttack: attack,
            playerSpeed: speed,
    })
    }

    render() {
        return(
            <BrowserRouter>
            <Navbar playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} />
                <Routes>
                    <Route path="/" element={<Layout playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} pickClass={this.pickClass} />} />
                    <Route path="/GameBoard" element={<GameBoard />} />
                    <Route path="/RoomTwo" element={<RoomTwo />} />
                    <Route path="/RoomThree" element={<RoomThree />} />
                    <Route path="/RoomFour" element={<RoomFour />} />
                    <Route path="/RoomFive" element={<RoomFive />} />
                    <Route path="/RoomSix" element={<RoomSix />} />
                    <Route path="/RoomSeven" element={<RoomSeven />} />
                    <Route path="/RoomEight" element={<RoomEight />} />
                    <Route path="/RoomNine" element={<RoomNine />} />
                    <Route path="/RoomTen" element={<RoomTen />} />
                    <Route path="/RoomEleven" element={<RoomEleven />} />
                    <Route path="/RoomTwelve" element={<RoomTwelve />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
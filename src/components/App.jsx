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
            playerArmor: 0,
            playerCoins: 0,
            enemyHealth: 0,
            enemyAttack: 0,
            enemySpeed: 0,
            enemyArmor: 0,
            enemyReward: 0,
            roomTwoStatus: 0,
        }
    }

    resetRoomStatus = () => {
        this.setState({
            roomTwoStatus: 0,
        })
    }

    pickClass = (health, attack, speed, armor, coins) => {
        console.log(health, attack, speed, armor, coins)
        this.setState({
            playerHealth: health,
            playerAttack: attack,
            playerSpeed: speed,
            playerArmor: armor,
            playerCoins: coins,
        })
    }

    createCircleEnemy = (health, attack, speed, armor, reward) => {
        this.setState({
            enemyHealth: health,
            enemyAttack: attack,
            enemySpeed: speed,
            enemyArmor: armor,
            enemyReward: reward,
        })
    }

    playerAttackMove = () => {
        var playerDamage = 0
        var currentPlayerAttack = this.state.playerAttack - this.state.enemyArmor
        if(currentPlayerAttack <= 0){
            playerDamage = 1
        }
        else{
            playerDamage = currentPlayerAttack
            currentPlayerAttack = playerDamage
        }
        this.setState({
        enemyHealth: this.state.enemyHealth - playerDamage,
        })
        this.deadCheck(currentPlayerAttack)
    }

    deadCheck = (playerLastAttack) => {
        if(this.state.enemyHealth - playerLastAttack <= 0){
            this.setState({
                playerCoins: this.state.playerCoins + this.state.enemyReward,
                roomTwoStatus: 1,
            })
        }
    }

    typeOfEnemyAttack = () => {

    }

    render() {
        return(
            <BrowserRouter>
            <Navbar playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} playerArmor={this.state.playerArmor} playerCoins={this.state.playerCoins} resetRoomStatus={this.resetRoomStatus} />
                <Routes>
                    <Route path="/" element={<Layout playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} playerDefense={this.state.playerArmor} playerCoins={this.state.playerCoins} pickClass={this.pickClass} />} />
                    <Route path="/GameBoard" element={<GameBoard createCircleEnemy={this.createCircleEnemy} />} />
                    <Route path="/RoomTwo" element={<RoomTwo createCircleEnemy={this.createCircleEnemy} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} roomTwoStatus={this.state.roomTwoStatus} resetRoomStatus={this.resetRoomStatus} />} />
                    <Route path="/RoomThree" element={<RoomThree createCircleEnemy={this.createCircleEnemy} />} />
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
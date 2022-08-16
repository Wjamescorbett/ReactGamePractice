import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
            maxPlayerHealth: 0,
            playerAttack: 0,
            playerSpeed: 0,
            maxPlayerSpeed: 0,
            playerArmor: 0,
            playerCoins: 0,
            enemyHealth: 0,
            enemyAttack: 0,
            enemySpeed: 0,
            enemyArmor: 0,
            enemyReward: 0,
            roomTwoStatus: 0,
            roomThreeStatus: 0,
            roomFourStatus: 0,
            roomFiveStatus: 0,
            roomSixStatus: 0,
            currentRoom: 0,
            currentRoomStatus: 0,
        }
    }

    resetRoomStatus = () => {
        this.setState({
            roomTwoStatus: 0,
            roomThreeStatus: 0,
            roomFourStatus: 0,
            roomFiveStatus: 0,
            roomSixStatus: 0,
            playerSpeed: this.state.maxPlayerSpeed,
        })
    }

    pickClass = (health, maxHealth, attack, speed, maxSpeed, armor, coins) => {
        console.log(health, maxHealth, attack, speed, maxSpeed, armor, coins)
        this.setState({
            playerHealth: health,
            maxPlayerHealth: maxHealth,
            playerAttack: attack,
            playerSpeed: speed,
            maxPlayerSpeed: maxSpeed,
            playerArmor: armor,
            playerCoins: coins,
        })
    }

    createEnemy = (health, attack, speed, armor, reward) => {
        this.setState({
            enemyHealth: health,
            enemyAttack: attack,
            enemySpeed: speed,
            enemyArmor: armor,
            enemyReward: reward,
        })
    }

    playerHasNoSpeed = () => {
        alert("You have no more speed! You took 10 damage. Return to Room One to regain your speed.")
        this.setState({
            playerHealth: this.state.playerHealth - 10,
        })
    }

    roomMovement = (currentRoom) => {
        if(this.state.playerSpeed > 0){
            this.setState({
                currentRoom: currentRoom,
                playerSpeed: this.state.playerSpeed - 1,
            })
            if(currentRoom === 2 & this.state.roomTwoStatus === 0){
            this.createEnemy(20, 2, 0, 1, 1)
            }
            if(currentRoom === 3){
                this.createEnemy(15, 4, 1, 2, 2)
            }
            if(currentRoom === 4){
                this.createEnemy(50, 5, 4, 3, 30)
            }
        }
        else{
            this.playerHasNoSpeed()
        }
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
        if(this.state.enemyHealth - currentPlayerAttack >= 0) {
            this.enemyAttack()
        }
    }

    deadCheck = (playerLastAttack) => {
        if(this.state.enemyHealth - playerLastAttack <= 0){
            this.setState({
                playerCoins: this.state.playerCoins + this.state.enemyReward,
            })
            this.setCurrentRoomStatusClearEnemy()
        }
    }

    setCurrentRoomStatusClearEnemy = () => {
        if(this.state.currentRoom === 2){
            this.setState({
                roomTwoStatus: 1,
            })
        }
        if(this.state.currentRoom === 3){
            this.setState({
                roomThreeStatus: 1,
            })
        }
    }

    typeOfEnemyAttack = () => {

    }

    enemyAttack = () => {
        var enemyDamage = 0
        var currentEnemyAttack = this.state.enemyAttack - this.state.playerArmor
        if(currentEnemyAttack <= 0){
            enemyDamage = 1
        }
        else{
            enemyDamage = currentEnemyAttack
            currentEnemyAttack = enemyDamage
        }
        this.setState({
            playerHealth: this.state.playerHealth - enemyDamage,
        })
    }

    render() {
        return(
            <BrowserRouter>
            <Navbar playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} playerArmor={this.state.playerArmor} playerCoins={this.state.playerCoins} resetRoomStatus={this.resetRoomStatus} />
                <Routes>
                    <Route path="/" element={<Layout playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} playerDefense={this.state.playerArmor} playerCoins={this.state.playerCoins} pickClass={this.pickClass} />} />
                    <Route path="/GameBoard" element={<GameBoard roomMovement={this.roomMovement} createEnemy={this.createEnemy} />} />
                    <Route path="/RoomTwo" element={<RoomTwo roomMovement={this.roomMovement} createEnemy={this.createEnemy} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} roomTwoStatus={this.state.roomTwoStatus} resetRoomStatus={this.resetRoomStatus} />} />
                    <Route path="/RoomThree" element={<RoomThree roomMovement={this.roomMovement} createEnemy={this.createEnemy} playerAttackMove={this.playerAttackMove} roomThreeStatus ={this.state.roomThreeStatus} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} />
                    <Route path="/RoomFour" element={<RoomFour roomFourStatus={this.state.roomFourStatus} roomMovement={this.roomMovement} createEnemy={this.createEnemy} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} />
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
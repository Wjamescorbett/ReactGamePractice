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
            playerHealthPotion: 0,
            playerStaminaPotion: 0,
            healthPotionEffect: 25,
            enemyAlive: 0,
            enemyHealth: 0,
            enemyAttack: 0,
            enemySpeed: 0,
            enemyArmor: 0,
            enemyReward: 0,
            enemyRewardCheck: 0,
            enemy2Health: 0,
            enemy2Attack: 0,
            enemy2Speed: 0,
            enemy2Armor: 0,
            enemy2Reward: 0,
            enemy2RewardCheck: 0,
            enemy3Health: 0,
            enemy3Attack: 0,
            enemy3Speed: 0,
            enemy3Armor: 0,
            enemy3Reward: 0,
            enemy3RewardCheck: 0,
            roomTwoStatus: 0,
            roomThreeStatus: 0,
            roomFourStatus: 0,
            roomFiveStatus: 0,
            roomSixStatus: 0,
            roomSevenStatus: 0,
            roomEightStatus: 0,
            roomNineStatus: 0,
            roomTenStatus: 0,
            roomElevenStatus: 0,
            roomTwelveStatus:0,
            currentRoom: 0,
            currentRoomStatus: 0,
        }
    }

    devButton = () => {
        this.setState({
            playerHealth: this.state.maxPlayerHealth,
            playerAttack: this.state.playerAttack + 5,
            playerCoins: this.state.playerCoins + 100,
        })
    }

    useHealthPotion = () => {
        if(this.state.playerHealthPotion <= 0){
            return(alert("You are out of health potions!"))
        }
        if(this.state.playerHealth + this.state.healthPotionEffect > this.state.maxPlayerHealth){
            this.setState({
                playerHealthPotion: this.state.playerHealthPotion - 1,
                playerHealth: this.state.maxPlayerHealth,
            })
        } else {
            this.setState({
                playerHealthPotion: this.state.playerHealthPotion - 1,
                playerHealth: this.state.playerHealth + this.state.healthPotionEffect,
            })
        }
    }

    useStaminaPotion = () => {
        if(this.state.playerStaminaPotion <= 0){
            return(alert("You are out of stamina potions!"))
        }
        if(this.state.playerSpeed === this.state.maxPlayerSpeed){
            return(alert("You're already at max speed!"))
        } else {
            this.setState({
                playerStaminaPotion: this.state.playerStaminaPotion - 1,
                playerSpeed: this.state.maxPlayerSpeed,
            })
        }
    }

    buyFromStore = (item) => {
        if(item === "health"){
            if(this.state.playerCoins >= 5){
                this.setState({
                    playerCoins: this.state.playerCoins - 5,
                    maxPlayerHealth: this.state.maxPlayerHealth + 10,
                })
            } else {
                alert("You can't afford a health upgrade.")
            }
        }
        if(item === "attack"){
            if(this.state.playerCoins >= 3){
                this.setState({
                    playerCoins: this.state.playerCoins - 3,
                    playerAttack: this.state.playerAttack + 1,
                })
            } else {
                alert("You can't afford an attack upgrade.")
            }
        }
        if(item === "speed"){
            if(this.state.playerCoins >= 2){
                this.setState({
                    playerCoins: this.state.playerCoins - 2,
                    playerSpeed: this.state.playerSpeed + 1,
                })
            } else {
                alert("You can't afford a speed upgrade.")
            }
        }
        if(item === "armor"){
            if(this.state.playerCoins >= 3){
                this.setState({
                    playerCoins: this.state.playerCoins - 3,
                    playerArmor: this.state.playerArmor + 1,
                })
            } else {
                alert("You can't afford an armor upgrade.")
            }
        }
        if(item === "healthPotion"){
            if(this.state.playerHealthPotion >= 10){
                return (alert ("You can only have up to ten health potions."))
            }
            if(this.state.playerCoins >= 2){
                this.setState({
                    playerCoins: this.state.playerCoins - 2,
                    playerHealthPotion: this.state.playerHealthPotion + 1,
                })
            } else {
                alert("You can't afford a health potion.")
            }
        }
        if(item === "staminaPotion"){
            if(this.state.playerStaminaPotion >= 8){
                return (alert("You can only have up to eight stamina potions."))
            }
            if(this.state.playerCoins >= 1){
                this.setState({
                    playerCoins: this.state.playerCoins - 1,
                    playerStaminaPotion: this.state.playerStaminaPotion + 1,
                })
            } else {
                alert("You can't afford a stamina potion.")
            }
        }
    }

    resetRoomStatus = () => {
        this.setState({
            roomTwoStatus: 0,
            roomThreeStatus: 0,
            roomFiveStatus: 0,
            roomSixStatus: 0,
            roomSevenStatus: 0,
            roomNineStatus: 0,
            roomTenStatus: 0,
            roomElevenStatus: 0,
            enemyRewardCheck: 0,
            enemy2RewardCheck: 0,
            enemy3RewardCheck: 0,
            playerSpeed: this.state.maxPlayerSpeed,

        })
    }

    pickClass = (health, maxHealth, attack, speed, maxSpeed, armor, coins, healthPotion, staminaPotion) => {
        console.log(health, maxHealth, attack, speed, maxSpeed, armor, coins, healthPotion, staminaPotion)
        this.setState({
            playerHealth: health,
            maxPlayerHealth: maxHealth,
            playerAttack: attack,
            playerSpeed: speed,
            maxPlayerSpeed: maxSpeed,
            playerArmor: armor,
            playerCoins: coins,
            playerHealthPotion: healthPotion,
            playerStaminaPotion: staminaPotion,
        })
    }

    createEnemy = (health, attack, speed, armor, reward, health2, attack2, speed2, armor2, reward2, health3, attack3, speed3, armor3, reward3) => {
        this.setState({
            enemyHealth: health,
            enemyAttack: attack,
            enemySpeed: speed,
            enemyArmor: armor,
            enemyReward: reward,
            enemy2Health: health2,
            enemy2Attack: attack2,
            enemy2Speed: speed2,
            enemy2Armor: armor2,
            enemy2Reward: reward2,
            enemy3Health: health3,
            enemy3Attack: attack3,
            enemy3Speed: speed3,
            enemy3Armor: armor3,
            enemy3Reward: reward3,
        })
    }

    playerHasNoSpeed = () => {
        alert("You have no more speed! You took 10 damage. Return to Room One or use a stamina potion to regain your speed.")
        this.setState({
            playerHealth: this.state.playerHealth - 10,
            enemyRewardCheck: 0,
            enemy2RewardCheck: 0,
            enemy3RewardCheck: 0,
        })
    }

    roomMovement = (currentRoom) => {
        if(this.state.playerSpeed > 0){
            this.setState({
                currentRoom: currentRoom,
                playerSpeed: this.state.playerSpeed - 1,
                enemyRewardCheck: 0,
                enemy2RewardCheck: 0,
                enemy3RewardCheck: 0,
            })
        }
        if(this.state.playerSpeed <= 0){
            this.playerHasNoSpeed()
        }
        if(currentRoom === 2 & this.state.roomTwoStatus === 0){
            this.createEnemy(20, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            }
        if(currentRoom === 3 & this.state.roomThreeStatus === 0){
            this.createEnemy(15, 4, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
        if(currentRoom === 4 & this.state.roomFourStatus === 0){
            this.createEnemy(50, 5, 4, 3, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
        if(currentRoom === 6 & this.state.roomSixStatus === 0){
            this.createEnemy(20, 2, 0, 1, 1, 20, 2, 0, 1, 1, 0, 0, 0, 0, 0)
        }
        if(currentRoom === 7 & this.state.roomSevenStatus === 0){
            this.createEnemy(15, 4, 1, 2, 2, 15, 4, 1, 2, 2, 0, 0, 0, 0, 0)
        }
        if(currentRoom === 8 & this.state.roomEightStatus === 0){
            this.createEnemy(80, 6, 3, 4, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
        if(currentRoom === 9 & this.state.roomNineStatus === 0){
            this.createEnemy(30, 4, 2, 2, 10, 15, 10, 0, 0, 5, 25, 4, 0, 5, 10)
        }
    }

    playerAttackMove = (attackEnemy) => {
        var currentPlayerAttack = 0
        if(attackEnemy === 1 & this.state.enemyHealth <= 0){
            this.deadCheck(currentPlayerAttack, attackEnemy)
            alert("You killed this enemy!")
        }
        if(attackEnemy === 1 & this.state.enemyHealth > 0){
            currentPlayerAttack = this.state.playerAttack - this.state.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            this.playerAttackMoveSetState(1, currentPlayerAttack)
            this.deadCheck(currentPlayerAttack, attackEnemy)
        }
        if(attackEnemy === 2 & this.state.enemy2Health <= 0){
            this.deadCheck(currentPlayerAttack, attackEnemy)
            alert("You killed this enemy!")
        }
        if(attackEnemy === 2 & this.state.enemy2Health > 0){
            currentPlayerAttack = this.state.playerAttack - this.state.enemy2Armor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            this.playerAttackMoveSetState(2, currentPlayerAttack)
            this.deadCheck(currentPlayerAttack, attackEnemy)
        }
        if(attackEnemy === 3 & this.state.enemy3Health <= 0){
            this.deadCheck(currentPlayerAttack, attackEnemy)
            alert("You killed this enemy!")
        }
        if(attackEnemy === 3 & this.state.enemy3Health > 0){
            currentPlayerAttack = this.state.playerAttack - this.state.enemy3Armor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            this.playerAttackMoveSetState(3, currentPlayerAttack)
            this.deadCheck(currentPlayerAttack, attackEnemy)
        }
        // this.deadCheck(currentPlayerAttack)
    }

    playerAttackMoveSetState = (attackEnemyNumber, currentPlayerAttack) => {
        if(attackEnemyNumber === 1){
            this.setState({
                enemyHealth: this.state.enemyHealth - currentPlayerAttack,
                })
        }
        if(attackEnemyNumber === 2){
            this.setState({
                enemy2Health: this.state.enemy2Health - currentPlayerAttack,
                })
        }
        if(attackEnemyNumber === 3){
            this.setState({
                enemy3Health: this.state.enemy3Health - currentPlayerAttack,
                })
        }
    }

    deadCheckSetState = (enemyNumber) => {
        if(enemyNumber === 1){
            this.setState({
                playerCoins: this.state.playerCoins + this.state.enemyReward,
                enemyRewardCheck: 1,
                enemyHealth: 0,
            })
        }
        if(enemyNumber === 2){
            this.setState({
                playerCoins: this.state.playerCoins + this.state.enemy2Reward,
                enemy2RewardCheck: 1,
                enemy2Health: 0,
            })
        }
        if(enemyNumber === 3){
            this.setState({
                playerCoins: this.state.playerCoins + this.state.enemy3Reward,
                enemy3RewardCheck: 1,
                enemy3Health: 0,
            })
        }
    }

    deadCheck = (currentPlayerAttack, attackEnemy) => {
        if(this.state.enemyHealth - currentPlayerAttack <= 0){
            if(this.state.enemyRewardCheck === 0 & attackEnemy === 1){
                this.deadCheckSetState(1)
            }
        }
        if(this.state.enemy2Health - currentPlayerAttack <= 0) {
            if(this.state.enemy2RewardCheck === 0 & attackEnemy === 2){
                this.deadCheckSetState(2)
            }
        }
        if(this.state.enemy3Health - currentPlayerAttack <= 0 & attackEnemy === 3) {
            if(this.state.enemy3RewardCheck === 0){
                this.deadCheckSetState(3)
            }
        }
        if(this.state.enemyHealth <= 0 & this.state.enemy2Health <= 0 & this.state.enemy3Health <= 0){
            this.setCurrentRoomStatusClearEnemy()
        }
        if(this.state.enemyHealth + this.state.enemy2Health + this.state.enemy3Health > 0){
            this.enemyCounterAttack(currentPlayerAttack)
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
        if(this.state.currentRoom === 4){
            this.setState({
                roomFourStatus: 1,
            })
        }
        if(this.state.currentRoom === 6){
            this.setState({
                roomSixStatus: 1,
            })
        }
        if(this.state.currentRoom === 7){
            this.setState({
                roomSevenStatus: 1,
            })
        }
        if(this.state.currentRoom === 8){
            this.setState({
                roomEightStatus: 1,
            })
        }
        if(this.state.currentRoom === 9){
            this.setState({
                roomNineStatus: 1,
            })
        }
    }

    typeOfEnemyAttack = () => {

    }

    playerTakeDamage = (damageTaken) => {
        this.setState({
            playerHealth: this.state.playerHealth - damageTaken,
        })
    }

    enemyCounterAttack = (currentPlayerAttack) => {
        var currentEnemyAttack = this.state.enemyAttack - this.state.playerArmor
        var currentEnemy2Attack = this.state.enemy2Attack - this.state.playerArmor
        var currentEnemy3Attack = this.state.enemy3Attack - this.state.playerArmor
        var playerDamageTaken = 0
        if(currentEnemyAttack <= 0){
            currentEnemyAttack = 1
        }
        if(this.state.enemyHealth - currentPlayerAttack > 0){
            playerDamageTaken = playerDamageTaken + currentEnemyAttack
        }
        if(this.state.enemy2Health - currentPlayerAttack > 0){
            playerDamageTaken = playerDamageTaken + currentEnemy2Attack
        }
        if(this.state.enemy3Health - currentPlayerAttack > 0){
            playerDamageTaken = playerDamageTaken + currentEnemy3Attack
        }
        this.playerTakeDamage(playerDamageTaken)
    }

    openChest = () => {
        if(this.state.currentRoom === 4){
            this.setState({
                healthPotionEffect: this.state.healthPotionEffect + 15,
                roomFourStatus: 2,
            })
        }
        if(this.state.currentRoom === 8){
            this.setState({
                healthPotionEffect: this.state.healthPotionEffect + 15,
                roomEightStatus: 2,
            })
        }
    }

    render() {
        return(
            <BrowserRouter>
            <Navbar healthPotionEffect={this.state.healthPotionEffect} maxHealth={this.state.maxPlayerHealth} useStaminaPotion={this.useStaminaPotion} devButton={this.devButton} useHealthPotion={this.useHealthPotion} playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} playerArmor={this.state.playerArmor} playerCoins={this.state.playerCoins} playerHealthPotion={this.state.playerHealthPotion} playerStaminaPotion={this.state.playerStaminaPotion} resetRoomStatus={this.resetRoomStatus} />
                <Routes>
                    <Route path="/" element={<Layout playerHealth={this.state.playerHealth} playerAttack={this.state.playerAttack} playerSpeed={this.state.playerSpeed} playerDefense={this.state.playerArmor} playerCoins={this.state.playerCoins} pickClass={this.pickClass} />} />

                    <Route path="/GameBoard" element={<GameBoard buyFromStore={this.buyFromStore} roomMovement={this.roomMovement} createEnemy={this.createEnemy} />} />

                    <Route path="/RoomTwo" element={<RoomTwo roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} roomTwoStatus={this.state.roomTwoStatus} resetRoomStatus={this.resetRoomStatus} />} />

                    <Route path="/RoomThree" element={<RoomThree roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} roomThreeStatus ={this.state.roomThreeStatus} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} />

                    <Route path="/RoomFour" element={<RoomFour openChest={this.openChest} roomFourStatus={this.state.roomFourStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} />

                    <Route path="/RoomFive" element={<RoomFive />} />

                    <Route path="/RoomSix" element={<RoomSix resetRoomStatus={this.resetRoomStatus} roomSixStatus={this.state.roomSixStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2Attack={this.state.enemy2Attack} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward}/>} />

                    <Route path="/RoomSeven" element={<RoomSeven resetRoomStatus={this.resetRoomStatus} roomSevenStatus={this.state.roomSevenStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2Attack={this.state.enemy2Attack} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward}/>} />

                    <Route path="/RoomEight" element={<RoomEight openChest={this.openChest} roomEightStatus={this.state.roomEightStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} />
                    <Route path="/RoomNine" element={<RoomNine resetRoomStatus={this.resetRoomStatus} roomNineStatus={this.state.roomNineStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} enemyHealth={this.state.enemyHealth} enemyAttack={this.state.enemyAttack} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2Attack={this.state.enemy2Attack} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward} enemy3Health={this.state.enemy3Health} enemy3Attack={this.state.enemy3Attack} enemy3Speed={this.state.enemy3Speed} enemy3Armor={this.state.enemy3Armor} enemy3Reward={this.state.enemy3Reward}/>} />
                    <Route path="/RoomTen" element={<RoomTen />} />
                    <Route path="/RoomEleven" element={<RoomEleven />} />
                    <Route path="/RoomTwelve" element={<RoomTwelve />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
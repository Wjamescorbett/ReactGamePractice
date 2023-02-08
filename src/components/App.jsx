import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
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
import DamageEffects from './DamageEffects/DamageEffects';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [gameTick, setGameTick] = useState(0)
    const [breakLoop, setBreakLoop] = useState(0)

    const [player, setPlayer] = useState({
        playerHealth: 0,
        playerMaxHealth: 0,
        playerAttackLow: 0,
        playerAttackHigh: 0,
        playerSpeed: 0,
        playerMaxSpeed: 0,
        playerArmor: 0,
        playerCoins: 0,
        playerHealthPotion: 0,
        playerStaminaPotion: 0,
        playerDamageDone: 0
    })

    const [playerAttackTimerState, setPlayerAttackTimerState] = useState(0)
    const [playerAttackTimerStateMax, setPlayerAttackTimerStateMax] = useState(0)
    const [runPlayerAttackTimer, setRunPlayerAttackTimer] = useState(false)

    const [playerAttacked, setPlayerAttacked] = useState(1)


    const [startCombatCheck, setStartCombatCheck] = useState(false)

    const [enemyOne, setEnemyOne] = useState({
        enemyMaxHealth: 0, 
        enemyHealth: 0, 
        enemyAttackLow: 0,
        enemyAttackHigh: 0, 
        enemySpeed: 0, 
        enemyMaxSpeed: 0, 
        enemyArmor: 0, 
        enemyReward: 0,
        enemyRewardCheck: 0
    })

    const [enemyTwo, setEnemyTwo] = useState({
        enemy2MaxHealth: 1, 
        enemy2Health: 1, 
        enemy2AttackLow: 0, 
        enemy2AttackHigh: 0,
        enemy2Speed: 0, 
        enemy2MaxSpeed: 0, 
        enemy2Armor: 0, 
        enemy2Reward: 0,
        enemy2RewardCheck: 0
    })
    const [enemyThree, setEnemyThree] = useState({
        enemy3MaxHealth: 1, 
        enemy3Health: 1, 
        enemy3AttackLow: 0, 
        enemy3AttackHigh: 0, 
        enemy3Speed: 0, 
        enemy3MaxSpeed: 0, 
        enemy3Armor: 0, 
        enemy3Reward: 0,
        enemy3RewardCheck: 0
    })

    const [numberOfEnemiesInRoom, setNumberOfEnemiesInRoom] = useState(0)
    // const [enemyDamageDone, setEnemyDamageDone] = useState(0)

    const[currentRoom, setCurrentRoom] = useState(0)
    const[currentRoomStatus, setCurrentRoomStatus] = useState(0)

    const [roomTwoStatus, setRoomTwoStatus] = useState(0)
    const [roomSixStatus, setRoomSixStatus] = useState(0)
    const [roomNineStatus, setRoomNineStatus] = useState(0)



    const [runEnemyOneAttackTimer, setRunEnemyOneAttackTimer] = useState(false)
    const [runEnemyTwoAttackTimer, setRunEnemyTwoAttackTimer] = useState(false)
    const [runEnemyThreeAttackTimer, setRunEnemyThreeAttackTimer] = useState(false)



// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             roomTime: 0,
//             roomBreakLoop: 0,
//             breakLoop: 0,
//             gameTick: -1,
//             playerHealth: 0,
//             maxPlayerHealth: 0,
//             playerAttackLow: 0,
//             playerAttackHigh: 0,
//             playerSpeed: -1,
//             maxPlayerSpeed: 0,
//             playerArmor: 0,
//             playerCoins: 0,
//             playerHealthPotion: 0,
//             playerStaminaPotion: 0,
//             healthPotionEffect: 25,
//             playerDamageDone: 0,
//             playerAttackTimerState: 5,
//             playerAttackTimerStateMax: 5,
//             enemyDamageDone: 0,
//             enemyAlive: 0,
//             enemyMaxHealth: 0,
//             enemyHealth: 0,
//             enemyAttackLow: 0,
//             enemyAttackHigh: 0,
//             enemySpeed: 0,
//             enemyMaxSpeed: 0,
//             enemyArmor: 0,
//             enemyReward: 0,
//             enemyRewardCheck: 0,
//             enemy2MaxHealth: 0,
//             enemy2Health: 0,
//             enemy2AttackLow: 0,
//             enemy2AttackHigh: 0,
//             enemy2Speed: 0,
//             enemy2Armor: 0,
//             enemy2Reward: 0,
//             enemy2RewardCheck: 0,
//             enemy3MaxHealth: 0,
//             enemy3Health: 0,
//             enemy3AttackLow: 0,
//             enemy3AttackHigh: 0,
//             enemy3Speed: 0,
//             enemy3Armor: 0,
//             enemy3Reward: 0,
//             enemy3RewardCheck: 0,
//             numberOfEnemiesInRoom: 0,
//             roomTwoStatus: 0,
//             roomThreeStatus: 0,
//             roomFourStatus: 0,
//             roomFiveStatus: 0,
//             roomSixStatus: 0,
//             roomSevenStatus: 0,
//             roomEightStatus: 0,
//             roomNineStatus: 0,
//             roomTenStatus: 0,
//             roomElevenStatus: 0,
//             roomTwelveStatus:0,
//             currentRoom: 0,
//             currentRoomStatus: 0,
//             startCombatCheck: false,
//             playerAttacked: 1,
//         }
//     }

useEffect(() => {
    if(playerAttackTimerState < 0 & runPlayerAttackTimer === false){
        setPlayerAttackTimerState(playerAttackTimerStateMax)
        setPlayerAttacked(2)
    }
    if(playerAttackTimerState >= 0 & runPlayerAttackTimer === true){
        setRunPlayerAttackTimer(false)
        if(enemyOne.enemyHealth > 0 || enemyTwo.enemy2Health > 0 || enemyThree.enemy3Health > 0){
            playerAttackTimer(playerAttackTimerState)
        }
    }
    if(enemyOne.enemyHealth > 0 & startCombatCheck === true & runEnemyOneAttackTimer === true){
        setRunEnemyOneAttackTimer(false)
        enemyOneAttackTimer()
    }
    if(enemyTwo.enemy2Health > 0 & startCombatCheck === true & runEnemyTwoAttackTimer === true){
        setRunEnemyTwoAttackTimer(false)
        enemyTwoAttackTimer()
    }
    if(enemyThree.enemy3Health > 0 & startCombatCheck === true & runEnemyThreeAttackTimer === true){
        setRunEnemyThreeAttackTimer(false)
        enemyThreeAttackTimer()
    }
    if(enemyOne.enemyHealth <= 0 & enemyTwo.enemy2Health <= 0 & enemyThree.enemy3Health <= 0){
        setCurrentRoomStatusClearEnemy()
        setStartCombatCheck(false)
    }

})



    function devButtonUpgrade() {
        setPlayer (prevPlayer => {
            return {...prevPlayer,
            playerHealth: player.playerMaxHealth,
            playerAttackHigh: player.playerAttackHigh + 5,
            playerCoins: player.playerCoins + 100
        }
        })
    }

    function devButtonDowngrade() {
        setPlayer (prevPlayer => {
            return {...prevPlayer,
            playerAttackHigh: player.playerAttackHigh - 5,
        }
        })
    }

    // useHealthPotion = () => {
    //     if(this.state.playerHealthPotion <= 0){
    //         return(alert("You are out of health potions!"))
    //     }
    //     if(this.state.playerHealth + this.state.healthPotionEffect > this.state.maxPlayerHealth){
    //         this.setState({
    //             playerHealthPotion: this.state.playerHealthPotion - 1,
    //             playerHealth: this.state.maxPlayerHealth,
    //         })
    //     } else {
    //         this.setState({
    //             playerHealthPotion: this.state.playerHealthPotion - 1,
    //             playerHealth: this.state.playerHealth + this.state.healthPotionEffect,
    //         })
    //     }
    // }

    // useStaminaPotion = () => {
    //     if(this.state.playerStaminaPotion <= 0){
    //         return(alert("You are out of stamina potions!"))
    //     }
    //     if(this.state.playerSpeed === this.state.maxPlayerSpeed){
    //         return(alert("You're already at max speed!"))
    //     } else {
    //         this.setState({
    //             playerStaminaPotion: this.state.playerStaminaPotion - 1,
    //             playerSpeed: this.state.maxPlayerSpeed,
    //         })
    //     }
    // }

    function buyFromStore(item) {
        if(item === "health"){
            if(player.playerCoins >= 5){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                    playerCoins: player.playerCoins - 5,
                    playerHealth: player.playerHealth + 10
                    }
                })
                // setPlayerCoins(prevPlayerCoins => prevPlayerCoins - 5)
                // setPlayerMaxHealth(prevPlayerMaxHealth => prevPlayerMaxHealth + 10)
            } else {
                alert("You can't afford a health upgrade.")
            }
        }
        // if(item === "attackLow"){
        //     if(this.state.playerCoins >= 6 & this.state.playerAttackLow < this.state.playerAttackHigh){
        //         this.setState({
        //             playerCoins: this.state.playerCoins - 6,
        //             playerAttackLow: this.state.playerAttackLow + 1,
        //         })
        //     } 
        //     if(this.state.playerAttackLow >= this.state.playerAttackHigh){
        //         alert("Your minimum attack can not exceed you maximum attack.")
        //     }
        //     if(this.state.playerCoins < 6){
        //         alert("You can't afford a minimum attack upgrade.")
        //     }
        // }
        // if(item === "attackHigh"){
        //     if(this.state.playerCoins >= 3){
        //         this.setState({
        //             playerCoins: this.state.playerCoins - 3,
        //             playerAttackHigh: this.state.playerAttackHigh + 1,
        //         })
        //     } else {
        //         alert("You can't afford a maximum attack upgrade.")
        //     }
        // }
        // if(item === "speed"){
        //     if(this.state.playerCoins >= 2){
        //         this.setState({
        //             playerCoins: this.state.playerCoins - 2,
        //             maxPlayerSpeed: this.state.maxPlayerSpeed + 1,
        //             playerSpeed: this.state.playerSpeed + 1,
        //         })
        //     } else {
        //         alert("You can't afford a speed upgrade.")
        //     }
        // }
        // if(item === "armor"){
        //     if(this.state.playerCoins >= 3){
        //         this.setState({
        //             playerCoins: this.state.playerCoins - 3,
        //             playerArmor: this.state.playerArmor + 1,
        //         })
        //     } else {
        //         alert("You can't afford an armor upgrade.")
        //     }
        // }
        // if(item === "healthPotion"){
        //     if(this.state.playerHealthPotion >= 10){
        //         return (alert ("You can only have up to ten health potions."))
        //     }
        //     if(this.state.playerCoins >= 2){
        //         this.setState({
        //             playerCoins: this.state.playerCoins - 2,
        //             playerHealthPotion: this.state.playerHealthPotion + 1,
        //         })
        //     } else {
        //         alert("You can't afford a health potion.")
        //     }
        // }
        // if(item === "staminaPotion"){
        //     if(this.state.playerStaminaPotion >= 8){
        //         return (alert("You can only have up to eight stamina potions."))
        //     }
        //     if(this.state.playerCoins >= 1){
        //         this.setState({
        //             playerCoins: this.state.playerCoins - 1,
        //             playerStaminaPotion: this.state.playerStaminaPotion + 1,
        //         })
        //     } else {
        //         alert("You can't afford a stamina potion.")
        //     }
        // }
    }

    // resetRoomStatus = () => {
    //     this.setState({
    //         roomTwoStatus: 0,
    //         roomThreeStatus: 0,
    //         roomFiveStatus: 0,
    //         roomSixStatus: 0,
    //         roomSevenStatus: 0,
    //         roomNineStatus: 0,
    //         roomTenStatus: 0,
    //         roomElevenStatus: 0,
    //         enemyRewardCheck: 0,
    //         enemy2RewardCheck: 0,
    //         enemy3RewardCheck: 0,
    //         startCombatCheck: false,
    //         playerAttacked: 1,
    //         playerSpeed: this.state.maxPlayerSpeed,
    //     })
    // }

    function pickClass(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion, attackTimer) {
        console.log(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion, attackTimer)
        setPlayer(prevPlayer => {
            return {...prevPlayer,
            playerHealth: health,
            playerMaxHealth: maxHealth,
            playerAttackLow: attackLow,
            playerAttackHigh: attackHigh,
            playerSpeed: speed,
            playerMaxSpeed: maxSpeed,
            playerArmor: armor,
            playerCoins: coins,
            playerHealthPotion: healthPotion,
            playerStaminaPotion: staminaPotion
        }
        })
        setPlayerAttackTimerState(attackTimer)
        setPlayerAttackTimerStateMax(attackTimer)
        gameTime()
    }

    function createEnemy(maxHealth, health, attackLow, attackHigh, speed, armor, reward, maxHealth2, health2, attack2Low, attack2High, speed2, armor2, reward2, maxHealth3, health3, attack3Low, attack3High, speed3, armor3, reward3, numberOfEnemiesInRoom) {
        setEnemyOne(prevEnemyOne => {
            return {...prevEnemyOne, 
                enemyMaxHealth: maxHealth,
                enemyHealth: health,
                enemyAttackLow: attackLow,
                enemyAttackHigh: attackHigh,
                enemySpeed: speed,
                enemyMaxSpeed: speed,
                enemyArmor: armor,
                enemyReward: reward
            }
        })
        setEnemyTwo(prevEnemyTwo => {
            return {...prevEnemyTwo,
                enemy2MaxHealth: maxHealth2,
                enemy2Health: health2,
                enemy2AttackLow: attack2Low,
                enemy2AttackHigh: attack2High,
                enemy2Speed: speed2,
                enemy2MaxSpeed: speed2,
                enemy2Armor: armor2,
                enemy2Reward: reward2
            }
        })
        setEnemyThree(prevEnemyThree => {
            return {...prevEnemyThree,
                enemy3MaxHealth: maxHealth3,
                enemy3Health: health3,
                enemy3AttackLow: attack3Low,
                enemy3AttackHigh: attack3High,
                enemy3Speed: speed3,
                enemy3MaxSpeed: speed3,
                enemy3Armor: armor3,
                enemy3Reward: reward3
            }
        })
        setNumberOfEnemiesInRoom(numberOfEnemiesInRoom)
    }

                        // *ROOM MOVEMENT, CREATES ENEMIES FOR NEXT ROOM, ACCOUNTS FOR AND CHANGES PLAYER SPEED

    function roomMovement(nowCurrentRoom){
        setCurrentRoom(nowCurrentRoom)
        setPlayerAttackTimerState(playerAttackTimerStateMax)
        setPlayerAttacked(1)
        if(player.playerSpeed > 0){
            setCurrentRoom(nowCurrentRoom)
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                    playerSpeed: player.playerSpeed - 1
                }
            })
        }
            // ?enemyMaxHealth, EnemyHealth, enemyAttackLow, enemyAttackHigh, enemySpeed, enemyArmor, enemyReward
        if(nowCurrentRoom === 2 & roomTwoStatus === 0) {
            createEnemy(20, 20, 2, 3, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1)
        }
        if(nowCurrentRoom === 6 & roomSixStatus === 0){
            createEnemy(20, 20, 2, 3, 7, 1, 1, 20, 20, 2, 3, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2) //Two Circles
        }
        if(nowCurrentRoom === 9 & roomNineStatus === 0){
            createEnemy(30, 30, 4, 5, 2, 2, 10, 15, 15, 10, 14, 2, 5, 25, 4, 4, 1, 5, 10, 10, 5, 3) //Semi-Circle - Parallelogram - Trapezium
        }
    }

    // function roomMovement(currentRoom) {
    //     if(player.playerSpeed > 0){
    //         setCurrentRoom(currentRoom)
    //         setPlayer(prevPlayer => {
    //             return {...prevPlayer,
    //                 playerSpeed: player.playerSpeed - 1
    //             }
    //         })

    //         this.setState({
    //             currentRoom: currentRoom,
    //             playerSpeed: this.state.playerSpeed - 1,
    //             enemyRewardCheck: 0,
    //             playerDamageDone: 0,
    //             enemyDamageDone: 0,
    //             playerAttacked: 1,
    //         })
    //     }
    //     if(this.state.playerSpeed <= 0){
    //         this.playerHasNoSpeed()
    //     }

    //     if(currentRoom === 2 & this.state.roomTwoStatus === 0){
    //         this.createEnemy(20, 20, 2, 3, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1) //One Circle 20, 2, 3, 1, 1, 1
    //         }
        // if(currentRoom === 3 & this.state.roomThreeStatus === 0){
        //     this.createEnemy(15, 15, 4, 5, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1) //One Square 15, 4, 5, 2, 2, 2
        // }
        // if(currentRoom === 4 & this.state.roomFourStatus === 0){
        //     this.createEnemy(50, 50, 5, 7, 4, 3, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1) //One Boss Triangle
        // }
        // if(currentRoom === 5 & this.state.roomFiveStatus === 0){
        //     this.createEnemy(15, 15, 10, 12, 2, 5, 25, 10, 10, 3, 5, 9, 4, 10, 0, 0, 0, 0, 0, 0, 0, 2) //Parallelogram 15, 10, 12, 2, 5, 25 - Trapezium 10, 3, 5, 9, 4, 10
        // }
        // if(currentRoom === 6 & this.state.roomSixStatus === 0){
        //     this.createEnemy(20, 20, 2, 3, 7, 1, 1, 20, 20, 2, 3, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2) //Two Circles
        // }
        // if(currentRoom === 7 & this.state.roomSevenStatus === 0){
        //     this.createEnemy(15, 15, 4, 5, 2, 2, 2, 15, 15, 4, 5, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2) // Two Squares
        // }
        // if(currentRoom === 8 & this.state.roomEightStatus === 0){
        //     this.createEnemy(80, 80, 6, 8, 3, 4, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1) //One BOSS pentagon
        // }
        // if(currentRoom === 9 & this.state.roomNineStatus === 0){
        //     this.createEnemy(30, 30, 4, 5, 2, 2, 10, 15, 15, 10, 14, 2, 5, 25, 4, 4, 1, 5, 10, 10, 5, 3) //Semi-Circle - Parallelogram - Trapezium
        // }
        // if(currentRoom === 10 & this.state.roomTenStatus === 0){
        //     this.createEnemy(100, 100, 4, 7, 2, 2, 20, 100, 100, 4, 7, 2, 2, 20, 0, 0, 0, 0, 0, 0, 0, 2) //Two Hexagons
        // }
        // if(currentRoom === 11 & this.state.roomElevenStatus === 0){
        //     this.createEnemy(50, 50, 5, 8, 4, 3, 15, 50, 50, 5, 8, 4, 3, 15, 0, 0, 0, 0, 0, 0, 0, 2)
        // }
        // if(currentRoom === 12 & this.state.roomTwelveStatus === 0){
        //     this.createEnemy(500, 500, 15, 20, 8, 8, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1)
        // }
    // }
                                            // *TIMED COMBAT
    function startCombat() {
        setStartCombatCheck(true)
        setRunPlayerAttackTimer(true)
    }

    function playerAttackRandomizer(playerAttackLow, playerAttackHigh) {
        return Math.floor(Math.random() * (playerAttackHigh - playerAttackLow + 1) + playerAttackLow)
    }

    function currentEnemyAttackRandomizer(enemyAttackLow, enemyAttackHigh) {
        return Math.floor(Math.random() * (enemyAttackHigh - enemyAttackLow + 1) + enemyAttackLow)
    }


    function showToastMessageRed(damageTaken) {
        toast.error(`You took ${damageTaken} damage !`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500
        });
    }

    // playerHasNoSpeed = () => {
    //     alert("You have no more speed! You took 10 damage. Return to Room One or use a stamina potion to regain your speed.")
    //     this.setState({
    //         playerHealth: this.state.playerHealth - 10,
    //         enemyRewardCheck: 0,
    //         enemy2RewardCheck: 0,
    //         enemy3RewardCheck: 0,
    //     })
    // }


                                            // *BEGINNING OF ENEMY COMBAT ATTACK SEQUENCE
    // *START ENEMY ONE TIMED ATTACK SEQUENCE
    function enemyOneAttackTimer(){
        console.log("Enemy ONE Attack Timer")
        if(enemyOne.enemySpeed > 0){
            setEnemyOne(prevEnemyOne => {
                return {...prevEnemyOne,
                    enemySpeed: enemyOne.enemySpeed - 1
                }
            })
        }
        if(enemyOne.enemySpeed <= 0){
            enemyOneCounterAttack()
            setEnemyOne(prevEnemyOne => {
                return {...prevEnemyOne,
                    enemySpeed: enemyOne.enemyMaxSpeed
                }
            })
        }
    }

    function enemyOneCounterAttack() {
        var currentEnemyAttack = currentEnemyAttackRandomizer(enemyOne.enemyAttackLow, enemyOne.enemyAttackHigh) - player.playerArmor
        if(currentEnemyAttack <= 0){
            currentEnemyAttack = 1
        }
        playerTakeDamage(currentEnemyAttack)
    }
    // !END ENEMY ONE TIMED ATTACK SEQUENCE --- AFTER PLAYER TAKE DAMAGE

    // *START ENEMY TWO TIMED ATTACK SEQUENCE
    function enemyTwoAttackTimer(){
        console.log("Enemy TWO Attack Timer")
        if(enemyTwo.enemy2Speed > 0){
            setEnemyTwo(prevEnemyTwo => {
                return {...prevEnemyTwo,
                    enemy2Speed: enemyTwo.enemy2Speed - 1
                }
            })
        }
        if(enemyTwo.enemy2Speed <= 0){
            enemyTwoCounterAttack()
            setEnemyTwo(prevEnemyTwo => {
                return {...prevEnemyTwo,
                    enemy2Speed: enemyTwo.enemy2MaxSpeed
                }
            })
        }
    }

    function enemyTwoCounterAttack() {
        var currentEnemyAttack = currentEnemyAttackRandomizer(enemyTwo.enemy2AttackLow, enemyTwo.enemy2AttackHigh) - player.playerArmor
        if(currentEnemyAttack <= 0){
            currentEnemyAttack = 1
        }
        playerTakeDamage(currentEnemyAttack)
    }
    // !END ENEMY TWO TIMED ATTACK SEQUENCE --- AFTER PLAYER TAKE DAMAGE

    // *START ENEMY THREE TIMED ATTACK SEQUENCE
    function enemyThreeAttackTimer(){
        console.log("Enemy THREE Attack Timer")
        if(enemyThree.enemy3Speed > 0){
            setEnemyThree(prevEnemyThree => {
                return {...prevEnemyThree,
                    enemy3Speed: enemyThree.enemy3Speed - 1
                }
            })
        }
        if(enemyThree.enemy3Speed <= 0){
            enemyThreeCounterAttack()
            setEnemyThree(prevEnemyThree => {
                return {...prevEnemyThree,
                    enemy3Speed: enemyThree.enemy3MaxSpeed
                }
            })
        }
    }

    function enemyThreeCounterAttack() {
        var currentEnemyAttack = currentEnemyAttackRandomizer(enemyThree.enemy3AttackLow, enemyThree.enemy3AttackHigh) - player.playerArmor
        if(currentEnemyAttack <= 0){
            currentEnemyAttack = 1
        }
        playerTakeDamage(currentEnemyAttack)
    }
    // !END ENEMY THREE TIMED ATTACK SEQUENCE --- AFTER PLAYER TAKE DAMAGE


    function playerTakeDamage(damageTaken) {
        setPlayer(prevPlayer =>{
            return {...prevPlayer,
            playerHealth: player.playerHealth - damageTaken}
        })
        showToastMessageRed(damageTaken)
    }










    // *START PLAYER ATTACK TIMER
    function playerAttackTimer(timer) {
        var timeHolder = timer
        if(timeHolder >= 0){
            console.log(`THIS IS PLAYER ATTACK TIMER ${timeHolder}`)
            playerAttackTimerSetState(timeHolder)
        }
    }

    function playerAttackTimerSetState(timer){
        var newTimeHolder = timer - 1
        setTimeout(() => {setPlayerAttackTimerState(prevPlayerAttackTimerState => prevPlayerAttackTimerState -1); }, 1000);
        setTimeout(() => {playerAttackTimer(newTimeHolder); }, 1000);
    }
    // !END PLAYER ATTACK TIMER



    // *PLAYER ATTACK BUTTON STARTS HERE
    function playerAttackMove(attackEnemy) {
        var currentPlayerAttack = playerAttackRandomizer(player.playerAttackLow, player.playerAttackHigh)
        if(attackEnemy === 1 & enemyOne.enemyHealth <= 0){
            deadCheck(currentPlayerAttack, attackEnemy)
            alert("You killed this enemy!")
        }
        if(attackEnemy === 1 & enemyOne.enemyHealth > 0){
            currentPlayerAttack = currentPlayerAttack - enemyOne.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            playerAttackMoveSetState(1, currentPlayerAttack)
            deadCheck(currentPlayerAttack, attackEnemy)
        }

        if(attackEnemy === 2 & enemyTwo.enemy2Health <= 0){
            deadCheck(currentPlayerAttack, attackEnemy)
            alert("You killed enemy 2!")
        }
        if(attackEnemy === 2 & enemyTwo.enemy2Health > 0){
            currentPlayerAttack = currentPlayerAttack - enemyTwo.enemy2Armor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            playerAttackMoveSetState(2, currentPlayerAttack)
            deadCheck(currentPlayerAttack, attackEnemy)
        }
    }

    function playerAttackMoveSetState(attackEnemyNumber, currentPlayerAttack) {
        if(attackEnemyNumber === 1){
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerDamageDone: currentPlayerAttack
                }
            })
            setEnemyOne(prevEnemyOne => {
                return{...prevEnemyOne,
                enemyHealth: enemyOne.enemyHealth - currentPlayerAttack
                }
            })
            setPlayerAttacked(1)
            showToastMessage(currentPlayerAttack, attackEnemyNumber)
        }
        if(attackEnemyNumber === 2){
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerDamageDone: currentPlayerAttack
                }
            })
            setEnemyTwo(prevEnemyTwo => {
                return{...prevEnemyTwo,
                enemy2Health: enemyTwo.enemy2Health - currentPlayerAttack
                }
            })
            setPlayerAttacked(1)
            showToastMessage(currentPlayerAttack, attackEnemyNumber)
        }
    }

    function deadCheck(currentPlayerAttack, attackEnemy) {
        if(enemyOne.enemyHealth - currentPlayerAttack <= 0 & enemyOne.enemyRewardCheck === 0 & attackEnemy === 1){
            deadCheckSetState(1)
        }
        if(enemyTwo.enemy2Health - currentPlayerAttack <= 0 & enemyTwo.enemy2RewardCheck === 0 & attackEnemy === 2){
            deadCheckSetState(2)
        }
        if(enemyThree.enemy3Health - currentPlayerAttack <= 0 & enemyThree.enemy3RewardCheck === 0 & attackEnemy === 3){
            deadCheckSetState(3)
        }
        setRunPlayerAttackTimer(true)
    }

    function deadCheckSetState(enemyNumber) {
        if(enemyNumber === 1){
            setEnemyOne(prevEnemyOne => {
                return {...prevEnemyOne,
                enemyHealth: 0,
                enemyRewardCheck: 1
                }
            })
            console.log("SET ENEMY ONE KILLED --------------------------------------------------------")
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerCoins: player.playerCoins + enemyOne.enemyReward
                }
            })
        }
        if(enemyNumber === 2){
            setEnemyTwo(prevEnemyTwo => {
                return {...prevEnemyTwo,
                enemy2Health: 0,
                enemy2RewardCheck: 1
                }
            })
            console.log("SET ENEMY TWO KILLED --------------------------------------------------------")
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerCoins: player.playerCoins + enemyTwo.enemy2Reward
                }
            })
        }
        if(enemyNumber === 3){
            setEnemyThree(prevEnemyThree => {
                return {...prevEnemyThree,
                enemy3Health: 0,
                enemy3RewardCheck: 1
                }
            })
            console.log("SET ENEMY THREE KILLED --------------------------------------------------------")
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerCoins: player.playerCoins + enemyTwo.enemy3Reward
                }
            })
        }
    }



    function setCurrentRoomStatusClearEnemy() {
        if(currentRoom === 2){
            setRoomTwoStatus(1)
        }
        // if(this.state.currentRoom === 3){
        //     this.setState({
        //         roomThreeStatus: 1,
        //     })
        // }
        // if(this.state.currentRoom === 4){
        //     this.setState({
        //         roomFourStatus: 1,
        //     })
        // }
        // if(this.state.currentRoom === 5){
        //     this.setState({
        //         roomFiveStatus: 1,
        //     })
        // }
        if(currentRoom === 6){
            setRoomSixStatus(1)
        }
        // if(this.state.currentRoom === 7){
        //     this.setState({
        //         roomSevenStatus: 1,
        //     })
        // }
        // if(this.state.currentRoom === 8){
        //     this.setState({
        //         roomEightStatus: 1,
        //     })
        // }
        if(currentRoom === 9){
            setRoomNineStatus(1)
        }
        // if(this.state.currentRoom === 10){
        //     this.setState({
        //         roomTenStatus: 1,
        //     })
        // }
        // if(this.state.currentRoom === 11){
        //     this.setState({
        //         roomElevenStatus: 1,
        //     })
        // }
        // if(this.state.currentRoom === 12){
        //     this.setState({
        //         roomTwelveStatus: 1,
        //     })
        // }
    }

    //                                         // !END OF ATTACK SEQUENCE

    //                                         // *BEGINNING OF DODGE SEQUENCE

    // playerDodgeMove = () => {
    //     var playerSpeedThisDodgeAttack = Math.floor(Math.random() * (100 - this.state.playerSpeed + 1) + this.state.playerSpeed)
    //     var enemySpeedThisRound = Math.floor(Math.random() * (100 - this.state.enemySpeed + 1) + this.state.enemySpeed)
    //     var enemy2SpeedThisRound = 0
    //     var enemy3SpeedThisRound = 0
    //     var playerDamageTaken = 0
    //     if(this.state.playerSpeed > 0){
    //         if(this.state.enemy2Speed > 0){
    //             enemy2SpeedThisRound = Math.floor(Math.random() * (100 - this.state.enemy2Speed + 1) + this.state.enemy2Speed)
    //         }
    //         if(this.state.enemy3Speed > 0){
    //             enemy2SpeedThisRound = Math.floor(Math.random() * (100 - this.state.enemy3Speed + 1) + this.state.enemy3Speed)
    //         }
    //         console.log(playerSpeedThisDodgeAttack)
    //         console.log(enemySpeedThisRound + enemy2SpeedThisRound + enemy3SpeedThisRound)

    //         if(playerSpeedThisDodgeAttack > enemySpeedThisRound + enemy2SpeedThisRound + enemy3SpeedThisRound){
    //             console.log("Successful Dodge")
    //             this.enemyWithMostHealth()
    //             }
    //         if(playerSpeedThisDodgeAttack <= enemySpeedThisRound + enemy2SpeedThisRound + enemy3SpeedThisRound){
    //             console.log("Player Missed Dodge")
    //             this.playerMissedDodge()
    //             }
    //         }
    //     if(this.state.playerSpeed <= 0){
    //         alert("You have no speed to dodge!")
    //     }
    // }

    //     // player attacks enemy with highest health with full attack power if the ransomizer is greater than the enemies; speed 

    // enemyWithMostHealth = () => {
    //     var highEnemyHealth = Math.max(this.state.enemyHealth, this.state.enemy2Health, this.state.enemy3Health)
    //     if(highEnemyHealth === this.state.enemyHealth){
    //         this.setState({
    //             enemyHealth: this.state.enemyHealth - (this.state.playerAttackHigh - this.state.enemyArmor),
    //             playerSpeed: this.state.playerSpeed - 1,
    //             playerDamageDone: this.state.playerAttackHigh - this.state.enemyArmor,
    //             })
    //             return
    //     }
    //     if(highEnemyHealth === this.state.enemy2Health){
    //         this.setState({
    //             enemy2Health: this.state.enemy2Health - (this.state.playerAttackHigh - this.state.enemy2Armor),
    //             playerSpeed: this.state.playerSpeed - 1,
    //             playerDamageDone: this.state.playerAttackHigh - this.state.enemyArmor,
    //             })
    //             return
    //     }
    //     if(highEnemyHealth === this.state.enemy3Health){
    //         this.setState({
    //             enemy3Health: this.state.enemy3Health - (this.state.playerAttackHigh - this.state.enemy3Armor),
    //             playerSpeed: this.state.playerSpeed - 1,
    //             playerDamageDone: this.state.playerAttackHigh - this.state.enemyArmor,
    //             })
    //             return
    //     }
    // }

    // playerMissedDodge = () => {
    //     var currentEnemyAttack = this.currentEnemyAttackRandomizer(this.state.enemyAttackLow, this.state.enemyAttackHigh)
    //     var currentEnemy2Attack = this.currentEnemyAttackRandomizer(this.state.enemy2AttackLow, this.state.enemy2AttackHigh)
    //     var currentEnemy3Attack = this.currentEnemyAttackRandomizer(this.state.enemy3AttackLow, this.state.enemy3AttackHigh)
    //     var playerDamage = currentEnemyAttack + currentEnemy2Attack + currentEnemy3Attack
    //     this.setState({
    //         playerHealth: this.state.playerHealth - playerDamage,
    //         playerSpeed: this.state.playerSpeed - 1,
    //         enemyDamageDone: playerDamage,
    //         })
    // }

    //                                         // !END DODGE SEQUENCE

    // typeOfEnemyAttack = () => {

    // }

    // openChest = () => {
    //     if(this.state.currentRoom === 4){
    //         this.setState({
    //             healthPotionEffect: this.state.healthPotionEffect + 15,
    //             roomFourStatus: 2,
    //         })
    //     }
    //     if(this.state.currentRoom === 8){
    //         this.setState({
    //             healthPotionEffect: this.state.healthPotionEffect + 15,
    //             roomEightStatus: 2,
    //         })
    //     }
    //     if(this.state.currentRoom === 12){
    //         this.setState({
    //             healthPotionEffect: this.state.healthPotionEffect + 15,
    //             roomTwelveStatus: 2,
    //         })
    //     }
    // }

    //                                         // *ON-SCREEN PROMPTS

    function showToastMessage(currentPlayerAttack, attackEnemyNumber) {
        if(attackEnemyNumber === 1){
            toast.success("You did " + currentPlayerAttack + " damage to enemy 1 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if(attackEnemyNumber === 2){
            toast.success("You did " + currentPlayerAttack + " damage to enemy 2 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if(attackEnemyNumber === 3){
            toast.success("You did " + currentPlayerAttack + " damage to enemy 3 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }


                                            // *GAME TIMER/BREAKLOOP TIMER

    function gameTime() {
        setBreakLoop(prevBreakLoop => prevBreakLoop + 1)
        setGameTick(prevGameTick => prevGameTick + 1)
        setRunEnemyOneAttackTimer(true)
        setRunEnemyTwoAttackTimer(true)
        setRunEnemyThreeAttackTimer(true)
        if(breakLoop < 300){
            setTimeout(() => {gameTime(); }, 1000);
        }
        console.log(`gameTime() ran. gameTick is at ${gameTick}`)
    }


                                            //  !END GAME TIMER

    //                                         //  *ROOM TIMER
    // roomTime = () => {
    //     this.roomTimeSetState()
    //     if(this.state.roomBreakLoop < 300){
    //         setTimeout(() => {this.roomTime(); }, 1000);
    //     }
    //     console.log(`gameRoomTime() is running. roomTime is at ${this.state.roomTime}`)
    // }

    // roomTimeSetState = () => {
    //     this.setState({
    //         roomTime: this.state.roomTime + 1,
    //         roomBreakLoop: this.state.roomBreakLoop + 1,
    //     })
    // }

                                            // !END ROOM TIMER
    // render() {
        return(
            <BrowserRouter>
            <Navbar gameTick={gameTick} devButtonUpgrade={devButtonUpgrade} devButtonDowngrade={devButtonDowngrade} player={player} />
            <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home player={player} enemyOne={enemyOne} pickClass={pickClass} />} />

                    <Route path="/GameBoard" element={<GameBoard buyFromStore={buyFromStore} roomMovement={roomMovement} createEnemy={createEnemy} />} />

                    <Route path="/RoomTwo" element={<RoomTwo roomMovement={roomMovement} enemyOne={enemyOne} roomTwoStatus={roomTwoStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat} playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} />} />

                    {/* <Route path="/RoomTwo" element={<RoomTwo rechargeAttackMove={this.rechargeAttackMove} playerAttacked={this.state.playerAttacked} playerAttackMove={this.playerAttackMove} playerAttackTimerState={this.state.playerAttackTimerState} playerAttackTimerStateMax={this.state.playerAttackTimerStateMax} startCombat={this.startCombat} startCombatCheck={this.state.startCombatCheck} currentRoom={this.state.currentRoom} roomMovement={this.roomMovement} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyMaxHealth={this.state.enemyMaxHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed}  enemyMaxSpeed={this.state.enemyMaxSpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} roomTwoStatus={this.state.roomTwoStatus} resetRoomStatus={this.resetRoomStatus} />} /> */}

                    {/* <Route path="/RoomThree" element={<RoomThree roomMovement={this.roomMovement} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} roomThreeStatus ={this.state.roomThreeStatus} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} /> */}

                    {/* <Route path="/RoomFour" element={<RoomFour openChest={this.openChest} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomFourStatus={this.state.roomFourStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} /> */}

                    {/* <Route path="/RoomFive" element={<RoomFive resetRoomStatus={this.resetRoomStatus} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomFiveStatus={this.state.roomFiveStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2AttackLow={this.state.enemy2AttackLow} enemy2AttackHigh={this.state.enemy2AttackHigh} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward} />} /> */}

                    <Route path="/RoomSix" element={<RoomSix roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} roomSixStatus={roomSixStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat} playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} />} />

                    {/* <Route path="/RoomSeven" element={<RoomSeven resetRoomStatus={this.resetRoomStatus} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomSevenStatus={this.state.roomSevenStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2AttackLow={this.state.enemy2AttackLow} enemy2AttackHigh={this.state.enemy2AttackHigh} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward}/>} /> */}

                    {/* <Route path="/RoomEight" element={<RoomEight openChest={this.openChest} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomEightStatus={this.state.roomEightStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} />} /> */}

                    <Route path="/RoomNine" element={<RoomNine resetRoomStatus={this.resetRoomStatus} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomNineStatus={this.state.roomNineStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2AttackLow={this.state.enemy2AttackLow} enemy2AttackHigh={this.state.enemy2AttackHigh} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward} enemy3Health={this.state.enemy3Health} enemy3AttackLow={this.state.enemy3AttackLow} enemy3AttackHigh={this.state.enemy3AttackHigh} enemy3Speed={this.state.enemy3Speed} enemy3Armor={this.state.enemy3Armor} enemy3Reward={this.state.enemy3Reward}/>} />

                    {/* <Route path="/RoomTen" element={<RoomTen resetRoomStatus={this.resetRoomStatus} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomTenStatus={this.state.roomTenStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2AttackLow={this.state.enemy2AttackLow} enemy2AttackHigh={this.state.enemy2AttackHigh} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward}/>} /> */}

                    {/* <Route path="/RoomEleven" element={<RoomEleven resetRoomStatus={this.resetRoomStatus} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomElevenStatus={this.state.roomElevenStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward} enemy2Health={this.state.enemy2Health} enemy2AttackLow={this.state.enemy2AttackLow} enemy2AttackHigh={this.state.enemy2AttackHigh} enemy2Speed={this.state.enemy2Speed} enemy2Armor={this.state.enemy2Armor} enemy2Reward={this.state.enemy2Reward}/>} /> */}

                    {/* <Route path="/RoomTwelve" element={<RoomTwelve openChest={this.openChest} numberOfEnemiesInRoom={this.state.numberOfEnemiesInRoom} roomTwelveStatus={this.state.roomTwelveStatus} roomMovement={this.roomMovement} playerAttackMove={this.playerAttackMove} playerDodgeMove={this.playerDodgeMove} enemyHealth={this.state.enemyHealth} enemyAttackLow={this.state.enemyAttackLow} enemyAttackHigh={this.state.enemyAttackHigh} enemySpeed={this.state.enemySpeed} enemyArmor={this.state.enemyArmor} enemyReward={this.state.enemyReward}/>} /> */}
                </Routes>
            </BrowserRouter>
        )
    // }
}

export default App;

// playerMaxSpeed={playerMaxSpeed} playerMaxHealth={playerMaxHealth} playerHealth={playerHealth} playerAttackLow={playerAttackLow} playerAttackHigh={playerAttackHigh} playerSpeed={playerSpeed} playerArmor={playerArmor} playerCoins={playerCoins} playerHealthPotion={playerHealthPotion} playerStaminaPotion={playerStaminaPotion}

// enemyHealth={enemyHealth} enemyMaxHealth={enemyMaxHealth} enemyAttackLow={enemyAttackLow} enemyAttackHigh={enemyAttackHigh} enemySpeed={enemySpeed} enemyMaxSpeed={enemyMaxSpeed} enemyArmor={enemyArmor} enemyReward={enemyReward}

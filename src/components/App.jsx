import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import GameMap from './GameMap/GameMap';
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
        playerHealthPotionEffect: 15,
        playerStaminaPotion: 0,
        playerDamageDone: 0
    })

    const [playerAttackTimerState, setPlayerAttackTimerState] = useState(0)
    const [playerAttackTimerStateMax, setPlayerAttackTimerStateMax] = useState(0)
    const [runPlayerAttackTimer, setRunPlayerAttackTimer] = useState(false)

    const [playerAttacked, setPlayerAttacked] = useState(1)

    const [playerAttackCloseEnemyTimerState, setPlayerAttackCloseEnemyTimerState] = useState(0)
    const [playerAttackCloseEnemyTimerStateMax, setPlayerAttackCloseEnemyTimerStateMax] = useState(0)
    const [runPlayerAttackCloseEnemyTimer, setRunPlayerAttackCloseEnemyTimer] = useState(false)

    const [playerAttackedCloseEnemy, setPlayerAttackedCloseEnemy] = useState(1)


    const [startCombatCheck, setStartCombatCheck] = useState(false)

    const [enemyOne, setEnemyOne] = useState({
        enemyName: "",
        enemyMaxHealth: 0, 
        enemyHealth: 0, 
        enemyAttackLow: 0,
        enemyAttackHigh: 0, 
        enemySpeed: 0, 
        enemyMaxSpeed: 0, 
        enemyArmor: 0, 
        enemyReward: 0,
        enemyRewardCheck: 0,
        enemyColor: "primary"
    })

    const [enemyTwo, setEnemyTwo] = useState({
        enemyName: "",
        enemyMaxHealth: 1, 
        enemyHealth: 1, 
        enemyAttackLow: 0, 
        enemyAttackHigh: 0,
        enemySpeed: 0, 
        enemyMaxSpeed: 0, 
        enemyArmor: 0, 
        enemyReward: 0,
        enemyRewardCheck: 0,
        enemyColor: "info"
    })
    const [enemyThree, setEnemyThree] = useState({
        enemyName: "",
        enemyMaxHealth: 1,
        enemyHealth: 1, 
        enemyAttackLow: 0, 
        enemyAttackHigh: 0, 
        enemySpeed: 0, 
        enemyMaxSpeed: 0, 
        enemyArmor: 0, 
        enemyReward: 0,
        enemyRewardCheck: 0,
        enemyColor: "secondary"
    })

    const [enemiesInRoomCheck, setEnemiesInRoomCheck] = useState(false)

    const [numberOfEnemiesInRoom, setNumberOfEnemiesInRoom] = useState(0)
    // const [enemyDamageDone, setEnemyDamageDone] = useState(0)

    const[currentRoom, setCurrentRoom] = useState(0)
    const[currentRoomStatus, setCurrentRoomStatus] = useState(0)

    const [roomTwoStatus, setRoomTwoStatus] = useState(0)
    const [roomThreeStatus, setRoomThreeStatus] = useState(0)
    const [roomFourStatus, setRoomFourStatus] = useState(0)
    const [roomFiveStatus, setRoomFiveStatus] = useState(0)
    const [roomSixStatus, setRoomSixStatus] = useState(0)
    const [roomSevenStatus, setRoomSevenStatus] = useState(0)
    const [roomEightStatus, setRoomEightStatus] = useState(0)
    const [roomNineStatus, setRoomNineStatus] = useState(0)
    const [roomTenStatus, setRoomTenStatus] = useState(0)
    const [roomElevenStatus, setRoomElevenStatus] = useState(0)
    const [roomTwelveStatus, setRoomTwelveStatus] = useState(0)



    const [runEnemyOneAttackTimer, setRunEnemyOneAttackTimer] = useState(false)
    const [runEnemyTwoAttackTimer, setRunEnemyTwoAttackTimer] = useState(false)
    const [runEnemyThreeAttackTimer, setRunEnemyThreeAttackTimer] = useState(false)

useEffect(() => {
    if(playerAttackTimerState < 0 & runPlayerAttackTimer === false){
        setPlayerAttackTimerState(playerAttackTimerStateMax)
        setPlayerAttacked(2)
    }
    if(playerAttackTimerState >= 0 & runPlayerAttackTimer === true){
        setRunPlayerAttackTimer(false)
        if(enemyOne.enemyHealth > 0 || enemyTwo.enemyHealth > 0 || enemyThree.enemyHealth > 0){
            playerAttackTimer(playerAttackTimerState)
        }
    }

    if(playerAttackCloseEnemyTimerState < 0 & runPlayerAttackCloseEnemyTimer === false){
        setPlayerAttackCloseEnemyTimerState(playerAttackCloseEnemyTimerStateMax)
        setPlayerAttackedCloseEnemy(2)
    }
    if(playerAttackCloseEnemyTimerState >= 0 & runPlayerAttackCloseEnemyTimer === true){
        setRunPlayerAttackCloseEnemyTimer(false)
        if(enemyOne.enemyHealth > 0 || enemyTwo.enemyHealth > 0 || enemyThree.enemyHealth > 0){
            playerAttackCloseEnemyTimer(playerAttackCloseEnemyTimerState)
        }
    }

    if(enemyOne.enemyHealth > 0 & startCombatCheck === true & runEnemyOneAttackTimer === true){
        setRunEnemyOneAttackTimer(false)
        enemyOneAttackTimer()
    }
    if(enemyTwo.enemyHealth > 0 & startCombatCheck === true & runEnemyTwoAttackTimer === true){
        setRunEnemyTwoAttackTimer(false)
        enemyTwoAttackTimer()
    }
    if(enemyThree.enemyHealth > 0 & startCombatCheck === true & runEnemyThreeAttackTimer === true){
        setRunEnemyThreeAttackTimer(false)
        enemyThreeAttackTimer()
    }
    if(enemyOne.enemyHealth <= 0 & enemyTwo.enemyHealth <= 0 & enemyThree.enemyHealth <= 0){
        setCurrentRoomStatusClearEnemy()
        setStartCombatCheck(false)
    }

    if(enemiesInRoomCheck === true){
        setEnemiesInRoomCheck(false)
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

    function useHealthPotion() {
        if(player.playerHealthPotion <= 0){
            return(alert("You are out of health potions!"))
        }
        if(player.playerHealth + player.playerHealthPotionEffect > player.playerMaxHealth){
            setPlayer (prevPlayer => {
                return {...prevPlayer,
                playerHealthPotion: player.playerHealthPotion - 1,
                playerHealth: player.playerMaxHealth
            }
            })
        } 
        if(player.playerHealth >= player.playerMaxHealth){
            return(alert("You are at max health!"))
        }
        if(player.playerHealth + player.playerHealthPotionEffect < player.playerMaxHealth){
            setPlayer (prevPlayer => {
                return {...prevPlayer,
                playerHealthPotion: player.playerHealthPotion - 1,
                playerHealth: player.playerHealth + player.playerHealthPotionEffect
            }
            })
        }
        setPlayerAttacked(1)
        setRunPlayerAttackTimer(true)
    }

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
                        playerMaxHealth: player.playerMaxHealth + 10
                    }
                })
            } else {
                alert("You can't afford a health upgrade.")
            }
        }

        if(item === "attackLow"){
            if(player.playerCoins >= 6 & player.playerAttackLow < player.playerAttackHigh){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                        playerCoins: player.playerCoins - 6,
                        playerAttackLow: player.playerAttackLow + 1
                    }
                })
            } 
            if(player.playerAttackLow >= player.playerAttackHigh){
                alert("Your minimum attack can not exceed you maximum attack.")
            }
            if(player.playerCoins < 6){
                alert("You can't afford a minimum attack upgrade.")
            }
        }

        if(item === "attackHigh"){
            if(player.playerCoins >= 3){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                        playerCoins: player.playerCoins - 3,
                        playerAttackHigh: player.playerAttackHigh + 1
                    }
                })
            } else {
                alert("You can't afford a maximum attack upgrade.")
            }
        }

        if(item === "speed"){
            if(player.playerCoins >= 2){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                        playerCoins: player.playerCoins - 2,
                        playerMaxSpeed: player.playerMaxSpeed + 1,
                        playerSpeed: player.playerSpeed + 1
                    }
                })
            } else {
                alert("You can't afford a speed upgrade.")
            }
        }

        if(item === "armor"){
            if(player.playerCoins >= 3){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                        playerCoins: player.playerCoins - 3,
                        playerArmor: player.playerArmor + 1
                    }
                })
            } else {
                alert("You can't afford an armor upgrade.")
            }
        }

        if(item === "healthPotion"){
            if(player.playerHealthPotion >= 10){
                return (alert ("You can only have up to ten health potions."))
            }
            if(player.playerCoins >= 2){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                        playerCoins: player.playerCoins - 2,
                        playerHealthPotion: player.playerHealthPotion + 1
                    }
                })
            } else {
                alert("You can't afford a health potion.")
            }
        }

        if(item === "staminaPotion"){
            if(player.playerStaminaPotion >= 8){
                return (alert("You can only have up to eight stamina potions."))
            }
            if(player.playerCoins >= 1){
                setPlayer(prevPlayer =>{
                    return {...prevPlayer,
                        playerCoins: player.playerCoins - 1,
                        playerStaminaPotion: player.playerStaminaPotion + 1
                    }
                })
            } else {
                alert("You can't afford a stamina potion.")
            }
        }
    }

    function resetRoomStatus() {
        setRoomTwoStatus(0)
        setRoomThreeStatus(0)
        setRoomFiveStatus(0)
        setRoomSixStatus(0)
        setRoomSevenStatus(0)
        setRoomNineStatus(0)
        setRoomTenStatus(0)
        setRoomElevenStatus(0)
        setEnemyOne(prevEnemyOne => {
            return {...prevEnemyOne, 
                enemyRewardCheck: 0
            }
        })
        setEnemyTwo(prevEnemyTwo => {
            return {...prevEnemyTwo, 
                enemyRewardCheck: 0
            }
        })
        setEnemyThree(prevEnemyThree => {
            return {...prevEnemyThree, 
                enemyRewardCheck: 0
            }
        })
        setPlayerAttacked(1)
        setStartCombatCheck(false)
        setPlayer(prevPlayer =>{
            return {...prevPlayer,
            playerSpeed: player.playerMaxSpeed
            }
        })
    }

    function pickClass(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion, attackTimer, attackCloseEnemyTimer) {
        console.log(health, maxHealth, attackLow, attackHigh, speed, maxSpeed, armor, coins, healthPotion, staminaPotion, attackTimer, attackCloseEnemyTimer)
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
        setPlayerAttackCloseEnemyTimerState(attackCloseEnemyTimer)
        setPlayerAttackCloseEnemyTimerStateMax(attackCloseEnemyTimer)
        
        if(gameTick === 0){
            gameTime()
        }
    }

    function createEnemy(enemyName, maxHealth, health, attackLow, attackHigh, speed, armor, reward, enemy2Name, maxHealth2, health2, attack2Low, attack2High, speed2, armor2, reward2, enemy3Name, maxHealth3, health3, attack3Low, attack3High, speed3, armor3, reward3, numberOfEnemiesInRoom) {
        setEnemyOne(prevEnemyOne => {
            return {...prevEnemyOne,
                enemyName: enemyName,
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
                enemyName: enemy2Name,
                enemyMaxHealth: maxHealth2,
                enemyHealth: health2,
                enemyAttackLow: attack2Low,
                enemyAttackHigh: attack2High,
                enemySpeed: speed2,
                enemyMaxSpeed: speed2,
                enemyArmor: armor2,
                enemyReward: reward2
            }
        })
        setEnemyThree(prevEnemyThree => {
            return {...prevEnemyThree,
                enemyName: enemy3Name,
                enemyMaxHealth: maxHealth3,
                enemyHealth: health3,
                enemyAttackLow: attack3Low,
                enemyAttackHigh: attack3High,
                enemySpeed: speed3,
                enemyMaxSpeed: speed3,
                enemyArmor: armor3,
                enemyReward: reward3
            }
        })
        setNumberOfEnemiesInRoom(numberOfEnemiesInRoom)
    }

                        // *ROOM MOVEMENT, CREATES ENEMIES FOR NEXT ROOM, ACCOUNTS FOR AND CHANGES PLAYER SPEED

    function roomMovement(nowCurrentRoom){
        setCurrentRoom(nowCurrentRoom)
        setPlayerAttackTimerState(playerAttackTimerStateMax)
        setPlayerAttackCloseEnemyTimerState(playerAttackCloseEnemyTimerStateMax)
        setPlayerAttacked(1)
        setPlayerAttackedCloseEnemy(1)
        setEnemyOne(prevEnemyOne => {
            return {...prevEnemyOne, 
                enemyRewardCheck: 0
            }
        })
        setEnemyTwo(prevEnemyTwo => {
            return {...prevEnemyTwo, 
                enemyRewardCheck: 0
            }
        })
        setEnemyThree(prevEnemyThree => {
            return {...prevEnemyThree, 
                enemyRewardCheck: 0
            }
        })

        if(player.playerSpeed > 0){
            setCurrentRoom(nowCurrentRoom)
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                    playerSpeed: player.playerSpeed - 1
                }
            })
        }
            // ?enemyName, enemyMaxHealth, EnemyHealth, enemyAttackLow, enemyAttackHigh, enemySpeed, enemyArmor, enemyReward
        if(nowCurrentRoom === 2 & roomTwoStatus === 0) {
            createEnemy("Enemy One", 20, 20, 2, 3, 5, 1, 1, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 1)
        }
        if(nowCurrentRoom === 3 & roomThreeStatus === 0){
            createEnemy("Enemy One", 15, 15, 4, 5, 3, 2, 2, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 1) //One Square 15, 15, 4, 5, 3, 2, 2
        }
        if(nowCurrentRoom === 4 & roomFourStatus === 0){
            createEnemy("Enemy One", 50, 50, 6, 8, 4, 3, 15, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 1) //One Boss Triangle
        }
        if(nowCurrentRoom === 5 & roomFiveStatus === 0){
            createEnemy("Enemy One", 15, 15, 10, 12, 5, 2, 5, "Enemy Two", 10, 10, 3, 5, 3, 4, 10, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 2) //Parallelogram 15, 10, 12, 2, 5, 25 - Trapezium 10, 3, 5, 9, 4, 10
        }
        if(nowCurrentRoom === 6 & roomSixStatus === 0){
            createEnemy("Enemy One", 30, 30, 4, 6, 7, 1, 1, "Enemy Two", 30, 30, 4, 6, 4, 1, 1, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 2) 
        }
        if(nowCurrentRoom === 7 & roomSevenStatus === 0){
            createEnemy("Enemy One", 15, 15, 10, 12, 5, 2, 5, "Enemy Two", 50, 50, 3, 5, 3, 4, 20, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 2) //Parallelogram 15, 10, 12, 2, 5, 25 - Trapezium 10, 3, 5, 9, 4, 10
        }
        if(nowCurrentRoom === 8 & roomEightStatus === 0) {
            createEnemy("Enemy One", 80, 80, 10, 15, 5, 5, 40, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, "NO ENEMY", 0, 0, 0, 0, 1000, 0, 0, 1)
        }
        if(nowCurrentRoom === 9 & roomNineStatus === 0){
            createEnemy("Enemy One", 30, 30, 4, 5, 4, 2, 10, "Enemy Two", 15, 15, 10, 14, 3, 5, 25, "Enemy Three", 5, 5, 1, 5, 1, 10, 15, 3) //Semi-Circle - Parallelogram - Trapezium
        }
        if(nowCurrentRoom === 10 & roomTenStatus === 0){
            createEnemy("Enemy One", 100, 100, 10, 12, 10, 4, 30, "Enemy Two", 15, 15, 5, 8, 2, 10, 25, "Enemy Three", 4, 4, 1, 5, 10, 10, 5, 3) //Semi-Circle - Parallelogram - Trapezium
        }
        if(nowCurrentRoom === 11 & roomElevenStatus === 0){
            createEnemy("Enemy One", 100, 100, 10, 12, 10, 4, 30, "Enemy Two", 15, 15, 5, 8, 2, 10, 25, "Enemy Three", 4, 4, 1, 5, 10, 10, 5, 3) //Semi-Circle - Parallelogram - Trapezium
        }
        if(nowCurrentRoom === 12 & roomTwelveStatus === 0){
            createEnemy("Enemy One", 1000, 1000, 20, 30, 10, 20, 3000, "Enemy Two", 20, 20, 6, 10, 2, 10, 25, "Enemy Three", 20, 20, 6, 10, 2, 10, 25, 3) //Semi-Circle - Parallelogram - Trapezium
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
                                            // *TIMED COMBAT
    function startCombat() {
        setStartCombatCheck(true)
        setRunPlayerAttackTimer(true)
        setRunPlayerAttackCloseEnemyTimer(true)
    }

    function playerAttackRandomizer(playerAttackLow, playerAttackHigh) {
        return Math.floor(Math.random() * (playerAttackHigh - playerAttackLow + 1) + playerAttackLow)
    }

    function currentEnemyAttackRandomizer(enemyAttackLow, enemyAttackHigh) {
        return Math.floor(Math.random() * (enemyAttackHigh - enemyAttackLow + 1) + enemyAttackLow)
    }

    // playerHasNoSpeed = () => {
    //     alert("You have no more speed! You took 10 damage. Return to Room One or use a stamina potion to regain your speed.")
    //     this.setState({
    //         playerHealth: this.state.playerHealth - 10,
    //         enemyRewardCheck: 0,
    //         enemyRewardCheck: 0,
    //         enemyRewardCheck: 0,
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
        if(enemyTwo.enemySpeed > 0){
            setEnemyTwo(prevEnemyTwo => {
                return {...prevEnemyTwo,
                    enemySpeed: enemyTwo.enemySpeed - 1
                }
            })
        }
        if(enemyTwo.enemySpeed <= 0){
            enemyTwoCounterAttack()
            setEnemyTwo(prevEnemyTwo => {
                return {...prevEnemyTwo,
                    enemySpeed: enemyTwo.enemyMaxSpeed
                }
            })
        }
    }

    function enemyTwoCounterAttack() {
        var currentEnemyAttack = currentEnemyAttackRandomizer(enemyTwo.enemyAttackLow, enemyTwo.enemyAttackHigh) - player.playerArmor
        if(currentEnemyAttack <= 0){
            currentEnemyAttack = 1
        }
        playerTakeDamage(currentEnemyAttack)
    }
    // !END ENEMY TWO TIMED ATTACK SEQUENCE --- AFTER PLAYER TAKE DAMAGE

    // *START ENEMY THREE TIMED ATTACK SEQUENCE
    function enemyThreeAttackTimer(){
        console.log("Enemy THREE Attack Timer")
        if(enemyThree.enemySpeed > 0){
            setEnemyThree(prevEnemyThree => {
                return {...prevEnemyThree,
                    enemySpeed: enemyThree.enemySpeed - 1
                }
            })
        }
        if(enemyThree.enemySpeed <= 0){
            enemyThreeCounterAttack()
            setEnemyThree(prevEnemyThree => {
                return {...prevEnemyThree,
                    enemySpeed: enemyThree.enemyMaxSpeed
                }
            })
        }
    }

    function enemyThreeCounterAttack() {
        var currentEnemyAttack = currentEnemyAttackRandomizer(enemyThree.enemyAttackLow, enemyThree.enemyAttackHigh) - player.playerArmor
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

    // *CLOSE ENEMY

    function playerAttackCloseEnemyTimer(timer) {
        var timeHolder = timer
        if(timeHolder >= 0){
            console.log(`THIS IS PLAYER ATTACK CLOSE ENEMY TIMER ${timeHolder}`)
            playerAttackCloseEnemyTimerSetState(timeHolder)
        }
    }

    function playerAttackCloseEnemyTimerSetState(timer){
        var newTimeHolder = timer - 1
        setTimeout(() => {setPlayerAttackCloseEnemyTimerState(prevPlayerAttackCloseEnemyTimerState => prevPlayerAttackCloseEnemyTimerState -1); }, 1000);
        setTimeout(() => {playerAttackCloseEnemyTimer(newTimeHolder); }, 1000);
    }

                                            // !END PLAYER ATTACK TIMER



    // *PLAYER ATTACK BUTTON STARTS HERE
    function playerAttackMove(attackEnemy) {
        var currentPlayerAttack = playerAttackRandomizer(player.playerAttackLow, player.playerAttackHigh)
        if(attackEnemy === 1 & enemyOne.enemyHealth <= 0){
            deadCheck(currentPlayerAttack, attackEnemy, "standardAttack")
            killedEnemyToastMessage(attackEnemy)
        }
        if(attackEnemy === 1 & enemyOne.enemyHealth > 0){
            currentPlayerAttack = currentPlayerAttack - enemyOne.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            playerAttackMoveSetState(1, currentPlayerAttack, "standardAttack")
            deadCheck(currentPlayerAttack, attackEnemy, "standardAttack")
        }

        if(attackEnemy === 2 & enemyTwo.enemyHealth <= 0){
            deadCheck(currentPlayerAttack, attackEnemy, "standardAttack")
            killedEnemyToastMessage(attackEnemy)
        }
        if(attackEnemy === 2 & enemyTwo.enemyHealth > 0){
            currentPlayerAttack = currentPlayerAttack - enemyTwo.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            playerAttackMoveSetState(2, currentPlayerAttack, "standardAttack")
            deadCheck(currentPlayerAttack, attackEnemy, "standardAttack")
        }
        if(attackEnemy === 3 & enemyThree.enemyHealth <= 0){
            deadCheck(currentPlayerAttack, attackEnemy, "standardAttack")
            killedEnemyToastMessage(attackEnemy)
        }
        if(attackEnemy === 3 & enemyThree.enemyHealth > 0){
            currentPlayerAttack = currentPlayerAttack - enemyThree.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            playerAttackMoveSetState(3, currentPlayerAttack, "standardAttack")
            deadCheck(currentPlayerAttack, attackEnemy, "standardAttack")
        }
    }

    function playerAttackCloseEnemyMove () {
        var currentPlayerAttack = player.playerAttackHigh
        var runOnce = false
        if(enemyOne.enemySpeed <= enemyTwo.enemySpeed & enemyOne.enemySpeed <= enemyThree.enemySpeed & enemyOne.enemyHealth > 0 & runOnce === false){
            currentPlayerAttack = currentPlayerAttack - enemyOne.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            runOnce = true
            playerAttackMoveSetState(1, currentPlayerAttack, "closeAttack")
            deadCheck(currentPlayerAttack, 1, "closeAttack")
        }
        if(enemyTwo.enemySpeed <= enemyOne.enemySpeed & enemyTwo.enemySpeed <= enemyThree.enemySpeed & enemyTwo.enemyHealth > 0 & runOnce === false){
            currentPlayerAttack = currentPlayerAttack - enemyTwo.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            runOnce = true
            playerAttackMoveSetState(2, currentPlayerAttack, "closeAttack")
            deadCheck(currentPlayerAttack, 2, "closeAttack")
        }
        if(enemyThree.enemySpeed <= enemyOne.enemySpeed & enemyThree.enemySpeed <= enemyTwo.enemySpeed & enemyThree.enemyHealth > 0 & runOnce === false){
            currentPlayerAttack = currentPlayerAttack - enemyThree.enemyArmor
            if(currentPlayerAttack <= 0){
                currentPlayerAttack = 1
            }
            runOnce = true
            playerAttackMoveSetState(3, currentPlayerAttack, "closeAttack")
            deadCheck(currentPlayerAttack, 3, "closeAttack")
        }
    }

    function playerAttackMoveSetState(attackEnemyNumber, currentPlayerAttack, typeOfAttack) {
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
            if(typeOfAttack === "standardAttack"){
                setPlayerAttacked(1)
            }
            if(typeOfAttack === "closeAttack"){
                setPlayerAttackedCloseEnemy(1)
            }
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
                enemyHealth: enemyTwo.enemyHealth - currentPlayerAttack
                }
            })
            if(typeOfAttack === "standardAttack"){
                setPlayerAttacked(1)
            }
            if(typeOfAttack === "closeAttack"){
                setPlayerAttackedCloseEnemy(1)
            }
            showToastMessage(currentPlayerAttack, attackEnemyNumber)
        }
        if(attackEnemyNumber === 3){
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerDamageDone: currentPlayerAttack
                }
            })
            setEnemyThree(prevEnemyThree => {
                return{...prevEnemyThree,
                enemyHealth: enemyThree.enemyHealth - currentPlayerAttack
                }
            })
            if(typeOfAttack === "standardAttack"){
                setPlayerAttacked(1)
            }
            if(typeOfAttack === "closeAttack"){
                setPlayerAttackedCloseEnemy(1)
            }
            showToastMessage(currentPlayerAttack, attackEnemyNumber)
        }
    }

    function deadCheck(currentPlayerAttack, attackEnemy, typeOfAttack) {
        if(enemyOne.enemyHealth - currentPlayerAttack <= 0 & enemyOne.enemyRewardCheck === 0 & attackEnemy === 1){
            deadCheckSetState(1)
        }
        if(enemyTwo.enemyHealth - currentPlayerAttack <= 0 & enemyTwo.enemyRewardCheck === 0 & attackEnemy === 2){
            deadCheckSetState(2)
        }
        if(enemyThree.enemyHealth - currentPlayerAttack <= 0 & enemyThree.enemyRewardCheck === 0 & attackEnemy === 3){
            deadCheckSetState(3)
        }
        if(typeOfAttack === "standardAttack"){
            setRunPlayerAttackTimer(true)
        }
        if(typeOfAttack === "closeAttack"){
            setRunPlayerAttackCloseEnemyTimer(true)
        }
    }

    function deadCheckSetState(enemyNumber) {
        if(enemyNumber === 1){
            setEnemyOne(prevEnemyOne => {
                return {...prevEnemyOne,
                enemyHealth: 0,
                enemyRewardCheck: 1,
                enemySpeed: 1000
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
                enemyHealth: 0,
                enemyRewardCheck: 1,
                enemySpeed: 1000
                }
            })
            console.log("SET ENEMY TWO KILLED --------------------------------------------------------")
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerCoins: player.playerCoins + enemyTwo.enemyReward
                }
            })
        }
        if(enemyNumber === 3){
            setEnemyThree(prevEnemyThree => {
                return {...prevEnemyThree,
                enemyHealth: 0,
                enemyRewardCheck: 1,
                enemySpeed: 1000
                }
            })
            console.log("SET ENEMY THREE KILLED --------------------------------------------------------")
            setPlayer(prevPlayer => {
                return {...prevPlayer,
                playerCoins: player.playerCoins + enemyThree.enemyReward
                }
            })
        }
    }



    function setCurrentRoomStatusClearEnemy() {
        if(currentRoom === 2){
            setRoomTwoStatus(1)
        }

        if(currentRoom === 3){
            setRoomThreeStatus(1)
        }

        if(currentRoom === 4 & roomFourStatus !== 2){
            setRoomFourStatus(1)
        }

        if(currentRoom === 5){
            setRoomFiveStatus(1)
        }

        if(currentRoom === 6){
            setRoomSixStatus(1)
        }

        if(currentRoom === 7){
            setRoomSevenStatus(1)
        }

        if(currentRoom === 8 & roomEightStatus !== 2){
            setRoomEightStatus(1)
        }

        if(currentRoom === 9){
            setRoomNineStatus(1)
        }

        if(currentRoom === 10){
            setRoomTenStatus(1)
        }

        if(currentRoom === 11){
            setRoomElevenStatus(1)
        }

        if(currentRoom === 12 & roomTwelveStatus !== 2){
            setRoomTwelveStatus(1)
        }
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
    //     var highEnemyHealth = Math.max(this.state.enemyHealth, this.state.enemyHealth, this.state.enemyHealth)
    //     if(highEnemyHealth === this.state.enemyHealth){
    //         this.setState({
    //             enemyHealth: this.state.enemyHealth - (this.state.playerAttackHigh - this.state.enemyArmor),
    //             playerSpeed: this.state.playerSpeed - 1,
    //             playerDamageDone: this.state.playerAttackHigh - this.state.enemyArmor,
    //             })
    //             return
    //     }
    //     if(highEnemyHealth === this.state.enemyHealth){
    //         this.setState({
    //             enemyHealth: this.state.enemyHealth - (this.state.playerAttackHigh - this.state.enemy2Armor),
    //             playerSpeed: this.state.playerSpeed - 1,
    //             playerDamageDone: this.state.playerAttackHigh - this.state.enemyArmor,
    //             })
    //             return
    //     }
    //     if(highEnemyHealth === this.state.enemyHealth){
    //         this.setState({
    //             enemyHealth: this.state.enemyHealth - (this.state.playerAttackHigh - this.state.enemy3Armor),
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


    function openChest() {
        if(currentRoom === 4){
            setPlayer (prevPlayer => {
                return {...prevPlayer,
                playerHealthPotionEffect: player.playerHealthPotionEffect + 15
                }
            })
            setRoomFourStatus(2)
        }
        if(currentRoom === 8){
            setPlayer (prevPlayer => {
                return {...prevPlayer,
                playerHealthPotionEffect: player.playerHealthPotionEffect + 15
                }
            })
            setRoomEightStatus(2)
        }
        if(currentRoom === 12){
            setPlayer (prevPlayer => {
                return {...prevPlayer,
                playerHealthPotionEffect: player.playerHealthPotionEffect + 15
                }
            })
            setRoomTwelveStatus(2)
        }
    }

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

    function killedEnemyToastMessage(attackEnemyNumber){
        if(attackEnemyNumber === 1){
            toast.info("You already killed enemy 1 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if(attackEnemyNumber === 2){
            toast.info("You already killed enemy 2 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if(attackEnemyNumber === 3){
            toast.info("You already killed enemy 3 !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    function showToastMessageRed(damageTaken) {
        toast.error(`You took ${damageTaken} damage !`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500
        });
    }


                                            // *GAME TIMER

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


                                            // !END ROOM TIMER
        return(
            <div class="bg-dark bg-opacity-25 text-dark">
            <BrowserRouter>
            <Navbar gameTick={gameTick} devButtonUpgrade={devButtonUpgrade} devButtonDowngrade={devButtonDowngrade} player={player} />
            <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home player={player} enemyOne={enemyOne} pickClass={pickClass} />} />

                    <Route path="/GameBoard" element={<GameBoard useHealthPotion={useHealthPotion} buyFromStore={buyFromStore} roomMovement={roomMovement} createEnemy={createEnemy} />} />

                    <Route path="/RoomTwo" element={<RoomTwo useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomTwoStatus={roomTwoStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomThree" element={<RoomThree useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomThreeStatus={roomThreeStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomFour" element={<RoomFour openChest={openChest} useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomFourStatus={roomFourStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomFive" element={<RoomFive useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomFiveStatus={roomFiveStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomSix" element={<RoomSix useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomSixStatus={roomSixStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat} 
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomSeven" element={<RoomSeven useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomSevenStatus={roomSevenStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomEight" element={<RoomEight openChest={openChest} useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomEightStatus={roomEightStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomNine" element={<RoomNine useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomNineStatus={roomNineStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat} 
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomTen" element={<RoomTen useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomTenStatus={roomTenStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomEleven" element={<RoomEleven useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomElevenStatus={roomElevenStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />

                    <Route path="/RoomTwelve" element={<RoomTwelve openChest={openChest} useHealthPotion={useHealthPotion} resetRoomStatus={resetRoomStatus} roomMovement={roomMovement} enemyOne={enemyOne} enemyTwo={enemyTwo} enemyThree={enemyThree} roomTwelveStatus={roomTwelveStatus} currentRoom={currentRoom}  numberOfEnemiesInRoom={numberOfEnemiesInRoom} startCombatCheck={startCombatCheck} startCombat={startCombat}
                    playerAttacked={playerAttacked} playerAttackTimerState={playerAttackTimerState} playerAttackTimerStateMax={playerAttackTimerStateMax} playerAttackMove={playerAttackMove} 
                    playerAttackedCloseEnemy={playerAttackedCloseEnemy} playerAttackCloseEnemyTimerState={playerAttackCloseEnemyTimerState} playerAttackCloseEnemyTimerStateMax={playerAttackCloseEnemyTimerStateMax} playerAttackCloseEnemyMove={playerAttackCloseEnemyMove} />} />
                </Routes>
                {/* <GameMap /> */}
            </BrowserRouter>
            </div>
        )
}

export default App;

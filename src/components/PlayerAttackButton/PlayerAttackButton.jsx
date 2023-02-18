import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlayerAttackButton = (props) => {

    function attackButtonOne(){
        if(props.enemyOne.enemyHealth > 0){
            return(
                <button className={`btn btn-${props.enemyOne.enemyColor}`} onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
            )
        }
    }

    function attackButtonTwo(){
        if(props.enemyTwo.enemyHealth > 0){
            return(
                <button className={`btn btn-${props.enemyTwo.enemyColor}`} onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
            )
        }
    }

    function attackButtonThree(){
        if(props.enemyThree.enemyHealth > 0){
            return(
                <button className={`btn btn-${props.enemyThree.enemyColor}`} onClick={() => props.playerAttackMove(3)}>Attack enemy 3</button>
            )
        }
    }

    if(props.playerAttacked === 1){
        return(
            <ProgressBar variant="danger" min={0} max={props.playerAttackTimerStateMax} now={props.playerAttackTimerState} label={`Attack in ${props.playerAttackTimerState}/${props.playerAttackTimerStateMax}`}/>
        )
    }
    
    if(props.playerAttacked === 2){
        if(props.numberOfEnemiesInRoom === 1){
            return(
                <div>
                    <button className={`btn btn-${props.enemyOne.enemyColor}`} onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                    <button className="healthPotion" onClick={() => props.useHealthPotion()}>Use health potion</button>
                    <Link to="/GameBoard" >
                        <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Return Home</button>
                    </Link>
                </div>
            )
        }

        if(props.numberOfEnemiesInRoom === 2){
            return(
                <div>
                    {attackButtonOne()}
                    {attackButtonTwo()}
                    <button className="healthPotion" onClick={() => props.useHealthPotion()}>Use health potion</button>
                    <Link to="/GameBoard" >
                        <button className="gameBoardButton" onClick={() => props.resetRoomStatus()}>Return Home</button>
                    </Link>
                </div>
            )
        }

        if(props.numberOfEnemiesInRoom === 3){
            return(
                <div>
                    {attackButtonOne()}
                    {attackButtonTwo()}
                    {attackButtonThree()}
                    <button className="btn btn-danger" onClick={() => props.useHealthPotion()}>Use health potion</button>
                    <Link to="/GameBoard" >
                        <button className="btn btn-success" onClick={() => props.resetRoomStatus()}>Return Home</button>
                    </Link>
                </div>
            )
        }
    }
    else{
        return (
            <div>
                <h1> BROKEN </h1>
            </div>
        )
    }
}

export default PlayerAttackButton;
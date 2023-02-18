import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlayerCloseEnemyAttackButton = (props) => {
    if(props.playerAttackedCloseEnemy === 1){
        return(
            <ProgressBar variant="danger" min={0} max={props.playerAttackCloseEnemyTimerStateMax} now={props.playerAttackCloseEnemyTimerState} label={`Attack in ${props.playerAttackCloseEnemyTimerState}/${props.playerAttackCloseEnemyTimerStateMax}`}/>
        )
    }
    if(props.playerAttackedCloseEnemy === 2){
            return(
                <div>
                    <button className="attackClosestMove" onClick={() => props.playerAttackClosestEnemyMove()}>Power Attack Closest Enemy</button>
                </div>
            )
        }
    else{
        return (
            <div>
                <h1> BROKEN </h1>
            </div>
        )
    }
}

export default PlayerCloseEnemyAttackButton;
import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlayerAttackButton = (props) => {
    if(props.playerAttacked === 1){
        return(
            <ProgressBar variant="danger" min={0} max={props.playerAttackTimerStateMax} now={props.playerAttackTimerState} label={`Attack in ${props.playerAttackTimerState}/${props.playerAttackTimerStateMax}`}/>
        )
    }
    if(props.playerAttacked === 2){
        return(
            <div>
                <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
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

export default PlayerAttackButton;
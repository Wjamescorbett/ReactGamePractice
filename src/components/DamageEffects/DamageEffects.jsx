import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PlayerAttackButton from '../PlayerAttackButton/PlayerAttackButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DamageEffects = (props) => {
    if(props.startCombatCheck === false){
        return(
            <div>
                <button className="timedCombatSequenceTest" onClick={() => props.startCombat()}>Start Combat!</button>
            </div>
        )
    }
    if(props.startCombatCheck === true){
        if(props.numberOfEnemiesInRoom === 1){
            return(
                <div>
                    <h1>Combat Started</h1>
                </div>
                // <div>
                //     <PlayerAttackButton rechargeAttackMove={props.rechargeAttackMove} playerAttacked={props.playerAttacked} playerAttackMove={props.playerAttackMove} playerAttackTimerState={props.playerAttackTimerState} playerAttackTimerStateMax={props.playerAttackTimerStateMax} />
                //     <ToastContainer />
                //     <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
                //     <button className="healMove">Heal</button>
                // </div>
            )
        }
        if(props.numberOfEnemiesInRoom === 2){
            return(
                <div>
                    <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                    <ToastContainer />
                    <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                    <ToastContainer />
                    <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
                    <button className="healMove">Heal</button>
                </div>
            )
        }
        if(props.numberOfEnemiesInRoom === 3){
            return(
                <div>
                    <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
                    <ToastContainer />
                    <button className="attackMove" onClick={() => props.playerAttackMove(2)}>Attack enemy 2</button>
                    <ToastContainer />
                    <button className="attackMove" onClick={() => props.playerAttackMove(3)}>Attack enemy 3</button>
                    <ToastContainer />
                    <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
                    <button className="healMove">Heal</button>
                </div>
            )
        }
    }
}

export default DamageEffects;
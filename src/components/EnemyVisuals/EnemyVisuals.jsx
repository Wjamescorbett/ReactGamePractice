import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const EnemyVisuals = (props) => {
    if(props.currentRoom === 2){
        return(
            <div>
                <h2>You are encountering a dangerous circle. It has {props.enemyHealth} health, {props.enemyAttackLow} attackLow, {props.enemyAttackHigh} attackHigh, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <ProgressBar variant="danger" min={0} max={props.enemyMaxHealth} now={props.enemyHealth} label={`Health ${props.enemyHealth}/${props.enemyMaxHealth}`}/>;
            </div>
        )
    }
    if(props.numberOfEnemiesInRoom === 2){
        return(
            <div>
                
                <button className="healMove">Heal</button>
            </div>
        )
    }
    if(props.numberOfEnemiesInRoom === 3){
        return(
            <div>
                
                <button className="healMove">Heal</button>
            </div>
        )
    }
}

export default EnemyVisuals;
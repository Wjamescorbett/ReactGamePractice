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
    if(props.currentRoom === 3){
        return(
            <h1> TEST </h1>
        )
    }
    if(props.currentRoom === 4){
        return(
            <h1> TEST </h1>
        )
    }
    if(props.currentRoom === 5){
        return(
            <h1> TEST </h1>
        )
    }
    if(props.currentRoom === 6){
        return(
            <div>
                <h2>You are encountering two dangerous circles. </h2>
                <h2>The first circle It has {props.enemyHealth} health, {props.enemyAttackLow} attackLow, {props.enemyAttackHigh} attackHigh, {props.enemySpeed} speed, {props.enemyArmor} armor, and will reward you with {props.enemyReward} coin. </h2>
                <h2>The second dangerous circle has {props.enemy2Health} health, {props.enemy2AttackLow} attackLow, {props.enemy2AttackHigh} attackHigh, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
            </div>
        )
    }
}

export default EnemyVisuals;
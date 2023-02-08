import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const EnemyVisuals = (props) => {
    if(props.currentRoom === 2){
        return(
            <div>
                <h2>You are encountering a dangerous circle. It has {props.enemyOne.enemyHealth} health, {props.enemyOne.enemyAttackLow} attackLow, {props.enemyOne.enemyAttackHigh} attackHigh, {props.enemyOne.enemySpeed} speed, {props.enemyOne.enemyArmor} armor, and will reward you with {props.enemyOne.enemyReward} coin. </h2>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                </div>
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

                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                </div>
                <h2>The second dangerous circle has {props.enemy2Health} health, {props.enemy2AttackLow} attackLow, {props.enemy2AttackHigh} attackHigh, {props.enemy2Speed} speed, {props.enemy2Armor} armor, and will reward you with {props.enemy2Reward} coin. </h2>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemy2MaxHealth} now={props.enemyTwo.enemy2Health} label={`Health ${props.enemyTwo.enemy2Health}/${props.enemyTwo.enemy2MaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemy2MaxSpeed} now={props.enemyTwo.enemy2Speed} label={`Speed ${props.enemyTwo.enemy2Speed}/${props.enemyTwo.enemy2MaxSpeed}`}/>
                </div>
            </div>
        )
    }
    if(props.currentRoom === 9){
        return(
        <div>
            <h2>You are encountering three different shapes! Be careful and think about what you should attack first. </h2>
            <h2>Enemy One</h2>
            <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                </div>
                <h2>Enemy 2 has {props.enemyTwo.enemy2Health} health, {props.enemyTwo.enemy2AttackLow} attackLow, {props.enemyTwo.enemy2AttackHigh} attackHigh, {props.enemyTwo.enemy2Speed} speed, {props.enemyTwo.enemy2Armor} armor, and will reward you with {props.enemyTwo.enemy2Reward} coin. </h2>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemy2MaxHealth} now={props.enemyTwo.enemy2Health} label={`Health ${props.enemyTwo.enemy2Health}/${props.enemyTwo.enemy2MaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemy2MaxSpeed} now={props.enemyTwo.enemy2Speed} label={`Speed ${props.enemyTwo.enemy2Speed}/${props.enemyTwo.enemy2MaxSpeed}`}/>
                </div>
                <h2>Enemy 3 has </h2>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyThree.enemy3MaxHealth} now={props.enemyThree.enemy3Health} label={`Health ${props.enemyThree.enemy3Health}/${props.enemyThree.enemy3MaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyThree.enemy3MaxSpeed} now={props.enemyThree.enemy3Speed} label={`Speed ${props.enemyThree.enemy3Speed}/${props.enemyThree.enemy3MaxSpeed}`}/>
                </div>
        </div>
        )
    }
}

export default EnemyVisuals;